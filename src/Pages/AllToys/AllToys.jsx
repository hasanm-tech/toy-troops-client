import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyInfo from './ToyInfo';
import useTitle from './../../Hooks/useTitle';

const AllToys = () => {
    useTitle('All-Toys')
    const toys = useLoaderData();
    
    return (
        <section className='container mx-auto py-20'>
            <div className='pb-20 text-center'>
                <h2 className='text-4xl font-bold'>All Toys </h2>
            </div>
         <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>

            <th>
                <h2>img</h2>
            </th>
            <th>Toy Name</th>
            <th>Seller Name</th>
            <th>price</th>
            <th>Available Quantity</th>
            <th>SubCategory</th>
            <th>Details</th>
        </thead>
        <tbody>
          {/* row  */}
          {
            toys.map(toy => <ToyInfo key={toy._id} toy={toy}></ToyInfo>)
          }
        </tbody>
        {/* foot */}
      </table>
    </div>
        </section>
    );
};

export default AllToys;