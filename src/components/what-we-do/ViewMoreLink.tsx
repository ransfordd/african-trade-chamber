import Link from 'next/link'

function ArrowIcon() {
  return (
    <svg className="ml-2 h-4 w-4 shrink-0 fill-atc-navy" viewBox="0 0 24 24" aria-hidden>
      <path d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H16.1893L13.4697 8.53033Z" />
    </svg>
  )
}

type Props = {
  href?: string
  label: string
  className?: string
}

export function ViewMoreLink({ href, label, className = '' }: Props) {
  const content = (
    <>
      <span>{label}</span>
      <ArrowIcon />
    </>
  )

  const baseClass = `mt-auto inline-flex items-center pt-3 text-base font-semibold text-atc-navy transition hover:underline ${className}`

  if (href) {
    return (
      <Link href={href} className={baseClass}>
        {content}
      </Link>
    )
  }

  return <span className={`${baseClass} cursor-default`}>{content}</span>
}
