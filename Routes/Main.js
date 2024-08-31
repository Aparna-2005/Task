import React from 'react'
import { Route, Routes } from 'react-router-dom'


import About from './About'
import Product from './Product'
import Contact from './Contact'
import Footer from './Footer'



// import Campaign from '../Components/Campaign/Campaign'
// import Campaign_fetch from '../Components/Campaign/Campaign_fetch'

import Home2 from './Home2'
import BuyProduct from './BuyProduct'
import Modal from '../Components/Product/Modal'
import Prodpg from '../Components/Product/Prdpg'



export default function Main() {

  return (
    <div>
         <Routes>
            <Route path="/" element={<Home2/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Product" element={<Product/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Footer" element={<Footer/>}/>

            <Route path='/BuyProduct' element={<BuyProduct/>}/>
            <Route path='/Modal' element={<Modal/>}/>

            <Route path='/Prdpg' element={<Prodpg/>}/>

           

            {/* <Route path='/Campaign' element={<Campaign/>} />
            <Route path="/Campaign_fetch" element={<Campaign_fetch/>} /> */}
        </Routes>
    </div>
  )
}
