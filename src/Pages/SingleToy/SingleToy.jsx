import React, { useContext } from 'react';
import {useLoaderData} from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';

const SingleToy = () => {

    const toy = useLoaderData()
    const {user} = useContext(AuthContext)

    const {name,picture,price,rating,category,description, quantity} = toy;

    return (
        <section className='container m-auto py-20'>

            <div className='font-bold text-center pb-20'>
                <h2 className='text-4xl font-bold'>Toy Details</h2>
            </div>

            
            <div className='w-[70%] mx-auto space-y-20'>
                <img className='m-auto w-96 object-cover' src={picture} alt="" />

                <div className='flex justify-between items-center'>
                <div>
                    {user? <h2 className='text-xl font-bold'> Seller Name:  {user.displayName}</h2> : ''}

                    {user? <h2 className='text-xl font-bold'> Seller Email:  {user.email}</h2> : ''}
                </div>
                <div>
                {name ? <h2 className='text-xl font-bold'> Toy Name:  {name}</h2> : ''}
                </div>
                </div>

                <div className='flex justify-between'>
                    <h2 className='text-xl font-bold'>Price : {price} </h2>
                    <h2 className='text-xl font-bold'>Rating : {rating}</h2>
                    <h2 className='text-xl font-bold'>category : {category}</h2>
                    <h2 className='text-xl font-bold'> Quantity : {quantity}</h2>
                </div>

                
                <p className='text-xl'>  <span className='font-2xl font-bold'>Description</span> <br />{description}</p>

            </div>
                
        </section>
    );
};

export default SingleToy;