type Props = {
  items: string[]
  className?: string
}

export function BulletList({ items, className = '' }: Props) {
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="relative pl-5 text-base leading-snug text-[#4a4a4a]">
          <span
            className="absolute left-0 top-2 h-2 w-2 rounded-full bg-atc-navy"
            aria-hidden
          />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function GoldDotList({ items, className = '' }: Props) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <li key={item} className="relative pl-5 text-[15px] leading-snug text-slate-700">
          <span className="absolute left-0 top-0 text-lg font-bold text-atc-yellow" aria-hidden>
            ·
          </span>
          {item}
        </li>
      ))}
    </ul>
  )
}
