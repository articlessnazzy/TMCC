import React from 'react';
import OrnamentalDivider from './OrnamentalDivider';

const Header: React.FC = () => (
  <header className="text-center mb-8">
    <h1 className="text-4xl md:text-5xl font-bold text-[#4A4B2F]">
      Chhatrapati Shivaji Maharaj Park
    </h1>
    <OrnamentalDivider className="my-4"/>
    <h2 className="text-2xl md:text-3xl text-[#76794F]">
      Tournament Registration Form
    </h2>
  </header>
);

export default Header;
