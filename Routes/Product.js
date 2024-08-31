import React from 'react'
import Navbar from './Navbar'
import ProjHero from '../Components/Product/ProjHero'
import ProCon from '../Components/Product/ProCon'
import Projpg from '../Components/Product/Prdpg'
import Footer from './Footer'


export default function Product() {
  return (
    <div>
      <Navbar/>
       <ProjHero/>
      <Projpg/>
      <Footer/>
    </div>
  )
}
