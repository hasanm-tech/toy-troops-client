import React from 'react';
import p1 from '../../../assets/p1.webp'
import p2 from '../../../assets/p2.avif'
import p3 from '../../../assets/p3.webp'
import p4 from '../../../assets/p4.avif'

const Services = () => {
    return (
        <section className='bg-[#e2e9ff91]'>
            <div className='container mx-auto py-20 grid md:grid-cols-4 grid-cols-2 gap-10 justify-items-center justify-center text-center'>
                <div className='text-center'>
                    <img className='m-auto'  src={p1} alt="" />
                    <h2 className='font-semibold py-2'>Free Shipping</h2>
                    <p>On Order $23 - 7 Days A Week</p>
                </div>
                <div className='text-center'>
                <img  className='m-auto' src={p2} alt="" />
                <h2 className='font-semibold py-2'>Money Back Guarantee</h2>
                <p>Send Within 30 Days</p>
                </div>
                <div className='text-center'>
                <img  className='m-auto' src={p3} alt="" />
                <h2 className='font-semibold py-2'>Free Returns</h2>
                <p>Free 90 Days Returns Policy</p>
                </div>

                <div className='text-center'>
                <img  className='m-auto' src={p4} alt="" />
                <h2 className='font-semibold py-2'>24/7 Customer Service</h2>
                <p>Call Us 24/7 At 000 -123 - 455</p>
                </div>

                
                
                
                
            </div>
        </section>
    );
};

export default Services;