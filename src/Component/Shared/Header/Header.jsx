import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div className="navbar  bg-[#fff8f0] py-4">
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
              <a> <Link> Home </Link></a>
            </li>
            <li className="bg-[#fff] w-[200px] p-2">
                <a><Link>All Toys</Link></a>
            </li >
            <li className="bg-[#fff] w-[200px] p-2">
                <a><Link>My Toys</Link></a>
            </li>
            <li className="bg-[#fff] w-[200px] p-2">
                <a> <Link>Add A Toy</Link></a>
            </li>
            <li className="bg-[#fff] w-[200px] p-2">
                <a> <Link>BLogs</Link></a>
            </li>

            </ul>
        </div>

        <a className="btn-logo">
            <h2 className="lg:text-2xl text-lg font-bold">Toy <span className="text-[#7d93cd]">Troops</span></h2>
        </a>
      </div>



      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
             <li>
              <a> <Link> Home </Link></a>
            </li>
            <li>
                <a><Link>All Toys</Link></a>
            </li >
            <li >
                <a><Link>My Toys</Link></a>
            </li>
            <li >
                <a> <Link>Add  A Toy</Link></a>
            </li>
            <li >
                <a> <Link>BLogs</Link></a>
            </li>
        </ul>
      </div>



      <div className="navbar-end mx-3">
      <button className="btn btn-circle btn-outline">
        User
        </button>
      </div>



    </div>
  );
};

export default Header;
