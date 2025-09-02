import React from 'react';

interface OrnamentalDividerProps {
  className?: string;
}

const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({ className = 'my-8' }) => (
  <div className={`flex items-center justify-center text-[#949664] ${className}`}>
    <div className="flex-grow border-t border-[#D3D3B1]"></div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-4">
      <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20L12 16.9L7.09 20L8.45 13.97L4 9.27L9.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <div className="flex-grow border-t border-[#D3D3B1]"></div>
  </div>
);

export default OrnamentalDivider;
