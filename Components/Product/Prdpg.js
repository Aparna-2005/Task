import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Modal from './Modal';




export default function Prodpg() {


  //insert data

  const [prdData, setPrddata] = useState({
    name: "",
    prize: "",
    description: ""
  });



  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:8001/product/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prdData)
    })
      .then((response) => {
        if (response.ok) {
          console.log('details is added');
          alert('Details added successfully');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };



  const handleChange = (e) => {
    const { name, value } = e.target; // Destructuring the event target correctly
    setPrddata((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };




  //modal
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };



  //fetch record
  const [details, setdetails] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8001/product/')
      .then((response) => {
        setdetails(response.data)
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  })



  return (
    <div className='pro-con'>
      <div className='Project-text'>

        <div className=' container p-4 d-flex justify-content-between'>

          <div><h1 >ITEMS</h1></div>

          <div>
            <button type="button" onClick={handleOpen} className='btn btn-primary'>Add items</button>

            <Modal isOpen={open} onClose={handleClose}>
              <>
                <div class="container border p-3 mt-3 shadow-lg d-flex justify-content-center align-item-center flex-colum">
                  <form onSubmit={handleSubmit}>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Name Of the Product</label>
                      <input
                        type="name"
                        class="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Name"
                        name="name"
                        onChange={handleChange} value={prdData.name}
                        required />
                    </div>

                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label">Product prize</label>
                      <input
                        type="number"
                        class="form-control p-3"
                        id="exampleFormControlInput1"
                        placeholder="Prize"
                        name="prize"
                        onChange={handleChange} value={prdData.prize}
                        required />
                    </div>

                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                      <textarea
                        class="form-control p-3"
                        id="exampleFormControlTextarea1"
                        placeholder="Description"
                        rows="3"
                        name="description"
                        required
                        onChange={handleChange} value={prdData.description}></textarea>
                    </div>

                    <div class="col-auto d-flex justify-content-center align-item-center pt-3">
                      <button type="submit" class="btn submit-btn btn-primary">Submit</button>
                      <button type="submit" class="btn submit-btn btn-secondary ms-4" data-bs-dismiss="modal">Close</button>

                    </div>
                  </form>
                </div>
              </>
            </Modal>
          </div>

        </div>
      </div>




      <div
        style={{
          textAlign: "center",
          display: "block",
          padding: 30,
          margin: "auto",
        }}
      >
      </div>


      <div className='p-3'>
        <div className='row border p-3 m-4 g-2'>
          <div className='col-3 fw-bold'>Id</div>
          <div className='col-3 fw-bold'>Name of the product</div>
          <div className='col-3 fw-bold'>Price</div>
          <div className='col-3 fw-bold'>Description</div>
          {/* <div className='col-2'>Action</div> */}


          <div className='col-3'>1</div>
          <div className='col-3'>Apple</div>
          <div className='col-3'>250</div>
          <div className='col-3'>Kashmir apple</div>
          {/* <div className='col-2'><a href=""></a></div> */}
        </div>


      </div>



      <div>
        <div className='row g-2'>
          {details.map((i) =>
          (
            <div>
              <div className='col-3 fw-bold'>Id</div>
              <div className='col-3 fw-bold'>Name of the product</div>
              <div className='col-3 fw-bold'>Price</div>
              <div className='col-3 fw-bold'>Description</div>

              <div className='col-3'>{i.id}</div>
              <div className='col-3'>{i.name}</div>
              <div className='col-3'>{i.price}</div>
              <div className='col-3'>{i.description}</div>
             
            </div>

          ))}
        </div>
      </div>

    </div>
  )
}
