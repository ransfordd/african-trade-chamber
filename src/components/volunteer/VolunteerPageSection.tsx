import { VolunteerForm } from '@/components/volunteer/VolunteerForm'
import type { VolunteerPageData } from '@/types/volunteer-page'

type Props = { data: VolunteerPageData }

export function VolunteerPageSection({ data }: Props) {
  return (
    <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e9ecef] py-8">
      <div className="mx-auto max-w-[900px] px-4">
        <header className="mb-6 rounded-2xl bg-[#002740] px-6 py-8 text-center text-white">
          <h1 className="text-3xl font-bold">{data.headerTitle}</h1>
          <p className="mt-2 text-white/80">{data.headerTagline}</p>
        </header>

        <section className="mb-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="mb-3 text-lg font-semibold text-[#002740]">{data.heroTitle}</p>
          <p className="mb-3 text-[#4a4a4a]">{data.heroText}</p>
          <p className="text-[#4a4a4a]">{data.heroText2}</p>
        </section>

        <section className="mb-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold">{data.whyTitle}</h2>
          <p className="mb-3">{data.whyIntro}</p>
          <ul className="list-none space-y-2 p-0">
            {data.whyBenefits.map((b) => (
              <li key={b} className="relative pl-5 text-sm">
                <span className="absolute left-0 font-bold text-[#fbbf24]">•</span>
                {b}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-bold">{data.rolesTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.roles.map((role) => (
              <div key={role.title} className="rounded-lg bg-slate-50 p-4">
                <p className="font-bold text-[#002740]">{role.title}</p>
                <p className="text-sm text-[#4a4a4a]">{role.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-bold">{data.whoTitle}</h2>
          <p className="mb-3">{data.whoIntro}</p>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            {data.whoCanApply.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mb-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-2 text-xl font-bold">{data.commitmentTitle}</h2>
          <p className="text-sm leading-relaxed">{data.commitmentText}</p>
        </section>

        <section className="mb-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-1 text-xl font-bold text-[#002740]">{data.formTitle}</h2>
          <p className="mb-6 text-center text-sm text-slate-600">{data.formSubtitle}</p>
          <VolunteerForm formEmail={data.formEmail} submitLabel={data.submitButtonText} />
        </section>

        <section className="rounded-xl border-2 border-[#fbbf24] bg-white p-6 text-center shadow-sm">
          <h2 className="mb-3 text-xl font-bold">{data.thankYouTitle}</h2>
          <p className="text-sm leading-relaxed">{data.thankYouText}</p>
        </section>
      </div>
    </div>
  )
}
