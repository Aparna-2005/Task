import React from 'react'


import "./AbtconStyles.css"


export default function Abtcon() {
    return (
        <div>
            <div className='About-content'>
                <div className='About-header'>
                    <div className='About-text'>
                        <h2>Available Products</h2>
                    </div>
                    <div className='row gap-5'>

                        <div className='col-3'>
                            <div class="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZw8qWrbxaLRHKaAMo14PcNxuqeneK9Ka22Q&s" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Vegetables</h5>
                                    <p class="card-text">Vegetables are a good source of dietary fiber, a type of carbohydrate that helps pass food through your digestive system.</p>
                                    <a href="/Product" class="btn btn-primary">View items</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>
                            <div class="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJaB4CfdpehM4mzx6avwe6dBvgAl1QnuQkxA&s" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Fruits</h5>
                                    <p class="card-text">Fruits are an excellent source of essential vitamins and minerals,they are high in fiber, provide a wide range of health-boosting antioxidants</p>
                                    <a href="/Product" class="btn btn-primary">View items</a>
                                </div>
                            </div>
                        </div>

                        <div className='col-3'>


                            <div class="card" >
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNBwSpmlzU4v6gdoU9A1DyMyaWdrrXDgeDvA&s" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Nuts</h5>
                                    <p class="card-text">A nut is a fruit consisting of a hard or tough nutshell protecting a kernel which is usually edible. Almonds are known as the "king of nuts" and are the most highly cultivated nut in the world.</p>
                                    <a href="/Product" class="btn btn-primary">View items</a>
                                </div>
                            </div>


                         
                        </div>
                    </div>
                </div>

            </div>


            {/* <Campaign_fetch></Campaign_fetch> */}
        </div>
    )
}
