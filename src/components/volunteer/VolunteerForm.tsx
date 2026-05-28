'use client'

import { AFRICAN_COUNTRIES } from '@/lib/membership-apply-data'

const ROLE_OPTIONS = [
  'Event Support',
  'Research & Policy',
  'Media & Communications',
  'Translation & Interpretation',
  'Administrative/Program Support',
]

type Props = { formEmail: string; submitLabel: string }

export function VolunteerForm({ formEmail, submitLabel }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const roles = fd.getAll('roles').join(', ')
    const body = [
      'ATC VOLUNTEER APPLICATION',
      '',
      `Full Name: ${fd.get('fullName')}`,
      `Email: ${fd.get('email')}`,
      `Phone: ${fd.get('phone') || 'N/A'}`,
      `Country: ${fd.get('country')}`,
      `Occupation: ${fd.get('status')}`,
      `Expertise: ${fd.get('expertise') || 'N/A'}`,
      `Languages: ${fd.get('languages') || 'N/A'}`,
      `Preferred roles: ${roles || 'N/A'}`,
      `Availability (hrs/week): ${fd.get('availability') || 'N/A'}`,
      `Duration: ${fd.get('duration') || 'N/A'}`,
      `Motivation: ${fd.get('motivation')}`,
    ].join('\n')
    window.location.href = `mailto:${formEmail}?subject=${encodeURIComponent('ATC Volunteer Application - ' + fd.get('fullName'))}&body=${encodeURIComponent(body)}`
  }

  const inputClass =
    'w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm focus:border-[#002740] focus:outline-none focus:ring-2 focus:ring-[#002740]/15'

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-bold text-[#002740]">Personal Information</h3>
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold">Full Name *</label>
          <input name="fullName" required className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Email *</label>
          <input name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Phone</label>
          <input name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Country of Residence *</label>
          <select name="country" required className={inputClass}>
            <option value="">Select country</option>
            {AFRICAN_COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Occupation/Status *</label>
          <select name="status" required className={inputClass}>
            <option value="">Select</option>
            <option>Student</option>
            <option>Graduate</option>
            <option>Employed</option>
            <option>Self-employed</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Area(s) of Expertise</label>
          <input name="expertise" className={inputClass} />
        </div>
      </div>

      <h3 className="mb-2 text-lg font-bold text-[#002740]">Volunteer Interest</h3>
      <p className="mb-2 text-sm font-medium">Preferred Volunteer Role(s):</p>
      <div className="mb-4 grid gap-2 sm:grid-cols-2">
        {ROLE_OPTIONS.map((role) => (
          <label key={role} className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="roles" value={role} className="accent-[#002740]" />
            {role}
          </label>
        ))}
      </div>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold">Hours per week</label>
          <input name="availability" type="number" min={1} max={40} className={inputClass} />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Preferred Duration</label>
          <select name="duration" className={inputClass}>
            <option value="">Select duration</option>
            <option>1 month</option>
            <option>2-3 months</option>
            <option>Project-based</option>
            <option>Ongoing</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-1 block text-sm font-semibold">Motivation Statement *</label>
        <textarea name="motivation" required maxLength={750} rows={4} className={inputClass} />
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-[#002740] px-6 py-3 font-bold text-white hover:bg-[#001a2e]"
      >
        {submitLabel}
      </button>
    </form>
  )
}
