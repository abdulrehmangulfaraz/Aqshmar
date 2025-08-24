import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { ModalContainer } from './components/ModalContainer';
import Admin from './components/Admin'; // Import the Admin component

const MainLayout = () => (
  <>
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
    <ModalContainer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-pearl-white">
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;