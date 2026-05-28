export function validateFormStep(form: HTMLFormElement, step: number): boolean {
  const stepContent = form.querySelector(`[data-step="${step}"]`)
  if (!stepContent) return true

  const requiredFields = stepContent.querySelectorAll<HTMLElement>('[required]')
  let isValid = true

  requiredFields.forEach((field) => {
    const el = field as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    const errorMsg = el.parentElement?.querySelector<HTMLElement>('.error-message')

    if (el.type === 'radio') {
      const radioGroup = stepContent.querySelectorAll<HTMLInputElement>(`[name="${el.name}"]`)
      const isChecked = Array.from(radioGroup).some((radio) => radio.checked)
      if (!isChecked) {
        if (errorMsg) errorMsg.style.display = 'block'
        isValid = false
      } else if (errorMsg) {
        errorMsg.style.display = 'none'
      }
      return
    }

    if (el instanceof HTMLInputElement && el.type === 'checkbox' && el.name === 'declaration') {
      if (!el.checked) {
        if (errorMsg) errorMsg.style.display = 'block'
        const wrapper = el.closest('.declaration-box')
        if (wrapper instanceof HTMLElement) wrapper.style.border = '2px solid #ef4444'
        isValid = false
      } else {
        if (errorMsg) errorMsg.style.display = 'none'
        const wrapper = el.closest('.declaration-box')
        if (wrapper instanceof HTMLElement) wrapper.style.border = '1px solid #002740'
      }
      return
    }

    if (!el.value.trim()) {
      el.classList.add('input-error')
      if (errorMsg) errorMsg.style.display = 'block'
      isValid = false
    } else {
      el.classList.remove('input-error')
      if (errorMsg) errorMsg.style.display = 'none'
    }
  })

  const emailField = stepContent.querySelector<HTMLInputElement>('input[type="email"]')
  if (emailField?.value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const errorMsg = emailField.parentElement?.querySelector<HTMLElement>('.error-message')
    if (!emailRegex.test(emailField.value.trim())) {
      emailField.classList.add('input-error')
      if (errorMsg) {
        errorMsg.style.display = 'block'
        errorMsg.textContent = 'Please enter a valid email address'
      }
      isValid = false
    } else {
      emailField.classList.remove('input-error')
      if (errorMsg) errorMsg.style.display = 'none'
    }
  }

  return isValid
}

export function buildMailtoBody(form: HTMLFormElement): string {
  const formData = new FormData(form)
  let emailBody = 'AFRICAN TRADE CHAMBER MEMBERSHIP APPLICATION\n\n'

  for (const [key, value] of formData.entries()) {
    if (key !== 'companyLogo' && key !== 'supportingDocs' && typeof value === 'string') {
      emailBody += `${key}: ${value}\n`
    }
  }

  emailBody += '\n\nFiles uploaded: '
  const logoFile = (form.querySelector('#companyLogo') as HTMLInputElement)?.files?.[0]
  const supportFiles = (form.querySelector('#supportingDocs') as HTMLInputElement)?.files

  if (logoFile) emailBody += `\nCompany Logo: ${logoFile.name}`
  if (supportFiles && supportFiles.length > 0) {
    emailBody += '\nSupporting Documents: '
    emailBody += Array.from(supportFiles)
      .map((f) => f.name)
      .join(', ')
  }

  return emailBody
}
