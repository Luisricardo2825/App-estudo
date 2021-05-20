import React from 'react';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import HomeTop from './components/HomeTop';
// import CarouselPricipal from './components/Carousel';

function App() {
  return (
    <>
      <Navbar />
      {/* <CarouselPricipal /> */}
      <HomeTop />
      <div className="container bg-secondary" />
      <Footer />
    </>

  );
}

export default App;
