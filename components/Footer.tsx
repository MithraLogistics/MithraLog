import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Mithra Logistics. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;