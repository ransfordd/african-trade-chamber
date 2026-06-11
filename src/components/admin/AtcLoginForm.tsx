'use client'

import React, { useActionState } from 'react'
import Link from 'next/link'
import { useConfig, useTranslation } from '@payloadcms/ui'
import { formatAdminURL, getSafeRedirect } from 'payload/shared'

import { adminLoginAction, type AdminLoginState } from '@/lib/admin-login-action'

const baseClass = 'login__form'
const initialState: AdminLoginState = {}

/**
 * Server-action login sets payload-token via Next.js cookies() so browsers
 * receive a valid HttpOnly cookie (Payload API Set-Cookie uses HttpOnly=true).
 */
export function AtcLoginForm({
  prefillEmail,
  prefillPassword,
  searchParams,
}: {
  prefillEmail?: string
  prefillPassword?: string
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { config } = useConfig()
  const {
    admin: {
      routes: { forgot: forgotRoute },
    },
    routes: { admin: adminRoute },
  } = config

  const { t } = useTranslation()
  const [state, formAction, isPending] = useActionState(adminLoginAction, initialState)

  const redirectParam =
    typeof searchParams.redirect === 'string' ? searchParams.redirect : ''

  getSafeRedirect({
    fallbackTo: adminRoute,
    redirectTo: redirectParam,
  })

  return (
    <form action={formAction} className={baseClass}>
      <input name="redirect" type="hidden" value={redirectParam} />

      <div className={`${baseClass}__inputWrap`}>
        <div className="field-type email">
          <label className="field-label" htmlFor="atc-login-email">
            {t('general:email')}
            <span className="required">*</span>
          </label>
          <input
            autoComplete="email"
            className="field-input"
            defaultValue={prefillEmail ?? ''}
            id="atc-login-email"
            name="email"
            required
            type="email"
          />
        </div>
        <div className="field-type password">
          <label className="field-label" htmlFor="atc-login-password">
            {t('general:password')}
            <span className="required">*</span>
          </label>
          <input
            autoComplete="current-password"
            className="field-input"
            defaultValue={prefillPassword ?? ''}
            id="atc-login-password"
            name="password"
            required
            type="password"
          />
        </div>
      </div>

      {state.error ? <p className="atc-login-error">{state.error}</p> : null}

      <div className={`${baseClass}__footer`}>
        <Link
          href={formatAdminURL({
            adminRoute,
            path: forgotRoute,
          })}
          prefetch={false}
        >
          {t('authentication:forgotPasswordQuestion')}
        </Link>

        <button
          className="btn btn--icon-style-without-border btn--size-large btn--style-primary"
          disabled={isPending}
          type="submit"
        >
          {isPending ? '…' : t('authentication:login')}
        </button>
      </div>
    </form>
  )
}
