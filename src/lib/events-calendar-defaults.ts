import type { EventsCalendarData } from '@/types/events-calendar'

const u = (path: string) => `/uploads/${path}`

export const defaultEventsCalendar: EventsCalendarData = {
  headerTitle: 'Calendar of Events',
  headerSubtitle:
    "Stay up to date with the African Trade Chamber's key events and milestones.",
  events: [
    {
      date: '2025-11-18',
      title: 'Africa Trade Summit – Official Launch',
      url: '/events/africa-trade-summit',
      image: u('2025/11/ATS-LOGO-FINALRECTANGLE-3.png'),
    },
    {
      date: '2026-01-28',
      title: 'Africa Trade Summit – Day 1',
      url: '/events/africa-trade-summit',
      image: u('2025/11/ATS-LOGO-FINALRECTANGLE-3.png'),
    },
    {
      date: '2026-01-29',
      title: 'Africa Trade Summit – Day 2',
      url: '/events/africa-trade-summit',
      image: u('2025/11/ATS-LOGO-FINALRECTANGLE-3.png'),
    },
  ],
}
