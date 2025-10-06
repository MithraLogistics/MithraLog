
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DataPortal from './components/DataPortal';
import Footer from './components/Footer';
import Features from './components/Features';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Header />
      <main>
        <Hero />
        <Features />
        <DataPortal />
      </main>
      <Footer />
    </div>
  );
};

export default App;
