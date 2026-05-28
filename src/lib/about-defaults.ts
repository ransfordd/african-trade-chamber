import type { AboutPageData } from '@/types/about-page'

export const defaultAboutPage: AboutPageData = {
  sectionTitle: 'Who We Are',
  mainContent:
    'The African Trade Chamber is a continental trade support and facilitation institution working to connect businesses with opportunities across Africa and the world. We serve as a bridge between enterprises, governments, and investors, supporting trade expansion, market access, and economic transformation on the continent.<br><br>We provide practical support to companies seeking to enter or expand in African markets, navigate regulatory landscapes, connect with partners, and promote investment-led growth across key sectors.',
  visionContent:
    'An interconnected and competitive African private sector that drives inclusive growth and prosperity through trade and investment.',
  missionContent:
    'To bridge businesses to African and global markets by facilitating market access, supporting enterprise growth, promoting cross-border trade, and enabling strategic connections with partners and institutions.',
}

export const TEAM_CATEGORY_LABELS: Record<
  import('@/types/about-page').TeamMemberCategory,
  string
> = {
  advisory: 'Advisory Board',
  board: 'Board of Directors',
  secretariat: 'Secretariat Management',
}
