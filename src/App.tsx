import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Craftsmanship from './components/Craftsmanship';
import Collection from './components/Collection';
import WhyChoose from './components/WhyChoose';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { ModalContainer } from './components/ModalContainer'; // ✅ import the modal handler

function App() {
  return (
    <div className="min-h-screen bg-pearl-white">
      <Navbar />
      <Hero />
      <Story />
      <Craftsmanship />
      <Collection />
      <WhyChoose />
      <Testimonials />
      <InstagramFeed />
      <Contact />
      <Footer />
      <Cart />

      {/* ✅ Handles rendering of modals like Privacy, Terms, Return, Shipping */}
      <ModalContainer />
    </div>
  );
}

export default App;
