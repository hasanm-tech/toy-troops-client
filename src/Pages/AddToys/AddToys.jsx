import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../../Hooks/useTitle';

const AddToys = () => {

    const {user} = useContext(AuthContext)
    useTitle('Add-Toy')

    const handleToyBook = event => {
            event.preventDefault()
            
            const form = event.target;
            const name = form.name.value;
            const toyName = form.toyName.value;
            const photo = form.photo.value;
            const sellerName = form.sellerName.value;
            const sellerEmail = form.sellerEmail.value;
            const subCategory = form.subCategory.value;
            const price = form.price.value;
            const quantity = form.quantity.value;
            const rating = form.rating.value;
            const detail = form.detail.value;
            const booking = {name,toyName,photo,sellerEmail,sellerName,subCategory,price,quantity,rating,detail}
            console.log(booking)

            fetch('http://localhost:5000/bookings', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(booking) 
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire(
                        'Good job!',
                        'Your toy added!',
                        'success'
                      )
                }
            })
    }



    return (

        <section>
            <div className="container mx-auto">
                <h2 className="py-10 text-center font-bold text-4xl">Add A Toy </h2>
            <div className="hero min-h-screen bg-[#e2e9ff91]">
                    <div className="hero-content mx-auto w-10/12">
                    <div className="card w-full ">
                        <form onSubmit={handleToyBook}>
                        <div className="card-body w-full">
                            <div className="form-info w-full grid grid-cols-2 gap-10">

                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                                <input type="text" name='name' defaultValue={user?.displayName} placeholder=" Name " className="input input-bordered"/>
                            </div>

                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                                <input type="text" name='toyName' placeholder="  Toy Name " className="input input-bordered"/>
                            </div>


                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                                <input type="text" name='photo' placeholder=" Photo url " className="input input-bordered"/>
                            </div>

                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                                <input type="text" name='sellerName' defaultValue={user?.displayName} placeholder="Seller Name " className="input input-bordered"/>
                            </div>


                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                                <input type="text" name='sellerEmail' defaultValue={user?.email} placeholder="Seller Email " className="input input-bordered"/>
                            </div>


                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Subcategory</span>
                                </label>
                                <select name="subCategory" className="select select-bordered">
                                <option value="Math Toys">Marvel</option>
                                <option value="Language Toys">Transformers</option>
                                <option value="Science Toys">Star Wars</option>
                            </select>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" name='price' placeholder="price" className="input input-bordered"/>
                            </div>

                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                                <input type="text" name='rating' placeholder="rating" className="input input-bordered"/>
                            </div>

                            <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                                <input type="text" name='quantity' placeholder="quantity" className="input input-bordered"/>
                            </div>

                           
                            </div>

                            <div className="form-control mt-6 pt-4">
                            <label className="label">
                                <span className="label-text">Detail Description</span>
                            </label>
                            <input
                                type="message"
                                name='detail'
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

export default AddToys;