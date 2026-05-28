type IconProps = { className?: string }

export function IconEnvelope({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M4 6h16v12H4V6z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

export function IconPhone({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.4 4.8 6.2 6.2l2.1-2.1c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3.1.7-.2 1L6.6 10.8z" />
    </svg>
  )
}

export function IconBuilding({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 22V4h8v4h8v14H4zm2-2h4v-4H6v4zm0-6h4V8H6v6zm6 6h4v-8h-4v8z" />
    </svg>
  )
}

export function IconClock({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  )
}

export function IconComment({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 11.5a8.4 8.4 0 01-8.4 8.4H7l-4 3V11.5a8.4 8.4 0 018.4-8.4h.6a8.4 8.4 0 018 8.4z" />
    </svg>
  )
}

export function IconShare({ className = 'h-6 w-6' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18 16.1c-.9 0-1.7.3-2.4.8l-8.4-4.8c.1-.3.1-.6.1-.9s0-.6-.1-.9l8.3-4.7c.7.5 1.5.8 2.4.8 2.5 0 4.5-2 4.5-4.5S20.5 2 18 2s-4.5 2-4.5 4.5c0 .3 0 .6.1.9l-8.4 4.8c-.7-.5-1.5-.8-2.4-.8C2 12.4 0 14.4 0 17s2 4.6 4.5 4.6 2.7-.3 3.6-.9l8.3 4.7c-.1.3-.1.6-.1.9 0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5-2-4.4-4.5-4.4z" />
    </svg>
  )
}
