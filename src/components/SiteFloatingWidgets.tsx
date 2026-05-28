import { GTranslateWidget } from '@/components/GTranslateWidget'
import { WhatsAppHelpButton } from '@/components/WhatsAppHelpButton'

type Props = {
  contactPhone?: string
  showTranslator?: boolean
  showWhatsapp?: boolean
  whatsappLabel?: string
}

export function SiteFloatingWidgets({
  contactPhone,
  showTranslator,
  showWhatsapp,
  whatsappLabel,
}: Props) {
  const translatorOn = showTranslator !== false
  const whatsappOn = showWhatsapp !== false

  return (
    <>
      {translatorOn ? <GTranslateWidget /> : null}
      {whatsappOn && contactPhone ? (
        <WhatsAppHelpButton phone={contactPhone} label={whatsappLabel} />
      ) : null}
    </>
  )
}
