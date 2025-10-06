import React from 'react';
import { GlobeIcon } from './icons/GlobeIcon';
import { ClockIcon } from './icons/ClockIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{children}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Mithra Logistics?</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
          We are committed to providing exceptional service and value through our advanced technology and dedicated team.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          <FeatureCard icon={<GlobeIcon className="w-8 h-8" />} title="Global Reach">
            Our extensive network spans across continents, ensuring your shipments reach their destination anywhere in the world.
          </FeatureCard>
          <FeatureCard icon={<ClockIcon className="w-8 h-8" />} title="On-Time Delivery">
            Leveraging cutting-edge route optimization, we guarantee timely and efficient delivery for all your cargo needs.
          </FeatureCard>
          <FeatureCard icon={<ShieldCheckIcon className="w-8 h-8" />} title="Secure & Reliable">
            With state-of-the-art tracking and security protocols, your shipments are always safe and accounted for.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default Features;