export const metadata = {
  title: 'Fellowship Application',
}

const APPLY_URL =
  'https://africantradechamber.org/2026-future-trade-leaders-fellowship-application-form/'

export default function FellowshipApplyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
      <h1 className="text-3xl font-bold text-atc-navy">2026 Fellowship Application</h1>
      <p className="mt-4 text-atc-navy/80">
        Complete your application using our secure form. You will be redirected to the application
        portal.
      </p>
      <a href={APPLY_URL} className="atc-cta mt-8 inline-flex" rel="noopener noreferrer">
        Open Application Form
      </a>
      <p className="mt-4 text-sm text-atc-navy/60">
        During migration, this links to the existing WordPress form. Replace with an embedded React
        form when ready.
      </p>
    </div>
  )
}
