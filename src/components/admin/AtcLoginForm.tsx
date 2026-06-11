'use client'

import React, { useMemo, useState } from 'react'
import {
  EmailField,
  Form,
  FormSubmit,
  Link,
  PasswordField,
  useAuth,
  useConfig,
  useTranslation,
} from '@payloadcms/ui'
import { formatAdminURL, getSafeRedirect } from 'payload/shared'

const baseClass = 'login__form'

/**
 * Payload's default login uses router.push after success, which can skip the
 * auth cookie on the next RSC request in production behind a reverse proxy.
 * Full-page navigation ensures the cookie is sent before /admin loads.
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
      user: userSlug,
    },
    routes: { admin: adminRoute, api: apiRoute },
  } = config

  const { t } = useTranslation()
  const { setUser } = useAuth()

  const redirectTarget = getSafeRedirect({
    fallbackTo: adminRoute,
    redirectTo: searchParams.redirect ?? '',
  })

  const initialState = useMemo(
    () => ({
      email: {
        initialValue: prefillEmail ?? '',
        valid: true,
        value: prefillEmail ?? '',
      },
      password: {
        initialValue: prefillPassword ?? '',
        valid: true,
        value: prefillPassword ?? '',
      },
    }),
    [prefillEmail, prefillPassword],
  )

  const [loginAction] = useState(() =>
    formatAdminURL({
      apiRoute,
      path: `/${userSlug}/login`,
    }),
  )

  return (
    <Form
      action={loginAction}
      className={baseClass}
      disableSuccessStatus
      initialState={initialState}
      method="POST"
      onSuccess={(data) => {
        setUser(data as Parameters<typeof setUser>[0])
        window.location.assign(redirectTarget)
      }}
      waitForAutocomplete
    >
      <div className={`${baseClass}__inputWrap`}>
        <EmailField
          field={{
            name: 'email',
            label: t('general:email'),
            required: true,
          }}
          path="email"
        />
        <PasswordField
          field={{
            name: 'password',
            label: t('general:password'),
            required: true,
          }}
          path="password"
        />
      </div>

      <Link
        href={formatAdminURL({
          adminRoute,
          path: forgotRoute,
        })}
        prefetch={false}
      >
        {t('authentication:forgotPasswordQuestion')}
      </Link>

      <FormSubmit size="large">{t('authentication:login')}</FormSubmit>
    </Form>
  )
}
