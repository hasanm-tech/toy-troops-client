import React from 'react';
import error from '../../assets/error.jpg'

const Error = () => {
    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <img className='w-[400px] h-[400px] object-cover'  src={error} alt="" />
        </div>
    );
};

export default Error;