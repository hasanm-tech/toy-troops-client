import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const myToys = useLoaderData()
    const {_id,price,quantity,detail,toyName} = myToys;


    const handleUpdate = event => {
        event.preventDefault()
        
        const form = event.target;
        const toyName = form.toyName.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const detail = form.detail.value;
        const updatedToy = {toyName,price,quantity,detail}
        console.log(updatedToy)

        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedToy) 
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire(
                    'Good job!',
                    'Your toy updated !',
                    'success'
                  )
            }
        })
}


    return (
        <section>
            <div className="container mx-auto">
                <h2 className="py-10 text-center font-bold text-4xl">Update Toy  </h2>
            <div className="hero min-h-screen bg-[#e2e9ff91]">
                    <div className="hero-content mx-auto w-10/12">
                    <div className="card w-full ">
                        <form onSubmit={handleUpdate}>
                        <div className="card-body w-full">
                            <div className="form-info w-full grid grid-cols-2 gap-10">

                            

                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                                <input type="text" defaultValue={toyName} name='toyName' placeholder="  Toy Name " className="input input-bordered"/>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" defaultValue={price} name='price' placeholder="price" className="input input-bordered"/>
                            </div>

                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                                <input type="text" defaultValue={quantity} name='quantity' placeholder="quantity" className="input input-bordered"/>
                            </div>

                           
                            </div>

                            <div className="form-control mt-6 pt-4">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <input
                                type="message"
                                name='detail'
                                defaultValue={detail}
                                placeholder="detail Description"
                                className="textarea textarea-bordered h-40 my-6"
                                />
                            </div>

                <div className="form-control mt-6">
                <input type="submit" value="Submit" className='btn bg-[#3b82f6cc]' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
            </div>
        </section>
    );
};

export default UpdateToy;