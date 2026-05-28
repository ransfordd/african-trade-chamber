import { EventsPageSection } from '@/components/events/EventsPageSection'
import { defaultEventsPage } from '@/lib/events-page-defaults'

export const metadata = {
  title: 'Events',
  description: defaultEventsPage.headerSubtitle.slice(0, 160),
}

export default function EventsPage() {
  return <EventsPageSection data={defaultEventsPage} />
}
