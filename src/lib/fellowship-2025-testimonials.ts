export type FellowTestimonial = {
  quote: string
  name: string
  subtitle: string
  initials: string
}

export type ResourceTestimonial = {
  quote: string
  name: string
  role: string
  organization?: string
}

export const FELLOW_TESTIMONIALS: FellowTestimonial[] = [
  {
    quote:
      'This past year has been more than an academic exercise; it has been a rigorous journey into the heart of African integration. We entered this fellowship as professionals with various backgrounds, but we leave as a unified cohort of trade architects. We have learned that trade is not merely about moving goods across borders; it is about moving Africa up the global value chain. My background in manufacturing has taught me that we cannot trade what we do not produce. To truly integrate, we must industrialize. The clarity we gained this year is simple yet profound: Trade policy is the engine, but industrial capacity is the fuel.',
    name: 'Zemichael Amare (PhD)',
    subtitle: 'Ethiopia, FTLF Alumnus',
    initials: 'ZA',
  },
  {
    quote:
      "My experience as an African Trade Chamber [2025 Fellowship] cohort was both interesting and insightful. I found myself learning something new in each session. I'm proud to say that I have taken on board some of the knowledge from the cohort and am already applying it to grow my business in Zimbabwe.",
    name: 'Lovemore Panashe Mazinyani',
    subtitle: 'Zimbabwe, FTLF Alumnus',
    initials: 'LP',
  },
  {
    quote:
      "I am particularly interested in contributing to initiatives that strengthen Africa's trade systems to meet evolving market demands, while leveraging knowledge, AI technology, data-driven insights, and innovation. I believe these tools are critical in advancing sustainable trade, sound policy frameworks, and competitive African economies.",
    name: 'Vincent Otieno',
    subtitle: 'FTLF Alumnus',
    initials: 'VO',
  },
  {
    quote:
      'It has been a truly enriching experience, and I value the insights, professional standards, and networks gained over the course of the Fellowship. I am honoured to formally transition into the FTLF Alumni Network and look forward to remaining engaged with the work and initiatives of the African Trade Chamber.',
    name: 'Naeem Philbert',
    subtitle: 'St Lucia, FTLF Alumnus',
    initials: 'NP',
  },
  {
    quote:
      "I look forward to further opportunities, engagements and collaborations as we move forward. I believe so much in the growth of Africa's trade and commerce.",
    name: 'Isaiah Joseph',
    subtitle: 'Nigeria, FTLF Alumnus',
    initials: 'IJ',
  },
  {
    quote:
      'I sincerely thank you for the quality of training as well as for the presentation of the certificate. I have learned a lot and I am grateful for your support.',
    name: 'BEBOU Moudiratou',
    subtitle: 'Togo, FTLF Alumna',
    initials: 'BM',
  },
  {
    quote:
      'Thank you for the opportunity. I shall always use what I have been exposed to to build myself, the world and particularly, Africa. I am, because you are. Cheers.',
    name: 'Owino George',
    subtitle: 'Kenya, FTLF Alumnus',
    initials: 'OG',
  },
]

export const RESOURCE_TESTIMONIALS: ResourceTestimonial[] = [
  {
    quote:
      'Thank you for the citation opportunity you extended to me to share my brief experience and insights. I wish you and the team the very best in your subsequent programmes and events.',
    name: 'Kojo Ahiakpa',
    role: 'Ph.D., MBA., mini-MBA., M.Phil.',
  },
  {
    quote:
      'It was a privilege to serve as a Resource Person and to engage with such an impressive cohort of Fellows. I found the discussions insightful, and I was encouraged by the depth of interest and commitment the participants demonstrated throughout the programme, particularly on issues of trade policy, advocacy, and the broader AfCFTA agenda.',
    name: 'Kweku Attakora Dwomoh',
    role: 'International Commercial, Trade and Investment expert and Lecturer',
  },
  {
    quote: "It's an honour to have this opportunity to impart into the Fellows.",
    name: 'Nlaliban Wujangi',
    role: 'Asset Management | Supply Chain',
    organization: 'CMRP, FCILT, Agribusiness',
  },
]
