import React from 'react';

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-[90vh] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <img src="https://picsum.photos/1600/900?image=1074" alt="Logistics background" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          Streamlined Logistics, Delivered.
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
          Your trusted partner in global supply chain management. We provide fast, reliable, and transparent logistics solutions tailored to your business needs.
        </p>
        <button 
          onClick={scrollToFeatures}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-10 rounded-full text-lg transition-transform duration-300 hover:scale-105 shadow-lg">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;