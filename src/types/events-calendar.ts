export type CalendarEvent = {
  date: string
  title: string
  url: string
  image?: string
}

export type EventsCalendarData = {
  headerTitle: string
  headerSubtitle: string
  events: CalendarEvent[]
}
