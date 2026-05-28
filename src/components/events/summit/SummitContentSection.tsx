import type { SummitContentData } from '@/types/africa-trade-summit'

type Props = { data: SummitContentData }

export function SummitContentSection({ data }: Props) {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-10 font-sans text-[#333]">
      <div className="mb-10 rounded-2xl border-l-[6px] border-[#00d4aa] bg-[#f8fafc] p-8 md:p-10">
        {data.introParagraphs.map((p, i) => (
          <p key={i} className="mb-5 text-[1.1rem] leading-relaxed last:mb-0">
            {p}
          </p>
        ))}
        <div className="mt-5 rounded-xl border-2 border-[#00d4aa] bg-gradient-to-br from-[rgba(0,212,170,0.1)] to-[rgba(0,212,170,0.05)] p-6">
          <p className="text-[1.1rem] leading-relaxed">{data.sectorsHighlight}</p>
        </div>
      </div>

      <div className="mb-10 grid gap-8 md:grid-cols-[minmax(350px,1fr)]">
        <article className="rounded-2xl border border-[#e2e8f0] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-shadow hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
          <h2 className="mb-5 border-b-[3px] border-[#00d4aa] pb-2.5 text-2xl font-bold text-[#1a2332]">
            Key Features
          </h2>
          <ul className="list-none space-y-3 p-0">
            {data.keyFeatures.map((item) => (
              <li key={item} className="relative pl-6 text-base">
                <span className="absolute left-0 top-0.5 text-[0.8rem] text-[#00d4aa]" aria-hidden>
                  ▶
                </span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mb-10 rounded-2xl bg-[#f1f5f9] p-8 md:p-10">
        <h2 className="mb-6 text-center text-[1.8rem] font-bold text-[#1a2332]">Focus Areas</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.focusAreas.map((text) => (
            <div
              key={text}
              className="rounded-xl border-l-[5px] border-[#00d4aa] bg-white p-6 shadow-[0_5px_15px_rgba(0,0,0,0.08)]"
            >
              <p className="text-base leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-10 px-1">
        <h2 className="mb-6 text-center text-[1.8rem] font-bold text-[#1a2332]">
          Expected Outcomes
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.outcomes.map((o) => (
            <div
              key={o.title}
              className="rounded-xl border border-[#e2e8f0] bg-white p-6 text-center shadow-[0_5px_15px_rgba(0,0,0,0.08)]"
            >
              <h3 className="mb-2 text-[1.1rem] font-semibold text-[#1a2332]">{o.title}</h3>
              <p className="text-[#666]">{o.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-[#e2e8f0] bg-white p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.1)] md:p-10">
        <h2 className="mb-6 text-2xl font-bold text-[#1a2332]">{data.contact.heading}</h2>
        <p className="mb-2 text-[#666]">Visit the official Summit site at</p>
        <a
          href={data.contact.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="my-4 inline-block rounded-lg border-2 border-[#00d4aa] px-6 py-3 font-semibold text-[#00d4aa] no-underline transition-colors hover:text-[#4dd4ac]"
        >
          {data.contact.websiteLabel}
        </a>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5">
            <h3 className="mb-2 text-[1.1rem] font-semibold text-[#1a2332]">Email Contact</h3>
            <a
              href={`mailto:${data.contact.email}`}
              className="font-medium text-[#00d4aa] hover:text-[#4dd4ac] hover:underline"
            >
              {data.contact.email}
            </a>
          </div>
          <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5">
            <h3 className="mb-2 text-[1.1rem] font-semibold text-[#1a2332]">Phone / Mobile</h3>
            <a
              href={`tel:${data.contact.phone.replace(/\s/g, '')}`}
              className="font-medium text-[#00d4aa] hover:text-[#4dd4ac] hover:underline"
            >
              +233 50 536 6251
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
