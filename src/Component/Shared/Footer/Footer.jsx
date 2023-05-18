import React from "react";

const Footer = () => {
  return (
    <>
    <footer className="footer p-10 bg-[#fff] text-neutral-content" >
        <div className="items-center grid-flow-col">
        <h2 className="lg:text-2xl text-lg font-bold text-[#000000be]">Toy <span className="text-[#7d93cd]">Troops</span></h2>
        
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
        <span className="footer-title  text-[#000000be]">Legal</span>
        <a className="link link-hover  text-[#000000be]">Terms of use</a>
        <a className="link link-hover  text-[#000000be]">Privacy policy</a>
        <a className="link link-hover  text-[#000000be]">Cookie policy</a>
      </div>

      
    </footer>
    <div className="bg-[#7d93cd] py-4 text-center">
        <p>Copyright © 2023 - All right reserved</p>
    </div>

    </>
  );
};

export default Footer;
