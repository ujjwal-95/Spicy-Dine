import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cards = ({ cardData }) => {
  const navigate = useNavigate();

  const handleViewDetails = (index) => {
    navigate(`/details/${index}`);
  };
  const [activeCard, setActiveCard] = useState(null);
   
  const handleHover = (index) => {
    setActiveCard(index);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {cardData.map((card, index) => (
       <div
       key={index}
       className={`flex flex-col border rounded-lg overflow-hidden shadow-lg w-full md:w-1/3 h-96 transition-transform duration-300 ${
         activeCard === index ? 'scale-105 shadow-2xl' : ''
       }`}
       onMouseEnter={() => handleHover(index)}
       onMouseLeave={handleMouseLeave}
     >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-semibold ml-2 mt-4">{card.title}</h3>
          <p className="text-gray-600 font-semibold ml-2 my-2">{card.description}</p>
          <button
            onClick={() => handleViewDetails(index)}
            className="text-black font-bold hover:font-semibold hover:underline mt-2"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
