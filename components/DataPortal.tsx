
import React from 'react';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

const DataPortal: React.FC = () => {
  return (
    <section id="portal" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-cover bg-center bg-no-repeat rounded-xl p-12 md:p-20" style={{ backgroundImage: "url('https://picsum.photos/1200/400?image=997')" }}>
          <div className="bg-black/60 rounded-xl p-10 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Access Our Data Portal</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Dive deep into your logistics data, generate reports, and gain valuable insights through our powerful and secure client data portal.
            </p>
            <a 
              href="https://script.google.com/macros/s/AKfycbyf9mU55Mh8Rsg9FYyAl2Rosh9gCBmCmirXCcdtrOkrDg3w20yLk35ZfXKElkX9_VY7/exec?page=load" // Placeholder URL for a Google App Script
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary-dark text-primary-dark font-bold py-4 px-10 rounded-full text-lg transition-transform duration-300 hover:scale-105 shadow-lg">
              <span>Go to Portal</span>
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPortal;
