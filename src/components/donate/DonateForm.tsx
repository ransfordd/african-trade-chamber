'use client'

type Props = { financeEmail: string }

const DONOR_TYPES = [
  { value: 'individual', label: 'Individual' },
  { value: 'corporation', label: 'Corporation/Foundation' },
  { value: 'development_partner', label: 'Development Partner/Institution' },
  { value: 'government', label: 'Governmental Organization' },
  { value: 'diaspora', label: 'Diaspora Community' },
]

export function DonateForm({ financeEmail }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const body = [
      'ATC DONATION REQUEST',
      '',
      `Name: ${fd.get('donor_name')}`,
      `Email: ${fd.get('donor_email')}`,
      `Phone: ${fd.get('donor_phone') || 'N/A'}`,
      `Donor type: ${fd.get('donor_type') || 'N/A'}`,
      `Amount (GHS): ${fd.get('amount')}`,
      `Message: ${fd.get('message') || 'N/A'}`,
    ].join('\n')
    const subject = encodeURIComponent('ATC Donation - ' + fd.get('donor_name'))
    window.location.href = `mailto:${financeEmail}?subject=${subject}&body=${encodeURIComponent(body)}`
  }

  const inputClass =
    'w-full rounded-lg border border-slate-200 px-3.5 py-2.5 text-[15px] focus:border-[#002740] focus:outline-none focus:ring-2 focus:ring-[#002740]/15'

  return (
    <form
      id="donation-form"
      onSubmit={handleSubmit}
      className="mx-auto max-w-xl rounded-xl border border-[#e7eef9] bg-white p-6 shadow-[0_10px_20px_rgba(2,6,23,0.08)]"
    >
      <h3 className="mb-5 text-xl font-bold text-[#002740]">Make a Donation</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="donor_name" className="mb-1 block text-sm font-semibold">
            Full Name <span className="text-red-600">*</span>
          </label>
          <input id="donor_name" name="donor_name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="donor_email" className="mb-1 block text-sm font-semibold">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input id="donor_email" name="donor_email" type="email" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="donor_phone" className="mb-1 block text-sm font-semibold">
            Phone Number
          </label>
          <input id="donor_phone" name="donor_phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="donor_type" className="mb-1 block text-sm font-semibold">
            I am a:
          </label>
          <select id="donor_type" name="donor_type" className={inputClass}>
            <option value="">Select...</option>
            {DONOR_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="amount" className="mb-1 block text-sm font-semibold">
            Donation Amount (GHS) <span className="text-red-600">*</span>
          </label>
          <input
            id="amount"
            name="amount"
            type="number"
            min="1"
            step="0.01"
            required
            className={inputClass}
          />
          <p className="mt-1 text-xs text-slate-500">Minimum: GHS 1</p>
        </div>
        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-semibold">
            Message (Optional)
          </label>
          <textarea id="message" name="message" rows={3} className={inputClass} />
        </div>
        <button
          type="submit"
          className="w-full rounded-full border-2 border-[#002740] bg-[#002740] px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-white hover:text-[#002740]"
        >
          Donate Now
        </button>
      </div>
    </form>
  )
}
