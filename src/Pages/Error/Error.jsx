import React from 'react';
import error from '../../assets/error.jpg'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='h-[100vh] flex justify-center items-center flex-col'>
            <img className='w-[400px] h-[400px] object-cover'  src={error} alt="" />

            <button className='btn my-20'><Link to='/'> Back To Home</Link> </button>
        </div>
        
    );
};

export default Error;