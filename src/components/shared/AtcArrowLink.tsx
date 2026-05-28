import Link from 'next/link'

const ARROW_PATH =
  'M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H16.1893L13.4697 8.53033Z'

type Props = {
  href: string
  children: React.ReactNode
  external?: boolean
  className?: string
}

export function AtcArrowLink({ href, children, external, className = '' }: Props) {
  const linkClass = `group inline-flex w-fit items-center border-none bg-transparent p-0 pt-3 text-base font-semibold text-[#002740] no-underline shadow-none outline-none transition-colors hover:text-[#ffcc00] focus:text-[#ffcc00] focus:outline-none ${className}`

  const content = (
    <>
      <span className="bg-transparent">{children}</span>
      <svg
        className="ml-2 inline-block shrink-0 fill-[#002740] transition-colors group-hover:fill-[#ffcc00] group-focus:fill-[#ffcc00]"
        width={16}
        height={16}
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d={ARROW_PATH} />
      </svg>
    </>
  )

  if (external || href.startsWith('mailto:') || href.startsWith('http')) {
    return (
      <a
        href={href}
        className={linkClass}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={linkClass}>
      {content}
    </Link>
  )
}
