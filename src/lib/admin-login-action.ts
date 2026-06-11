'use server'

import configPromise from '@payload-config'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { generatePayloadCookie, getPayload } from 'payload'
import { getSafeRedirect } from 'payload/shared'

export type AdminLoginState = {
  error?: string
}

function isNextRedirect(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'digest' in error &&
    typeof error.digest === 'string' &&
    error.digest.startsWith('NEXT_REDIRECT')
  )
}

export async function adminLoginAction(
  _prevState: AdminLoginState,
  formData: FormData,
): Promise<AdminLoginState> {
  const email = String(formData.get('email') ?? '')
    .trim()
    .toLowerCase()
  const password = String(formData.get('password') ?? '')
  const redirectTo = String(formData.get('redirect') ?? '')

  if (!email || !password) {
    return { error: 'Email and password are required.' }
  }

  const config = await configPromise
  const payload = await getPayload({ config })

  try {
    const result = await payload.login({
      collection: 'users',
      data: { email, password },
    })

    if (!result.token) {
      return { error: 'The email or password provided is incorrect.' }
    }

    const usersAuth = payload.collections.users.config.auth
    if (!usersAuth) {
      return { error: 'Login failed. Please try again.' }
    }

    const cookie = generatePayloadCookie({
      collectionAuthConfig: usersAuth,
      cookiePrefix: payload.config.cookiePrefix,
      returnCookieAsObject: true,
      token: result.token,
    })

    const cookieStore = await cookies()
    cookieStore.set({
      name: cookie.name,
      value: cookie.value ?? '',
      httpOnly: Boolean(cookie.httpOnly),
      secure: cookie.secure ?? false,
      sameSite: (cookie.sameSite?.toLowerCase() || 'lax') as 'lax' | 'strict' | 'none',
      path: cookie.path || '/',
      expires: cookie.expires ? new Date(cookie.expires) : undefined,
    })

    const target = getSafeRedirect({
      fallbackTo: config.routes.admin,
      redirectTo,
    })

    redirect(target)
  } catch (error) {
    if (isNextRedirect(error)) {
      throw error
    }

    return { error: 'The email or password provided is incorrect.' }
  }
}
