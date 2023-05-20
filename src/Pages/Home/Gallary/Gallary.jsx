import React from 'react';

import hero1 from '../../../assets/hero1.avif'
import hero11 from '../../../assets/hero1.jpg'
import hero2 from '../../../assets/hero2.webp'
import hero3 from '../../../assets/hero3.webp'
import hero4 from '../../../assets/hero4.webp'
import hero5 from '../../../assets/hero5.webp'

const Gallery = () => {
  
  return (
   <section>
    <div className='py-10 text-center'>
            <h2 className="text-4xl font-bold mb-4">Action Toy Gallery</h2>
            <p className="text-gray-600 mb-8">Check out these exciting action toy images from our collection:</p>
      </div>

    <div className='grid md:grid-cols-4 grid-cols-2 gap-10'>
        
        <div className='col-span-2 row-span-2'>
            <img src={hero11} alt="" />
        </div>
        
        <div>
            <img src={hero3} alt="" />
        </div>
        <div>
            <img src={hero4} alt="" />
        </div>
        <div>
            <img src={hero2} alt="" />
        </div>
        <div>
            <img src={hero5} alt="" />
        </div>
        
    </div>
   </section>
  );
};

export default Gallery;
