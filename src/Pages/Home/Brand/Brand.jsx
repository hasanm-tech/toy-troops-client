import React from 'react';
import '../Brand/Brand.css'

import brand1 from '../../../assets/brand-1.png'
import brand2 from '../../../assets/brand-2.png'
import brand3 from '../../../assets/brand-3.png'
import brand4 from '../../../assets/brand-4.png'
import brand5 from '../../../assets/brand-5.png'

const Brand = () => {
    return (
        <section className='text-center container mx-auto'>
            <h2 className='text-4xl font-bold'>Brands</h2>
            <p className='pt-5'>Experience the adrenaline rush of action-packed playtime with our top-quality action toy brand.</p>
            <div className='grid md:grid-cols-5 grid-cols-1 gap-6 py-20 justify-items-center brand-logo'>
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
                <img src={brand5} alt="" />
            </div>
        </section>
    );
};

export default Brand;