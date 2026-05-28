import Link from 'next/link'
import { SiteLogo } from '@/components/SiteLogo'
import type { SiteSettingsData } from '@/types/content'

type Props = {
  settings: Pick<
    SiteSettingsData,
    'siteName' | 'footerColumns' | 'address' | 'contactEmail'
  >
}

function FooterColumnHeading({ title }: { title: string }) {
  return (
    <div className="mb-5">
      <h3 className="text-base font-bold text-white">{title}</h3>
      <div className="mt-2 h-0.5 w-full max-w-[120px] bg-atc-yellow" aria-hidden />
    </div>
  )
}

export function Footer({ settings }: Props) {
  return (
    <footer className="bg-atc-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:gap-12 lg:grid-cols-4 lg:px-8 lg:py-14">
        {/* Column 1: logo + address + email (live site + our logo) */}
        <div>
          <SiteLogo href="/" heightClass="h-11 sm:h-12" />
          <p className="sr-only">{settings.siteName}</p>

          {settings.address ? (
            <p className="mt-5 whitespace-pre-line text-sm leading-relaxed text-white/90">
              {settings.address}
            </p>
          ) : null}

          {settings.contactEmail ? (
            <p className="mt-8 text-sm">
              <a
                href={`mailto:${settings.contactEmail}`}
                className="text-white/90 transition hover:text-atc-yellow"
              >
                {settings.contactEmail}
              </a>
            </p>
          ) : null}
        </div>

        {settings.footerColumns.map((col) => (
          <div key={col.title}>
            <FooterColumnHeading title={col.title} />
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/90 transition hover:text-atc-yellow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {settings.siteName}. All rights reserved.
      </div>
    </footer>
  )
}
