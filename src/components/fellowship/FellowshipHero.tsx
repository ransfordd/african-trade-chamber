import Image from 'next/image'
import { isLocalImage } from '@/lib/image-url'

type Props = {
  heroImageUrl: string
}

export function FellowshipHero({ heroImageUrl }: Props) {
  const local = isLocalImage(heroImageUrl)

  return (
    <div className="relative -mt-2.5 mb-8 w-screen max-w-[100vw] overflow-hidden rounded-b-[20px] shadow-[0_24px_48px_rgba(2,6,23,0.1)] [margin-left:calc(50%-50vw)] [margin-right:calc(50%-50vw)]">
      <header
        className="relative isolate flex min-h-[260px] flex-col items-center justify-center overflow-hidden px-5 py-9 sm:min-h-[clamp(280px,38vw,420px)] sm:px-7 sm:py-14"
        aria-label="Fellowship hero"
      >
        {local ? (
          <Image
            src={heroImageUrl}
            alt=""
            fill
            className="object-cover object-center scale-[1.02]"
            priority
            sizes="100vw"
          />
        ) : (
          <div
            className="absolute inset-0 scale-[1.02] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${heroImageUrl}')` }}
            aria-hidden
          />
        )}
        <div className="absolute inset-0 z-[1]" aria-hidden />
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] h-1 bg-gradient-to-r from-[#e6b422] via-[#f5d76a] to-[#e6b422]"
          aria-hidden
        />
      </header>
    </div>
  )
}
