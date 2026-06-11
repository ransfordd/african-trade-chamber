import type { AdminViewServerProps } from 'payload'
import { redirect } from 'next/navigation'
import { getSafeRedirect } from 'payload/shared'

import { AtcAdminLogo } from './AtcAdminLogo'
import { AtcLoginForm } from './AtcLoginForm'
import { AtcLoginHeading } from './AtcLoginHeading'

export function AtcLoginView({ initPageResult, searchParams }: AdminViewServerProps) {
  const { req } = initPageResult
  const {
    payload: { config },
    user,
  } = req

  const adminRoute = config.routes.admin
  const safeSearchParams = searchParams ?? {}

  const redirectUrl = getSafeRedirect({
    fallbackTo: adminRoute,
    redirectTo: safeSearchParams.redirect ?? '',
  })

  if (user) {
    redirect(redirectUrl)
  }

  const prefillAutoLogin =
    typeof config.admin?.autoLogin === 'object' && config.admin?.autoLogin.prefillOnly

  const prefillEmail =
    prefillAutoLogin && typeof config.admin?.autoLogin === 'object'
      ? config.admin?.autoLogin.email
      : undefined

  const prefillPassword =
    prefillAutoLogin && typeof config.admin?.autoLogin === 'object'
      ? config.admin?.autoLogin.password
      : undefined

  return (
    <>
      <div className="login__brand">
        <AtcAdminLogo />
      </div>
      <AtcLoginHeading />
      <AtcLoginForm
        prefillEmail={prefillEmail}
        prefillPassword={prefillPassword}
        searchParams={safeSearchParams as { [key: string]: string | string[] | undefined }}
      />
    </>
  )
}
