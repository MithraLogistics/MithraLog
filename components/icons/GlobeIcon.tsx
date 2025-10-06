
import React from 'react';

export const GlobeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 009-9h-9v9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12a9 9 0 019-9v9h-9zM21 12a9 9 0 01-9 9v-9h9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3a9 9 0 00-9 9h9V3z" />
  </svg>
);
