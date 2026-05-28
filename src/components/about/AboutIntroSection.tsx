import type { AboutPageData } from '@/types/about-page'

type Props = Pick<AboutPageData, 'sectionTitle' | 'mainContent' | 'visionContent' | 'missionContent'>

function MainContent({ html }: { html: string }) {
  const parts = html.split(/<br\s*\/?>/gi).filter((p) => p.trim())
  if (parts.length <= 1) {
    return <p className="text-base leading-[1.7] text-[#333]">{html.replace(/<[^>]+>/g, '')}</p>
  }
  return (
    <>
      {parts.map((part, i) => (
        <p key={i} className="mb-4 text-base leading-[1.7] text-[#333] last:mb-0">
          {part.replace(/<[^>]+>/g, '').trim()}
        </p>
      ))}
    </>
  )
}

export function AboutIntroSection({
  sectionTitle,
  mainContent,
  visionContent,
  missionContent,
}: Props) {
  return (
    <section className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] py-10">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <div className="mb-8 rounded-xl bg-[#002740] px-6 py-8 text-center text-white shadow-[0_8px_25px_rgba(0,0,0,0.1)]">
          <h1 className="text-xl font-semibold tracking-tight md:text-[1.4rem]">{sectionTitle}</h1>
        </div>

        <div className="mb-8 rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-[0_4px_20px_rgba(0,39,64,0.08)] md:p-8">
          <MainContent html={mainContent} />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-6 text-center shadow-[0_4px_20px_rgba(0,39,64,0.08)] md:p-[25px]">
            <h2 className="mb-4 text-[0.95rem] font-medium text-[#002740]">
              <strong>Our Vision</strong>
            </h2>
            <p className="text-[15px] leading-relaxed text-[#333]">{visionContent}</p>
          </div>
          <div className="rounded-xl border border-[#e2e8f0] bg-white p-6 text-center shadow-[0_4px_20px_rgba(0,39,64,0.08)] md:p-[25px]">
            <h2 className="mb-4 text-[0.95rem] font-medium text-[#002740]">
              <strong>Our Mission</strong>
            </h2>
            <p className="text-[15px] leading-relaxed text-[#333]">{missionContent}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
