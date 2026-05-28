'use client'

type Props = {
  formTitle: string
  formSubtitle: string
  formEmail: string
  submitButtonText: string
  subjectOptions: string[]
}

export function ContactForm({
  formTitle,
  formSubtitle,
  formEmail,
  submitButtonText,
  subjectOptions,
}: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const body = [
      'ATC CONTACT FORM',
      '',
      `Name: ${fd.get('fullName')}`,
      `Email: ${fd.get('email')}`,
      `Phone: ${fd.get('phone') || 'N/A'}`,
      `Subject: ${fd.get('subject')}`,
      '',
      'Message:',
      String(fd.get('message') ?? ''),
    ].join('\n')
    const subject = `ATC Contact - ${fd.get('subject')} - ${fd.get('fullName')}`
    window.location.href = `mailto:${formEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const inputClass =
    'w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-[#002740] focus:outline-none focus:ring-2 focus:ring-[#002740]/15'

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-[0_15px_30px_rgba(0,39,64,0.1)] md:p-8" aria-label="Contact form">
      <h2 className="mb-2 text-2xl font-bold text-[#002740]">{formTitle}</h2>
      <p className="mb-6 text-base text-[#4a4a4a]">{formSubtitle}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-fullName" className="mb-1 block text-sm font-semibold text-[#002740]">
              Full Name *
            </label>
            <input id="contact-fullName" name="fullName" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1 block text-sm font-semibold text-[#002740]">
              Email *
            </label>
            <input id="contact-email" name="email" type="email" required className={inputClass} />
          </div>
          <div>
            <label htmlFor="contact-phone" className="mb-1 block text-sm font-semibold text-[#002740]">
              Phone
            </label>
            <input id="contact-phone" name="phone" type="tel" className={inputClass} />
          </div>
          <div>
            <label htmlFor="contact-subject" className="mb-1 block text-sm font-semibold text-[#002740]">
              Subject *
            </label>
            <select id="contact-subject" name="subject" required className={inputClass} defaultValue="">
              <option value="" disabled>
                Select a subject
              </option>
              {subjectOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="contact-message" className="mb-1 block text-sm font-semibold text-[#002740]">
            Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={6}
            className={`${inputClass} resize-y`}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-[#002740] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#001a2e] sm:w-auto"
        >
          {submitButtonText}
        </button>
      </form>
    </section>
  )
}
