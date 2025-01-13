import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white px-6 py-4" id='contact-us'>
      <div className="flex flex-col md:flex-row justify-between items-center">
        
    
      <div className="flex justify-center items-center space-x-4 mb-4 md:mb-0 w-full">
          {/* <a href="#" target="_blank" rel="noopener noreferrer">
           <FaFacebook className="text-2xl text-black hover:text-gray-400" />
            </a> */}
           
            <FaFacebook className="text-2xl text-black hover:text-gray-400 "/>
            <FaInstagram className="text-2xl text-black hover:text-gray-400 "/>
            <FaYoutube className="text-2xl text-black hover:text-gray-400 "/>


           
      </div>


       
        <div className="flex flex-col items-center md:items-end w-full mt-4 md:mt-0">
       
          <p className="text-sm text-black font-semibold">email@SpicyDine.com</p>
        
          <p className="text-sm text-black font-semibold">123 City Highway,India</p>
          <p className="text-xs text-black mt-2 font-semibold">
            © {new Date().getFullYear()} SpicyDine. All rights reserved.
          </p>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
