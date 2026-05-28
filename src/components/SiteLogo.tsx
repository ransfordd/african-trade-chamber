import Image from 'next/image'
import Link from 'next/link'

export const LOGO_PATH = '/images/atc-logo.png'
export const SITE_NAME = 'African Trade Chamber'

type Props = {
  href?: string
  className?: string
  heightClass?: string
  priority?: boolean
}

export function SiteLogo({
  href = '/',
  className = '',
  heightClass = 'h-10 sm:h-12',
  priority = false,
}: Props) {
  const image = (
    <Image
      src={LOGO_PATH}
      alt={SITE_NAME}
      width={220}
      height={64}
      priority={priority}
      className={`w-auto max-w-[200px] object-contain object-left sm:max-w-[240px] ${heightClass} ${className}`}
    />
  )

  if (!href) return image

  return (
    <Link href={href} className="inline-flex shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-atc-yellow">
      {image}
      <span className="sr-only">{SITE_NAME}</span>
    </Link>
  )
}
