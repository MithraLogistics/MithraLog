
import React from 'react';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

const DataPortal: React.FC = () => {
  return (
    <section id="portal" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-cover bg-center bg-no-repeat rounded-xl p-12 md:p-20 overflow-hidden relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Access Our Data Portals</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-gray-200">
              Deep dive into your logistics data, generate comprehensive reports, and gain valuable supply chain insights through our secure client portals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://script.google.com/macros/s/AKfycbyf9mU55Mh8Rsg9FYyAl2Rosh9gCBmCmirXCcdtrOkrDg3w20yLk35ZfXKElkX9_VY7/exec?page=load"
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-secondary hover:bg-secondary-dark text-primary-dark font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <span>2025_26 Data Portal</span>
                <ExternalLinkIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              
              <a 
                href="https://script.google.com/macros/s/AKfycbwPM07v8HHmYjobr4_2MIJxV9yQ1Be7fXbNJdZoSCDyvul9UtTmxx9pyYP1r3FljTR4/exec?page=load"
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-primary font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-xl border-2 border-transparent"
              >
                <span>2026_FM Data Portal</span>
                <ExternalLinkIcon className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPortal;
