import React from 'react'

import "./BuyProductStyles.css"
import Navbar from './Navbar'
import Footer from './Footer'


export default function BuyProduct() {
    return (
        <div>

<Navbar/>

            <div class=" p-3">
                <div>
                    <h1 class="text-center text-danger">PRODUCT DETAILS</h1>
                </div>
                <div class="container border p-3 mt-3 shadow-lg d-flex justify-content-center align-item-center flex-colum">
                    <form method="POST" action="insert.php" class="n">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Name Of the customer</label>
                            <input
                                type="name"
                                class="form-control p-3"
                                id="exampleFormControlInput1"
                                placeholder="Name"
                                name="name"
                                required
                            />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"
                            >Email address</label
                            >
                            <input
                                type="email"
                                class="form-control p-3"
                                id="exampleFormControlInput1"
                                placeholder="Email id"
                                name="email"
                                required
                            />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"
                            >Name of the item</label
                            >
                            <select class="form-select form-control p-3" aria-label="Default select example" name="department">
                                <option selected>Item</option>
                                <option value="Junior software trainee">Apple</option>
                                <option value="Senior software trainee">Orange</option>
                                <option value="QA">Banana</option>
                                <option value="UI/UX">Grapes</option>
                                <option value="Full stack developer">Potato</option>
                                <option value="Netwrok administrator">Brinjal</option>
                                <option value="Data analysis">Onion</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"
                            >Phone number</label
                            >
                            <input
                                type="tel"
                                class="form-control p-3"
                                id="exampleFormControlInput1"
                                placeholder="Phone number"
                                pattern="[0-9]{10}"
                                name="phone"
                                required
                            />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label"
                            >Address</label
                            >
                            <textarea
                                class="form-control p-3"
                                id="exampleFormControlTextarea1"
                                placeholder="Address"
                                rows="3"
                                name="address"
                                required
                            ></textarea>
                        </div>

                        <div class="col-auto d-flex justify-content-center align-item-center pt-3">
                            <button type="submit" class="btn submit-btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>


            <Footer/>
        </div>
    )
}
