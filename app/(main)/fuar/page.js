import { getAllFuars } from '@/lib/fuar'
import FuarList from '@/components/FuarList'
import FuarPageHero from '@/components/FuarPageHero'

export const metadata = {
  title: 'Trade Shows & Exhibitions - SetTravel UK',
  description: 'Discover international trade shows, exhibitions, and industry events',
}

export default async function Fuars() {
  const fuars = await getAllFuars()

  return (
    <div>
      {/* Hero Section */}
      <FuarPageHero />

      {/* Fuar List with Filters */}
      <FuarList initialFuars={fuars} />
    </div>
  )
}
