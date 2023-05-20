import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, } from "react-icons/fa";


const Footer = () => {
  return (
    <section className=" bg-[#e2e9ff91] footer-bg">
        <footer className="footer pt-20 p-5 container mx-auto grid md:grid-cols-4 grid-cols-2  text-neutral-content gap-4" >
            <div className="items-center col-span-2">
            <h2 className="lg:text-2xl text-lg font-bold text-[#000000be]">Toy <span className="text-[#f6a344]">Troops</span></h2>
            <p className="text-lg text-[#000000be] py-5">Shop with confidence knowing that we offer hassle-free returns and a satisfaction guarantee on all our action toys.</p>
            
        </div>
        <div>
            <span className="footer-title  text-[#000000be]">Services</span>
            <a className="link link-hover  text-[#000000be]">Branding</a>
            <a className="link link-hover  text-[#000000be]">Design</a>
            <a className="link link-hover  text-[#000000be]">Marketing</a>
            <a className="link link-hover  text-[#000000be]">Advertisement</a>
        </div>
        <div>
            <span className="footer-title  text-[#000000be]">Company</span>
            <a className="link link-hover  text-[#000000be]">About us</a>
            <a className="link link-hover  text-[#000000be]">Contact</a>
            <a className="link link-hover  text-[#000000be]">Jobs</a>
            <a className="link link-hover  text-[#000000be]">Press kit</a>
        </div>
        <div>
            <span className="footer-title  text-[#000000be]">Social Links</span>
            <a className="link link-hover  text-[#000000be]"><FaFacebook /></a>
            <a className="link link-hover  text-[#000000be]"><FaLinkedinIn /></a>
            <a className="link link-hover  text-[#000000be]"><FaInstagram /></a>
            <a className="text-[#000000be]">Address : mirpur - Dhaka</a>
        </div>

        
        </footer>
        <div className="bg-[#7d93cd] py-2 text-center">
            <p>Copyright © 2023 - All right reserved</p>
        </div>

    </section>

  );
};

export default Footer;
