import type { DonatePageData } from '@/types/donate-page'

export const defaultDonatePage: DonatePageData = {
  headerTitle: 'Donate',
  headerTagline: 'Support Our Mission - Donate to the African Trade Chamber',
  heroTitle: 'Empower Trade. Unlock Opportunity. Transform Africa.',
  heroParagraphs: [
    'The African Trade Chamber (ATC) is committed to advancing intra-African trade, private sector growth, and inclusive economic development. As a private sector-led institution, we rely on the generous support of partners and donors like you to fuel impactful programs that create real change across the continent.',
    'Your donation helps us build stronger African economies by supporting trade missions, SME capacity building, youth and women-led enterprise development, policy advocacy, and cross-border trade facilitation.',
  ],
  whyTitle: 'Why Donate to ATC?',
  whyIntro: 'When you contribute to the African Trade Chamber, you are directly investing in:',
  whyBenefits: [
    'Empowering Small Businesses — Support local entrepreneurs to access regional markets and scale sustainably.',
    'Training & Capacity Building — Fund workshops, digital resources, and mentoring programs for SMEs and startups.',
    'Inclusive Trade Participation — Advance the inclusion of women, youth, and underrepresented groups in trade and value chains.',
    'Policy Reform & Dialogue — Strengthen our advocacy for business-friendly trade policies and regulations.',
    "Continental Trade Integration — Help us host the Africa Trade Summit and regional forums that shape Africa's trade future.",
  ],
  whoTitle: 'Who Can Donate?',
  whoIntro: 'We welcome support from:',
  donorCategories: [
    { title: 'Corporations and Foundations', description: 'seeking meaningful impact' },
    { title: 'Development Partners and Institutions', description: 'aligned with our mission' },
    {
      title: 'Governmental Organizations',
      description: 'interested in funding the implementation of intra-African trade',
    },
    { title: 'Diaspora Communities', description: 'passionate about continental progress' },
    { title: 'Individuals', description: 'who believe in Africa-led development' },
  ],
  transparencyTitle: 'Transparency & Accountability',
  transparencyText:
    'ATC is committed to the highest standards of financial integrity and accountability. Donors receive periodic impact reports highlighting how funds are used, along with updates on supported initiatives.',
  ctaTitle: 'Make a Donation',
  ctaText: 'Ready to make a difference?\nUse the donation form below to contribute securely. Every contribution counts.',
  financeEmail: 'finance@africantradechamber.org',
  financePhone: '+233 50 536 6251',
  thankYouTitle: 'Thank You',
  thankYouText:
    "Your support is a powerful investment in Africa's future. Together, we can unlock potential, foster innovation, and build a stronger, interconnected continent.",
  formTitle: 'Make a Donation',
}
