import React from 'react';
import img1 from '../../../assets/happy-child.png';
import   '../Banner/Banner.css'

const Banner = () => {
    return (
        <section className='heroB'>
                <div className="hero min-h-screen bg-transparent container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='md:w-1/2 w-full'>
                    <img src={img1} className="w-lg rounded-lg shadow-2xl transform rotate-3" />
                    </div>
                    <div className='md:w-1/2 w-full md:text-left text-center py-5'>
                    <h1 className="text-6xl font-extrabold"> <span className='text-[#f6a344]'>Fun to care,</span> <br />
                    Comfy Feel 
                    </h1>
                    <p className="py-6 text-xl">From young adventurers to seasoned collectors, our toys offer excitement for everyone</p>
                    <button className="btn bg-[#363636] text-[#f6a344]">Get Started</button>
                    </div>
                </div>
                </div>
        </section>
    );
};

export default Banner;