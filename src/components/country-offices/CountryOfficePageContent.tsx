import type { CountryOfficePageContent } from '@/types/country-office-page'

type Props = {
  content: CountryOfficePageContent
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-[15px] leading-snug text-black">
          <span className="mt-0.5 shrink-0">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function CountryOfficePageContent({ content }: Props) {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-lg bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
          <h2 className="mb-4 border-b border-amber-400 pb-1 text-lg font-semibold text-black">
            Key Stakeholder Partnerships
          </h2>
          <p className="mb-4 text-[15px] leading-relaxed text-black">{content.stakeholderIntro}</p>
          <CheckList items={content.stakeholders} />
        </section>

        <section className="rounded-lg bg-white p-5 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
          <h2 className="mb-4 border-b border-amber-400 pb-1 text-lg font-semibold text-black">
            In-Country Trade Support Services
          </h2>
          <CheckList items={content.services} />
        </section>
      </div>

      {content.highlightNote ? (
        <div className="rounded-xl border-2 border-amber-400 bg-white p-6 text-center shadow-md">
          <p className="text-[15px] leading-relaxed text-black">
            <strong>Continental Leadership:</strong> {content.highlightNote}
          </p>
        </div>
      ) : null}

      {content.closingNote ? (
        <div className="rounded-xl border-2 border-slate-100 bg-white p-6 text-center shadow-md">
          <p className="text-[15px] leading-relaxed text-black">{content.closingNote}</p>
        </div>
      ) : null}
    </div>
  )
}
