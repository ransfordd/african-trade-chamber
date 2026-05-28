import { EventsCalendar } from '@/components/events/calendar/EventsCalendar'
import { defaultEventsCalendar } from '@/lib/events-calendar-defaults'

export const metadata = {
  title: 'Calendar of Events',
  description: defaultEventsCalendar.headerSubtitle,
}

export default function EventsCalendarPage() {
  const data = defaultEventsCalendar
  return (
    <EventsCalendar
      headerTitle={data.headerTitle}
      headerSubtitle={data.headerSubtitle}
      events={data.events}
    />
  )
}
