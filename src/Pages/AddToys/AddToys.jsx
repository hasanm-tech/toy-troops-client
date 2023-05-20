import React from 'react';

const AddToys = () => {
    return (

//         Picture URL of the toy,
// Name,
// seller name (if available from the logged in user)
// seller email (info from the logged in user)
// Sub-category ( For example: if the website is based on Educational and learning toys, the sub-categories can be Math Toys, Language Toys, and Science Toys.)
// Price,
// Rating,
// Available quantity
// Detail description
        <section>
            <div className="container mx-auto">
                <h2 className="py-10 text-center font-bold text-4xl">Add A Toy </h2>
            <div className="hero min-h-screen bg-[#d4e5e772]">
                    <div className="hero-content mx-auto w-10/12">
                    <div className="card w-full ">
                        <form >
                        <div className="card-body w-full">
                            <div className="form-info w-full grid grid-cols-2 gap-10">
                            <div className="form-control w-full">
                                <label className="label">
                                <span className="label-text"> Name </span>
                                </label>
                                <input
                                type="text"
                                name='name'
                                placeholder=" Name "
                                className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                <span className="label-text"> Price </span>
                                </label>
                                <input
                                type="text"
                                placeholder=" Price "
                                name='price'
                                className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                <span className="label-text">Date </span>
                                </label>
                                <input
                                type="date"
                                placeholder="Text Here"
                                name='date'
                                className="input input-bordered"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                <span className="label-text"> User Email </span>
                                </label>
                                <input
                                type="text"
                                name='email'
                                placeholder="User Email "
                                className="input input-bordered"
                                />
                            </div>
                            </div>

                            <div className="form-control mt-6 pt-4">
                                <label className="label">
                                <span className="label-text">Product Description </span>
                                </label>
                            <input
                                type="message"
                                name='message'
                                placeholder="Product Description"
                                className="textarea textarea-bordered h-40 my-6"
                                />
                            </div>

                <div className="form-control mt-6">
                <input type="submit" value="Submit" className='btn bg-[#FF3811]' />
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