import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const DetailsView = ({ cardData }) => {
  const { cardIndex } = useParams();
  const navigate = useNavigate();
  const card = cardData[cardIndex];
  const [showBooking, setShowBooking] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    guests: '',
    time: '',
    name: '',
    phone: '',
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!card) {
    return <div>Card not found!</div>;
  }

  const handleSubmit = () => {
    if (formData.date && formData.guests && formData.time && formData.name && formData.phone) {
      setBookingSuccess(true);
    } else {
      alert('Please fill all the fields');
    }
  };

  const handleCloseSuccessMessage = () => {
    setBookingSuccess(false);
    setShowBooking(false);
    setFormData({
      date: '',
      guests: '',
      time: '',
      name: '',
      phone: '',
    });
  };

  return (
    <div className="p-8 w-3/4 mx-auto">
      <div className="w-full h-[75vh]">
        <img
          src={card.detailsImage}
          alt={card.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <h1 className="text-2xl font-bold mt-4">{card.title}</h1>
      <p className="text-gray-700 font-semibold my-4">{card.detailsDescription1}</p>
      <br></br>
      <p className="text-gray-700 font-semibold my-4">{card.detailsDescription2}</p>
      <br></br>
      <p className="text-gray-700 font-semibold my-4">{card.detailsDescription3}</p>

      <div className="flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => navigate(`/menu/${cardIndex}`)}
        >
          Menu
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={() => setShowBooking(true)}
        >
          Book Now
        </button>
      </div>

      {showBooking && !bookingSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4 text-center">Book Your Table</h2>

            <label className="block mb-2">
              <span className="text-gray-700">Select Date</span>
              <input
               type="date"
               className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
               value={formData.date}
               onChange={(e) => setFormData({ ...formData, date: e.target.value })}
               min={new Date().toISOString().split("T")[0]} 
               />
            </label>

            <label className="block mb-2">
              <span className="text-gray-700">Number of Guests</span>
              <input
                type="number"
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="1"
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              />
            </label>

            <label className="block mb-2">
              <span className="text-gray-700">Select Time</span>
              <select
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              >
                <option value="">Choose Time</option>
                <option value="5:00 PM">5:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                <option value="8:00 PM">8:00 PM</option>
                <option value="9:00 PM">9:00 PM</option>
                <option value="10:00 PM">10:00 PM</option>
              </select>
            </label>

            <label className="block mb-2">
              <span className="text-gray-700">Your Name</span>
              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </label>

            <label className="block mb-4">
              <span className="text-gray-700">Phone Number</span>
              <input
                type="tel"
                className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') })}  // Replace anything that's not a number
                maxLength="10"
              />
            </label>

            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white w-full py-2 rounded-lg hover:bg-green-600"
              disabled={!formData.date || !formData.guests || !formData.time || !formData.name || !formData.phone}
            >
              Submit
            </button>

            <button
              onClick={() => setShowBooking(false)}
              className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {bookingSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <div className="text-center">
              <div className="text-green-500 text-6xl mb-4">✓</div>
              <h2 className="text-xl font-bold">Booking Successful!</h2>
              <p className="text-sm text-gray-700 mt-4">Your reservation is confirmed.</p>
              <button
                onClick={handleCloseSuccessMessage}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsView;
