import React from 'react';

const Tracker: React.FC = () => {
  return (
    <section id="tracker" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shipment Tracking</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our real-time tracking feature is currently under development and will be available soon. For any urgent inquiries about your shipment, please contact our support team.
          </p>
          <div className="bg-gray-100 p-8 rounded-lg">
            <p className="text-xl font-semibold text-primary">Coming Soon!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tracker;