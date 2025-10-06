import React, { useState, useEffect } from 'react';
import { TruckIcon } from './icons/TruckIcon';
import ContactModal from './ContactModal';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <TruckIcon className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Mithra Logistics</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-primary transition-colors font-medium">Features</button>
            <button onClick={() => scrollToSection('portal')} className="text-gray-600 hover:text-primary transition-colors font-medium">Data Portal</button>
          </nav>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:inline-block bg-secondary hover:bg-secondary-dark text-primary-dark font-bold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105">
            Contact Us
          </button>
        </div>
      </header>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;