import React from 'react'
import Banner from '../../component/Banner/Banner'
import LatestVisas from '../../component/LatestVisas/LatestVisas'
import VisaCategories from '../../component/Visa Categories/VisaCategories'
import Testimonials from '../../component/Testimonials/Testimonials'


export default function Home() {
  return (
    <div>
        <Banner/>
        <LatestVisas></LatestVisas>
        <VisaCategories></VisaCategories>
        <Testimonials></Testimonials>
    </div>
  )
}
