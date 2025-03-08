import React from 'react'
import Nav from '../Components/Nav'
import DealsSection from '../Components/DealsSection'
import FlashSale from '../Components/FlashSale'
import SponsoredProducts from '../Components/SponsoredProducts'
import Sponsored from '../Components/Sponsored'
import Sponsored2 from '../Components/Sponsored2'
import Sponsored3 from '../Components/Sponsored3'
import PromoSection from '../Components/PromoSection'

export const Home = () => {
  return (
    <>
    <Nav/>
    <DealsSection/>
    <FlashSale/>
    <SponsoredProducts/>
    <Sponsored/>
    <Sponsored2/>
    <Sponsored3/>
    <PromoSection/>
    </>
  )
}
export default Home