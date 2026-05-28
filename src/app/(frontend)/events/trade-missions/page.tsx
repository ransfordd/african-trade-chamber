import { TradeMissionsPageSection } from '@/components/events/trade-missions/TradeMissionsPageSection'
import { defaultTradeMissionsPage } from '@/lib/trade-missions-defaults'

export const metadata = {
  title: 'Trade Missions & Investment',
  description: defaultTradeMissionsPage.headerSubtitle,
}

export default function TradeMissionsPage() {
  return <TradeMissionsPageSection data={defaultTradeMissionsPage} />
}
