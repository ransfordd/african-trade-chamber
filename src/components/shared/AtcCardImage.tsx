type Variant = 'action' | 'intro' | 'fullWidth'

const variantHeights: Record<Variant, string> = {
  action: 'h-[200px]',
  fullWidth: 'h-[200px]',
  intro: 'h-[220px] md:h-[260px]',
}

type Props = {
  src: string
  alt: string
  variant?: Variant
  className?: string
  imageClassName?: string
}

export function AtcCardImage({
  src,
  alt,
  variant = 'action',
  className = '',
  imageClassName = '',
}: Props) {
  return (
    <div
      className={`relative w-full shrink-0 overflow-hidden ${variantHeights[variant]} ${className}`.trim()}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover object-center ${imageClassName}`.trim()}
      />
    </div>
  )
}
