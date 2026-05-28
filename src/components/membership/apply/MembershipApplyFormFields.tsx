import {
  AFRICAN_COUNTRIES,
  BUSINESS_SECTORS,
  INDUSTRY_COUNCIL_OPTIONS,
  JOIN_PURPOSE_OPTIONS,
  MEMBERSHIP_CATEGORY_OPTIONS,
  SUPPORT_NEEDED_OPTIONS,
  THEMATIC_COUNCIL_OPTIONS,
} from '@/lib/membership-apply-data'
import {
  applyErrorClass,
  applyInputClass,
  applyLabelClass,
  applyStepDescClass,
  applyStepTitleClass,
  applyTextareaClass,
} from '@/components/membership/apply/membership-apply-styles'

const formGridClass = 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5'

function FieldError() {
  return <div className={applyErrorClass}>This field is required</div>
}

function StepHeader({ title, description }: { title: string; description: string }) {
  return (
    <div className="mb-6 border-b border-slate-100 pb-4">
      <h2 className={`${applyStepTitleClass} hidden md:block`}>{title}</h2>
      <p className={`${applyStepDescClass} hidden md:block`}>{description}</p>
    </div>
  )
}

export function Step1Organization() {
  return (
    <div className="step-content active" data-step="1">
      <StepHeader
        title="Organization Details"
        description="Tell us about your organization and registration information"
      />
      <div className={formGridClass}>
        <div className="form-group sm:col-span-2">
          <label htmlFor="orgName" className={applyLabelClass}>
            Organization Name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="orgName" name="orgName" required className={applyInputClass} />
          <FieldError />
        </div>
        <div className="form-group">
          <label htmlFor="registeredName" className={applyLabelClass}>
            Registered Business Name (if different)
          </label>
          <input type="text" id="registeredName" name="registeredName" className={applyInputClass} />
        </div>
        <div className="form-group">
          <label htmlFor="dateIncorporation" className={applyLabelClass}>
            Date of Incorporation / Registration <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="dateIncorporation"
            name="dateIncorporation"
            required
            className={applyInputClass}
          />
          <FieldError />
        </div>
        <div className="form-group">
          <label htmlFor="registrationNumber" className={applyLabelClass}>
            Registration Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="registrationNumber"
            name="registrationNumber"
            required
            className={applyInputClass}
          />
          <FieldError />
        </div>
        <div className="form-group">
          <label htmlFor="countryRegistration" className={applyLabelClass}>
            Country of Registration <span className="text-red-500">*</span>
          </label>
          <select id="countryRegistration" name="countryRegistration" required className={applyInputClass}>
            <option value="">Select Country</option>
            {AFRICAN_COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <FieldError />
        </div>
        <div className="form-group sm:col-span-2">
          <label htmlFor="physicalAddress" className={applyLabelClass}>
            Physical Address <span className="text-red-500">*</span>
          </label>
          <textarea
            id="physicalAddress"
            name="physicalAddress"
            required
            className={applyTextareaClass}
          />
          <FieldError />
        </div>
        <div className="form-group">
          <label htmlFor="postalAddress" className={applyLabelClass}>
            Postal Address (if different)
          </label>
          <textarea id="postalAddress" name="postalAddress" className={applyTextareaClass} />
        </div>
        <div className="form-group">
          <label htmlFor="website" className={applyLabelClass}>
            Website
          </label>
          <input
            type="url"
            id="website"
            name="website"
            placeholder="https://www.example.com"
            className={applyInputClass}
          />
        </div>
        <div className="form-group sm:col-span-2">
          <label htmlFor="socialMedia" className={applyLabelClass}>
            Social Media Handles (LinkedIn, Twitter, Facebook)
          </label>
          <textarea
            id="socialMedia"
            name="socialMedia"
            placeholder={'LinkedIn: company-name\nTwitter: @company\nFacebook: company-page'}
            className={applyTextareaClass}
          />
        </div>
      </div>
    </div>
  )
}

export function Step2Contact() {
  return (
    <div className="step-content" data-step="2">
      <StepHeader
        title="Primary Contact & Business Profile"
        description="Contact information and business description"
      />
      <div className="formGridClass">
        <div className="form-group">
          <label htmlFor="contactName" className={applyLabelClass}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="contactName" name="contactName" required className={applyInputClass} />
          <FieldError />
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle" className={applyLabelClass}>
            Job Title <span className="text-red-500">*</span>
          </label>
          <input type="text" id="jobTitle" name="jobTitle" required className={applyInputClass} />
          <FieldError />
        </div>
        <div className="form-group">
          <label htmlFor="mobilePhone" className={applyLabelClass}>
            Mobile Phone <span className="text-red-500">*</span>
          </label>
          <input type="tel" id="mobilePhone" name="mobilePhone" required className={applyInputClass} />
          <FieldError />
        </div>
        <div className="form-group">
          <label htmlFor="officePhone" className={applyLabelClass}>
            Office Phone
          </label>
          <input type="tel" id="officePhone" name="officePhone" className={applyInputClass} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className={applyLabelClass}>
            Email Address <span className="text-red-500">*</span>
          </label>
          <input type="email" id="email" name="email" required className={applyInputClass} />
          <div className={applyErrorClass}>Please enter a valid email address</div>
        </div>
        <div className="form-group">
          <label htmlFor="sector" className={applyLabelClass}>
            Sector of Operation <span className="text-red-500">*</span>
          </label>
          <select id="sector" name="sector" required className={applyInputClass}>
            <option value="">Select Sector</option>
            {BUSINESS_SECTORS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <FieldError />
        </div>
        <div className="form-group sm:col-span-2">
          <label htmlFor="businessDescription" className={applyLabelClass}>
            Brief Description of Business (Max 150 words) <span className="text-red-500">*</span>
          </label>
          <textarea
            id="businessDescription"
            name="businessDescription"
            maxLength={750}
            required
            placeholder="Describe your business activities, mission, and key offerings..."
            className={applyTextareaClass}
          />
          <div id="businessDescCounter" className="mt-1 text-right text-sm text-slate-500" />
          <FieldError />
        </div>
        <div className="form-group">
          <label htmlFor="products" className={applyLabelClass}>
            Products and/or Services Offered
          </label>
          <textarea
            id="products"
            name="products"
            placeholder="List your main products and services"
            className={applyTextareaClass}
          />
        </div>
        <div className="form-group">
          <label htmlFor="countriesOperation" className={applyLabelClass}>
            Countries of Operation
          </label>
          <textarea
            id="countriesOperation"
            name="countriesOperation"
            placeholder="List countries where you currently operate"
            className={applyTextareaClass}
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyLogo" className={applyLabelClass}>
            Upload Company Logo (optional)
          </label>
          <div className="relative w-full">
            <input
              type="file"
              id="companyLogo"
              name="companyLogo"
              accept="image/*"
              className="file-input absolute h-full w-full cursor-pointer opacity-0"
            />
            <label
              htmlFor="companyLogo"
              className="file-label flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-center text-sm text-slate-600 transition-colors hover:border-[#002740] hover:bg-white"
            >
              📁 Choose file or drag & drop
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="additionalReps" className={applyLabelClass}>
            Additional Representatives (Names, Emails, Titles)
          </label>
          <textarea
            id="additionalReps"
            name="additionalReps"
            placeholder={'Name: John Doe\nEmail: john@company.com\nTitle: Director'}
            className={applyTextareaClass}
          />
        </div>
        <div className="form-group sm:col-span-2">
          <label className={applyLabelClass}>
            Do you wish to request additional representatives beyond your tier?
          </label>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <RadioOption id="additionalRepsYes" name="additionalRepsRequest" value="Yes" label="Yes" />
            <RadioOption id="additionalRepsNo" name="additionalRepsRequest" value="No" label="No" />
          </div>
        </div>
      </div>
    </div>
  )
}

const choiceClass =
  'flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/80 px-3.5 py-3 text-sm transition-colors hover:border-[#002740]/40 hover:bg-white has-[:checked]:border-[#002740] has-[:checked]:bg-[#002740]/5'

function RadioOption({
  id,
  name,
  value,
  label,
  required,
}: {
  id: string
  name: string
  value: string
  label: string
  required?: boolean
}) {
  return (
    <label htmlFor={id} className={choiceClass}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        required={required}
        className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#002740]"
      />
      <span className="font-medium leading-snug text-[#0b1320]">{label}</span>
    </label>
  )
}

function CheckboxOption({ id, name, value, label }: { id: string; name: string; value: string; label: string }) {
  return (
    <label htmlFor={id} className={`checkbox-item ${choiceClass}`}>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#002740]"
      />
      <span className="font-medium leading-snug text-[#0b1320]">{label}</span>
    </label>
  )
}

export function Step3MembershipGoals() {
  return (
    <div className="step-content" data-step="3">
      <StepHeader title="Membership Category & Goals" description="Select your membership tier and define your objectives" />
      <div className="formGridClass">
        <div className="form-group">
          <label className={applyLabelClass}>
            Membership Category <span className="text-red-500">*</span>
          </label>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MEMBERSHIP_CATEGORY_OPTIONS.map((cat, i) => (
              <RadioOption
                key={cat}
                id={`membershipCat-${i}`}
                name="membershipCategory"
                value={cat}
                label={cat}
                required={i === 0}
              />
            ))}
          </div>
          <div className={applyErrorClass}>Please select a membership category</div>
        </div>
        <div className="form-group">
          <label className={applyLabelClass}>Purpose of Joining ATC (Select all that apply)</label>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {JOIN_PURPOSE_OPTIONS.map((p, i) => (
              <CheckboxOption key={p} id={`purpose-${i}`} name="purpose" value={p} label={p} />
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="topGoals" className={applyLabelClass}>
            What are your top 3 goals for joining ATC?
          </label>
          <textarea
            id="topGoals"
            name="topGoals"
            placeholder={'1. Goal one\n2. Goal two\n3. Goal three'}
            className={applyTextareaClass}
          />
        </div>
        <div className="form-group">
          <label htmlFor="targetCountries" className={applyLabelClass}>
            Which African countries/regions are you targeting for expansion?
          </label>
          <textarea
            id="targetCountries"
            name="targetCountries"
            placeholder="List target countries or regions"
            className={applyTextareaClass}
          />
        </div>
        <div className="form-group">
          <label className={applyLabelClass}>Are you primarily seeking:</label>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <RadioOption id="tradePartners" name="seeking" value="Trade Partners" label="Trade Partners" />
            <RadioOption id="investmentSeek" name="seeking" value="Investment" label="Investment" />
            <RadioOption id="policySeek" name="seeking" value="Policy Engagement" label="Policy Engagement" />
            <RadioOption id="otherSeek" name="seeking" value="Other" label="Other" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="otherSeeking" className={applyLabelClass}>
            If Other, please specify:
          </label>
          <input type="text" id="otherSeeking" name="otherSeeking" className={applyInputClass} />
        </div>
      </div>
    </div>
  )
}

export function Step4Capabilities() {
  return (
    <div className="step-content" data-step="4">
      <StepHeader
        title="Trade & Market Capabilities"
        description="Tell us about your current trade activities and expansion plans"
      />
      <div className="formGridClass">
        <div className="form-group">
          <label className={applyLabelClass}>Do you currently export goods or services?</label>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <RadioOption id="exportYes" name="currentExport" value="Yes" label="Yes" />
            <RadioOption id="exportNo" name="currentExport" value="No" label="No" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exportDestinations" className={applyLabelClass}>
            If yes, list export destinations:
          </label>
          <textarea
            id="exportDestinations"
            name="exportDestinations"
            placeholder="List countries you currently export to"
            className={applyTextareaClass}
          />
        </div>
        <div className="form-group">
          <label className={applyLabelClass}>Are you looking to enter new African markets?</label>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <RadioOption id="newMarketsYes" name="newMarkets" value="Yes" label="Yes" />
            <RadioOption id="newMarketsNo" name="newMarkets" value="No" label="No" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="targetNewCountries" className={applyLabelClass}>
            If yes, list target countries:
          </label>
          <textarea
            id="targetNewCountries"
            name="targetNewCountries"
            placeholder="List countries you want to enter"
            className={applyTextareaClass}
          />
        </div>
        <div className="form-group sm:col-span-2">
          <label className={applyLabelClass}>How many African countries do you currently operate in?</label>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <RadioOption id="countries1" name="operatingCountries" value="1" label="1" />
            <RadioOption id="countries2-3" name="operatingCountries" value="2-3" label="2–3" />
            <RadioOption id="countries4-10" name="operatingCountries" value="4-10" label="4–10" />
            <RadioOption id="countries10plus" name="operatingCountries" value="10+" label="10+" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="listCountriesOperation" className={applyLabelClass}>
            List the countries of operation:
          </label>
          <textarea
            id="listCountriesOperation"
            name="listCountriesOperation"
            placeholder="List all countries where you operate"
            className={applyTextareaClass}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tradeCertifications" className={applyLabelClass}>
            What trade certifications or licenses do you hold (if applicable)?
          </label>
          <textarea
            id="tradeCertifications"
            name="tradeCertifications"
            placeholder="List your trade certifications and licenses"
            className={applyTextareaClass}
          />
        </div>
        <div className="form-group sm:col-span-2">
          <label className={applyLabelClass}>Areas Where Support is Needed (Select all that apply):</label>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SUPPORT_NEEDED_OPTIONS.map((s, i) => (
              <CheckboxOption key={s} id={`support-${i}`} name="supportNeeded" value={s} label={s} />
            ))}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="primarySector" className={applyLabelClass}>
            Primary sector/subsector:
          </label>
          <input
            type="text"
            id="primarySector"
            name="primarySector"
            placeholder="e.g., Agriculture - Coffee production"
            className={applyInputClass}
          />
        </div>
        <div className="form-group">
          <label className={applyLabelClass}>Value chain stage:</label>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <RadioOption id="producer" name="valueChain" value="Producer" label="Producer" />
            <RadioOption id="processor" name="valueChain" value="Processor" label="Processor" />
            <RadioOption id="distributor" name="valueChain" value="Distributor" label="Distributor" />
            <RadioOption id="retailer" name="valueChain" value="Retailer" label="Retailer" />
          </div>
        </div>
        <div className="form-group">
          <label className={applyLabelClass}>Ownership type:</label>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <RadioOption id="publicSector" name="ownership" value="Public Sector" label="Public Sector" />
            <RadioOption id="privateSector" name="ownership" value="Private Sector" label="Private Sector" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function Step5Councils() {
  return (
    <div className="step-content" data-step="5">
      <StepHeader title="Council Engagement & Diversity" description="Select councils and provide diversity information" />
      <div className="formGridClass">
        <div className="form-group">
          <label className={applyLabelClass}>
            Which Industry Council(s) would you like to join? (select all that apply):
          </label>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {INDUSTRY_COUNCIL_OPTIONS.map((c, i) => (
              <CheckboxOption key={c} id={`industry-${i}`} name="industryCouncils" value={c} label={c} />
            ))}
          </div>
        </div>
        <div className="form-group">
          <label className={applyLabelClass}>
            Which Thematic Council(s) are you interested in? (select all that apply):
          </label>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {THEMATIC_COUNCIL_OPTIONS.map((c, i) => (
              <CheckboxOption key={c} id={`thematic-${i}`} name="thematicCouncils" value={c} label={c} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2">
          <div className="form-group">
            <label htmlFor="memberCount" className={applyLabelClass}>
              How many members do you represent? (For associations/chambers only)
            </label>
            <input type="number" id="memberCount" name="memberCount" className={applyInputClass} />
          </div>
          <div className="form-group">
            <label htmlFor="sectorscover" className={applyLabelClass}>
              What sectors/industries do you cover? (For associations/chambers only)
            </label>
            <textarea
              id="sectorscover"
              name="sectorscover"
              placeholder="List the sectors your organization covers"
              className={applyTextareaClass}
            />
          </div>
          <div className="form-group">
            <label className={applyLabelClass}>Do you organize trade missions/events?</label>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <RadioOption id="organizeMissionsYes" name="organizeMissions" value="Yes" label="Yes" />
              <RadioOption id="organizeMissionsNo" name="organizeMissions" value="No" label="No" />
            </div>
          </div>
          <div className="form-group">
            <label className={applyLabelClass}>
              Would you like to collaborate with ATC on national or regional programs?
            </label>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <RadioOption id="collaborateYes" name="collaborate" value="Yes" label="Yes" />
              <RadioOption id="collaborateNo" name="collaborate" value="No" label="No" />
            </div>
          </div>
          <div className="form-group">
            <label className={applyLabelClass}>Is your business women-owned or women-led?</label>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <RadioOption id="womenOwnedYes" name="womenOwned" value="Yes" label="Yes" />
              <RadioOption id="womenOwnedNo" name="womenOwned" value="No" label="No" />
            </div>
          </div>
          <div className="form-group">
            <label className={applyLabelClass}>Are youth (under 35) part of your leadership team?</label>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <RadioOption id="youthLeadershipYes" name="youthLeadership" value="Yes" label="Yes" />
              <RadioOption id="youthLeadershipNo" name="youthLeadership" value="No" label="No" />
            </div>
          </div>
          <div className="form-group">
            <label className={applyLabelClass}>Do you operate in underserved or emerging markets?</label>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <RadioOption id="emergingMarketsYes" name="emergingMarkets" value="Yes" label="Yes" />
              <RadioOption id="emergingMarketsNo" name="emergingMarkets" value="No" label="No" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Step6Final() {
  return (
    <div className="step-content" data-step="6">
      <StepHeader title="Declaration & Supporting Documents" description="Final declarations and document uploads" />
      <div className="formGridClass">
        <div className="form-group sm:col-span-2">
          <label htmlFor="supportingDocs" className={applyLabelClass}>
            Supporting Documents
          </label>
          <div className="relative w-full">
            <input
              type="file"
              id="supportingDocs"
              name="supportingDocs"
              multiple
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="file-input absolute h-full w-full cursor-pointer opacity-0"
            />
            <label
              htmlFor="supportingDocs"
              className="file-label flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-center text-sm text-slate-600 transition-colors hover:border-[#002740] hover:bg-white"
            >
              📁 Upload: Business Registration Certificate, Company Profile, Licenses, etc.
            </label>
          </div>
          <small className="mt-2 block text-slate-500">
            Required: Business Registration Certificate, Company Profile
            <br />
            Optional: Relevant sector licenses, additional verification documents
          </small>
        </div>
        <div className="form-group sm:col-span-2">
          <div className="declaration-box rounded-lg border border-[#002740]/25 bg-slate-50 p-5">
            <h3 className="mb-3 text-base font-bold text-[#002740]">Declaration & Consent</h3>
            <label className="flex cursor-pointer items-start gap-4">
              <input
                type="checkbox"
                id="declaration"
                name="declaration"
                required
                className="mt-1 h-5 w-5 shrink-0 accent-[#002740]"
              />
              <span className="font-medium leading-relaxed text-gray-700">
                I hereby declare that the information provided in this application is true and complete. I
                acknowledge that my organization will comply with the African Trade Chamber&apos;s Membership
                Terms and Code of Conduct. I consent to being listed in the Africa Trade Directory and
                receiving communications from the African Trade Chamber.
              </span>
            </label>
            <div className={`${applyErrorClass} !mt-2`}>You must accept the declaration to proceed</div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="signature" className={applyLabelClass}>
            Digital Signature (Full Name) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="signature"
            name="signature"
            required
            placeholder="Type your full name as digital signature"
            className={applyInputClass}
          />
          <FieldError />
        </div>
        <div className="form-group">
          <label htmlFor="signatureDate" className={applyLabelClass}>
            Date <span className="text-red-500">*</span>
          </label>
          <input type="date" id="signatureDate" name="signatureDate" required className={applyInputClass} />
          <FieldError />
        </div>
      </div>
    </div>
  )
}

export function Step7Success({ email }: { email: string }) {
  return (
    <div className="step-content" data-step="7">
      <div className="px-10 py-[60px] text-center">
        <div className="mx-auto mb-[30px] flex h-20 w-20 animate-pulse items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-3xl text-white">
          ✓
        </div>
        <h2 className="mb-5 text-2xl text-emerald-600">Application Submitted Successfully!</h2>
        <p className="mb-[30px] text-[1.1rem] text-slate-500">
          Thank you for your interest in joining the African Trade Chamber. Your membership application has
          been received and will be reviewed by our team.
        </p>
        <p className="text-gray-700">
          You will receive a confirmation email at <strong>{email || 'your email address'}</strong> within 24
          hours.
          <br />
          Our team will contact you within 3-5 business days regarding the next steps.
        </p>
      </div>
    </div>
  )
}
