import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToyInfo from './MyToyInfo';
import '../MyToy/MyToy.css'
import Swal from 'sweetalert2';

const MyToy = () => {



    const {user} = useContext(AuthContext)
    const url = `http://localhost:5000/myToys?sellerEmail=${user?.email}`

    console.log(user.email)
    
    const [myToys, setMyToys] = useState([])

    console.log(myToys)
    
    useEffect(() => {

    fetch(url)
    .then(res => res.json())
    .then(data => {
        setMyToys(data)
    })

    },[])


    const handleDelete = id => {
        const proceed = confirm('want to delete !! are you sure ??')

        if(proceed){
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire(
                        '',
                        'Your toy deleted!',
                        'success'
                      )

                      const remaining = myToys.filter(toy => toy._id !== id);
                      setMyToys(remaining)
                }
            })
        }
    }



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
            <th>Seller Email</th>
            <th>price</th>
            <th>Available Quantity</th>
            <th>SubCategory</th>
            <th>Details</th>
        </thead>
        <tbody>
          {/* row  */}
          {
            myToys.map(myToy => <MyToyInfo key={myToy._id} handleDelete={handleDelete} myToy={myToy}></MyToyInfo>)
          }
        </tbody>
        {/* foot */}
      </table>
    </div>
        </section>
    );
};

export default MyToy;