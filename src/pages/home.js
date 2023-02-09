import React from 'react';
import '../App.css';
import Cards from '../components/cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/footer';

function Home() {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;