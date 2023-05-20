import React from 'react';

const Cat_Toys = ({t}) => {

    const {name,picture,price,rating} = t;
    return (
            <div className='space-y-7 border p-5 text-center' >
                <img src={picture} alt="" />
                <h2 className='text-2xl font-bold'> Name : {name}</h2>
                <div className='flex justify-around'>
                    <p className='text-xl font-medium'> Price : {price}</p>
                    <p className='text-xl font-medium'> Rating : {rating}</p>
                </div>
                <button className='btn gap-2'>View Details </button>
            </div>
    );
};

export default Cat_Toys;