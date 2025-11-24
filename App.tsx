import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Vehicles from './components/Vehicles';
import Destinations from './components/Destinations';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Vehicles />
        <Destinations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;