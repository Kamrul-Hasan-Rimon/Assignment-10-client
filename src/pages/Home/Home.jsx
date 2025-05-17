import React from 'react'
import Banner from '../../component/Banner/Banner'
import LatestVisas from '../../component/LatestVisas/LatestVisas'
import VisaCategories from '../../component/Visa Categories/VisaCategories'
import Testimonials from '../../component/Testimonials/Testimonials'
import Features from '../../component/Features/Features'
import Stats from '../../component/Stats/Stats'
import CTA from '../../component/CTA/CTA'
export default function Home() {
  return (
    <div>
      <Banner />
      <LatestVisas></LatestVisas>
      <VisaCategories></VisaCategories>
      <Stats></Stats>
      <Features></Features>

      <CTA></CTA>
      <Testimonials></Testimonials>
    </div>
  )
}
