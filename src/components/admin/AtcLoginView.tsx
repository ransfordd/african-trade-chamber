import type { AdminViewServerProps } from 'payload'
import { RenderServerComponent } from '@payloadcms/ui/elements/RenderServerComponent'
import { redirect } from 'next/navigation'
import { getSafeRedirect } from 'payload/shared'
import React, { Fragment } from 'react'

import { AtcLoginForm } from './AtcLoginForm'

export function AtcLoginView({ initPageResult, params, searchParams }: AdminViewServerProps) {
  const { locale, permissions, req } = initPageResult
  const {
    i18n,
    payload: { config },
    payload,
    user,
  } = req

  const {
    admin: {
      components: { afterLogin, beforeLogin } = {},
      user: userSlug,
    },
    routes: { admin },
  } = config

  const safeSearchParams = searchParams ?? {}

  const redirectUrl = getSafeRedirect({
    fallbackTo: admin,
    redirectTo: safeSearchParams.redirect ?? '',
  })

  if (user) {
    redirect(redirectUrl)
  }

  const collectionConfig =
    userSlug && userSlug in payload.collections
      ? payload.collections[userSlug as keyof typeof payload.collections]?.config
      : undefined
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
    <Fragment>
      <div className="login__brand">
        {RenderServerComponent({
          Component: config.admin?.components?.graphics?.Logo,
          importMap: payload.importMap,
          serverProps: {
            i18n,
            locale,
            params,
            payload,
            permissions,
            searchParams: safeSearchParams,
            user,
          },
        })}
      </div>
      {RenderServerComponent({
        Component: beforeLogin,
        importMap: payload.importMap,
        serverProps: {
          i18n,
          locale,
          params,
          payload,
          permissions,
          searchParams: safeSearchParams,
          user,
        },
      })}
      {!collectionConfig?.auth?.disableLocalStrategy ? (
        <AtcLoginForm
          prefillEmail={prefillEmail}
          prefillPassword={prefillPassword}
          searchParams={safeSearchParams as { [key: string]: string | string[] | undefined }}
        />
      ) : null}
      {RenderServerComponent({
        Component: afterLogin,
        importMap: payload.importMap,
        serverProps: {
          i18n,
          locale,
          params,
          payload,
          permissions,
          searchParams: safeSearchParams,
          user,
        },
      })}
    </Fragment>
  )
}
