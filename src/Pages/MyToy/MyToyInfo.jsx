import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import '../MyToy/MyToy.css'

const MyToyInfo = ({myToy}) => {

    const {_id,sellerName,sellerEmail,price,quantity,subCategory,photo,toyName} = myToy;

    return (
        <tr>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">

              <div className="mas w-25 rounded-full h-25">
                {photo? <img src={photo} className=""
                /> : ''}
              </div>

            </div>
          </div>
        </td>

        
        <td>
            <div>
                <div className="font-bold">{toyName}</div>
            </div>
        </td>
        <td>
            <div>
                <div className="font-bold">{sellerName}</div>
            </div>
        </td>
        <td>
            <div>
                <div className="font-bold">{sellerEmail}</div>
            </div>
        </td>
        <td>
            <div>
                <div className="font-bold">{price}</div>
            </div>
        </td>

        <td>
            <div>
                <div className="font-bold">{quantity}</div>
            </div>
        </td>


        <td>
            <div>{subCategory}</div>
        </td>


        <td className='space-x-10'>
            <button><FaRegEdit /></button>
            <button><FaRegTrashAlt /></button>
            <button> <Link to={`/all-toys/${_id}`}> View Details </Link></button>
            
        </td>
        
      </tr>
    );
};

export default MyToyInfo;