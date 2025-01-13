import { useState } from "react";

const OffersDropdown = () => {
  const [isOffersOpen, setIsOffersOpen] = useState(false);

  const toggleOffers = () => {
    setIsOffersOpen(!isOffersOpen);
  };

  const offers = [
    "🎉 Happy Hour: 20% off from 5 PM to 7 PM",
    "🍽️ Family Combo: 15% off on orders above $50",
    "🎂 Free Dessert on birthdays!",
  ];

  return (
    <div className="relative">
      <button
        className="bg-yellow-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-600"
        onClick={toggleOffers}
      >
        Offers
      </button>

      {isOffersOpen && (
        <>
          {/* Backdrop with blur effect */}
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>

          {/* Centered Offers Dropdown */}
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white w-80 p-6 rounded-lg shadow-lg text-gray-900">
              <div className="flex justify-between items-center px-4 py-2 border-b">
                <span className="font-bold">Current Offers</span>
                <button
                  className="text-red-500 font-bold hover:text-red-700"
                  onClick={() => setIsOffersOpen(false)}
                >
                  Close ✖
                </button>
              </div>
              <ul className="py-2">
                {offers.map((offer, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 border-b last:border-none"
                  >
                    {offer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OffersDropdown;
