import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import { AuthContext } from "../../../Provider/AuthProvider";

const Header = () => {

    const {user,userLogOut} = useContext(AuthContext);
    
    console.log(user)

    const handleLogOut = () => {
        userLogOut()
        .then(() => {

        })
        .catch(error => {
            console.error(error)
        })
    }


  return (
    <section className=" bg-[#fefffd]">
        <div className="navbar container mx-auto  py-4">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                />
                </svg>
            </label>
            <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-full"
            >
            <li className="bg-[#fff] w-[200px] p-2">
                 <Link> Home </Link>
                </li>
                <li className="bg-[#fff] w-[200px] p-2">
                    <Link>All Toys</Link>
                </li >
                <li className="bg-[#fff] w-[200px] p-2">
                     <Link>BLogs</Link>
                </li>
                <li >
                {user? <Link>My Toys</Link> : ''}
                </li>
                <li >
                {user? <Link to='/add-toy'>Add a Toy</Link> : ''}
                </li>

                </ul>
            </div>

            <a className="btn-logo">
                <h2 className="lg:text-2xl text-lg font-bold">Toy <span className="text-[#f6a344]">Troops</span></h2>
            </a>
        </div>



        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li>
                <Link> Home </Link>
                </li>
                <li>
                <Link>All Toys</Link>
                </li >
                <li >
                    <Link>BLogs</Link>
                </li>
                <li >
                {user? <Link>My Toys</Link> : ''}
                </li>
                <li >
                {user? <Link to='/add-toy'>Add a Toy</Link> : ''}
                </li>
            </ul>
        </div>



        <div className="navbar-end mx-3">
        <ul>
        <li>
                {

                    user ?
                    <div className='user bg-transparent flex gap-4'> 

                    <img className='btn-circle userImg' title={user.displayName} roundedCircle  src={user.photoURL?user.photoURL : ''} alt="" /> 

                    <button className='user-btn'> <Link onClick={handleLogOut}> Logout </Link></button>

                    </div> :
                    <button className='user-btn font-bold'> <Link to='/login'>Login </Link> </button>

                    } 
         </li>
        </ul>
        </div>



        </div>
    </section>
  );
};

export default Header;
