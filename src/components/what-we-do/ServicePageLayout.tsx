import type { ReactNode } from 'react'
import { ServicesRequestForm } from '@/components/what-we-do/ServicesRequestForm'

type Props = {
  pageTitle: string
  tagline: string
  formContextLabel: string
  children: ReactNode
}

export function ServicePageLayout({ pageTitle, tagline, formContextLabel, children }: Props) {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 to-slate-200 py-8 sm:py-12">
        <div className="mx-auto max-w-[1200px] space-y-6 px-4 lg:px-8">
          <header className="rounded-2xl bg-atc-navy px-6 py-8 text-center text-white shadow-[0_8px_25px_rgba(0,0,0,0.1)] sm:py-10">
            <h1 className="text-2xl font-bold text-white sm:text-3xl">{pageTitle}</h1>
            <p className="mx-auto mt-3 max-w-xl text-base font-normal opacity-80 sm:text-lg">
              {tagline}
            </p>
          </header>
          {children}
        </div>
      </section>
      <ServicesRequestForm contextLabel={formContextLabel} />
    </>
  )
}
