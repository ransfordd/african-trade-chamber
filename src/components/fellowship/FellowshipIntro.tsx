type Props = {
  introText: string
}

export function FellowshipIntro({ introText }: Props) {
  return (
    <section
      className="mb-10 rounded-[18px] border border-slate-200 bg-white p-6 shadow-[0_4px_24px_rgba(2,6,23,0.06)] sm:px-10 sm:py-9"
      aria-label="Fellowship overview"
    >
      <p className="m-0 text-[17px] leading-[1.75] text-slate-900">{introText}</p>
    </section>
  )
}
