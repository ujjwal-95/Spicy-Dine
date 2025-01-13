import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Cards';
import DetailsView from './components/DetailsView';
import cardData from './components/data/cardData';
import MenuView from './components/MenuView';

const App = () => {
  const location = useLocation();

  // Save the current route in localStorage
  useEffect(() => {
    localStorage.setItem('lastVisitedRoute', location.pathname);
  }, [location]);

  // Restore the last visited route after a refresh
  useEffect(() => {
    const lastRoute = localStorage.getItem('lastVisitedRoute');
    if (lastRoute && lastRoute !== location.pathname) {
      window.history.replaceState(null, '', lastRoute);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isDetailsView={location.pathname !== '/'} /> 
       
      <main className="flex-grow">
        
      {location.pathname === '/' && (
          <h1 className="text-center text-3xl font-semibold font-serif mt-8">
            Come and join Us at Spicy Dine
          </h1>
          
        )}
      {location.pathname === '/' && (
          <p className="text-center text-1xl font-light mt-4">
            3 experience available
          </p>
        )}

        <Routes>
          <Route path="/" element={<Cards cardData={cardData} />} />
          <Route path="/details/:cardIndex" element={<DetailsView cardData={cardData} />} />
          <Route path="/menu/:cardIndex" element={<MenuView cardData={cardData} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
