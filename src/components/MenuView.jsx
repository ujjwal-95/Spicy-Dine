import img1 from '../assets/Menu 1.jpg';
import img2 from '../assets/Menu 2.jpg';
import img3 from '../assets/Menu 3.jpg';
import React, { useState } from 'react';

const MenuView = () => {
  
  const menuImages = [
    img1,
    img2,
    img3
  ];

 
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState('next'); 

 
  const prevImage = () => {
    setDirection('prev');
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? menuImages.length - 1 : prevIndex - 1
    );
  };

  
  const nextImage = () => {
    setDirection('next');
    setCurrentImageIndex((prevIndex) =>
      prevIndex === menuImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6">Menu</h1>

     
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        <div
          className={`flex transition-transform duration-700 ease-in-out ${
            direction === 'next' ? '-translate-x-full' : 'translate-x-full'
          }`}
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
          }}
        >
          {menuImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Menu ${index + 1}`}
              className="w-full flex-shrink-0 rounded-lg shadow-lg"
            />
          ))}
        </div>

      
          <button
            onClick={prevImage}
            className="absolute top-1/3 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none md:p-3 text-2xl font-bold"
            >
             &#8592; 
          </button>
       <button
            onClick={nextImage}
            className="absolute top-1/3 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none md:p-3 text-2xl font-bold"
        >
          &#8594; 
       </button>
      </div>
    </div>
  );
};

export default MenuView;
