import React from 'react';
import '../Discount/Discount.css'

const Discount = () => {
    return (
        <section className='dis'>
            <div className='container mx-auto'>
                <div className='text-center lg:w-1/3 md:1/2 w-full mr-auto md:bg-[#c0c0c084] bg-[#767676b3] p-10 space-y-5'>
                    <h2 className='text-4xl font-bold'>BE IN TIME FOR <br />
                        <span className='text-white font-extrabold'>HUGE PROMO</span> <br />
                        IN OUR STORES!</h2> 
                        <p className='text-xl'>Use your coupon code and get an awesome discount on
                            a new game for your children along with our detailed
                            review, tips and hints!</p>

                         <button className='btn px-20'>More</button>   
                </div>
            </div>
        </section>
    );
};

export default Discount;