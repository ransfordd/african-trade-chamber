type Props = {
  title: string
  subtitle: string
}

export function EventsPageHeader({ title, subtitle }: Props) {
  return (
    <div className="mx-auto mb-7 max-w-[1080px] rounded-[20px] bg-[#002740] px-7 py-9 text-center text-white shadow-[0_20px_40px_rgba(2,6,23,0.22)]">
      <p className="mb-3 text-[2rem] font-extrabold leading-tight tracking-tight text-white">
        {title}
      </p>
      <p className="mx-auto max-w-[820px] text-[1.05rem] font-normal leading-[1.7] text-[#dbe2ea]">
        {subtitle}
      </p>
    </div>
  )
}
