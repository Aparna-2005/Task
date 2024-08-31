import React from 'react'
import Navbar from './Navbar'

import { Link } from 'react-router-dom'


import Abtcon from '../Components/AboutContent/Abtcon'
import Footer from './Footer'
// import Prodpg from '../Components/Product/Prdpg'



export default function Home2() {
  return (
    <>
      <div className='mask'>
        <Navbar />



        <div class="content">
          <h6 style={{ color: 'white', fontSize: "25px" }}>Now grocery at your home</h6>
          <h1 class="head_text" style={{ color: 'white' }}>Start to buy in online</h1>
          <div>
            <Link to="/BuyProduct" class="btn1 text-decoration-none" >BUY</Link>
          </div>
        </div>
      </div>



      <Abtcon />
      {/* <Prodpg /> */}
      <Footer />
    </>

  )
}
