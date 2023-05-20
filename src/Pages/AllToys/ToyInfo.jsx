import React from 'react';
import { Link } from 'react-router-dom';

const ToyInfo = ({toy}) => {

    const {_id,sellerName,price,quantity,subCategory,photo,toyName} = toy
    return (
        <tr>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">

              <div className="mas w-24 rounded-full h-24">
                <img src={photo} className=""
                />
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


        <td>
            <button> <Link to={`/all-toys/${_id}`}>View Details </Link></button>
            
        </td>
        
      </tr>
    );
};

export default ToyInfo;