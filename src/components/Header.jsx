import React from 'react';
import logo from "../assets/Logoimg.png";
import Offers from './Offers';

const Header = ({ isDetailsView }) => {
  return (
    <header className="bg-gray-100 text-white flex justify-between items-center p-4 ">
       <img 
        src={logo} 
        alt="Restaurant Logo" 
        className="h-12 w-auto mb-2 md:mb-0"
      />

      <div className="flex gap-4 m-3">
        {isDetailsView ? (
          <>
            <div className="flex gap-4 text-black hover:underline">
             <Offers /> 
             </div>
          </>

        ) : (
          <button className="text-black font-bold hover:font-semibold transition-all duration-300 "  onClick={() => document.getElementById('contact-us').scrollIntoView({ behavior: 'smooth' })}>Contact Us</button>
        )}
      </div>
    </header>
  );
};

export default Header;

