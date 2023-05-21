import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';

const ToyDetails = () => {
    const toys = useLoaderData()
    useTitle('Toy Details')
    const {sellerName,photo, price, subCategory,rating, quantity, detail} = toys;

    return (
        <section className='container m-auto py-20'>

            <div className='font-bold text-center pb-20'>
                <h2 className='text-4xl font-bold'>Toy Details</h2>
            </div>

            
            <div className='w-[70%] mx-auto space-y-20'>
                <img className='m-auto w-96 object-cover' src={photo} alt="" />

                <div className='flex justify-between items-center'>
                <div>
                     <h2 className='text-xl font-bold'> Seller Name:  {sellerName}</h2>
                </div>
                </div>

                <div className='flex justify-between'>
                    <h2 className='text-xl font-bold'>Price : {price} </h2>
                    <h2 className='text-xl font-bold'>Rating : {rating}</h2>
                    <h2 className='text-xl font-bold'>category : {subCategory}</h2>
                    <h2 className='text-xl font-bold'> Quantity : {quantity}</h2>
                </div>

                
                <p className='text-xl'>  <span className='font-2xl font-bold'>Description</span> <br />{detail}</p>

            </div>
                
        </section>
    );
};

export default ToyDetails;