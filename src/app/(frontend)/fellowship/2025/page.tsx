import { Fellowship2025Hero } from '@/components/fellowship-2025/Fellowship2025Hero'
import { Fellowship2025Testimonials } from '@/components/fellowship-2025/Fellowship2025Testimonials'
import { FellowsGrid } from '@/components/fellowship-2025/FellowsGrid'
import { getFellows } from '@/lib/cms-team-members'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Future Trade Leaders Fellowship Community 2025',
  description:
    'Meet the 2025 Future Trade Leaders Fellowship cohort — professionals shaping Africa and the Caribbean\'s future in trade.',
}

export default async function Fellowship2025Page() {
  const fellows = await getFellows({ year: 2025 })

  return (
    <main className="bg-[#f8f9fa]">
      <Fellowship2025Hero />
      <FellowsGrid members={fellows} />
      <Fellowship2025Testimonials />
    </main>
  )
}
