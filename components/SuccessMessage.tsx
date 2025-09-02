import React from 'react';

interface SuccessMessageProps {
  teamName: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ teamName }) => (
  <div className="min-h-screen flex items-center justify-center text-[#4A4B2F] p-4">
    <div className="max-w-2xl w-full mx-auto bg-white/60 backdrop-blur-sm shadow-2xl shadow-stone-400/20 rounded-lg p-10 text-center">
      <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h1 className="text-4xl font-bold mt-6">Registration Successful!</h1>
      <p className="text-lg text-stone-600 mt-4">
        Thank you, <span className="font-bold">{teamName}</span>, for registering for the tournament.
      </p>
      <p className="text-stone-500 mt-2">
        We have received your details. The organizing committee will review your application and get in touch with you shortly with further information.
      </p>
      <div className="mt-8 border-t border-[#D3D3B1] pt-6">
        <p className="text-sm text-stone-600">See you on the field!</p>
        <p className="text-2xl font-bold mt-2 font-['Cinzel']">Chhatrapati Shivaji Maharaj Park</p>
      </div>
    </div>
  </div>
);

export default SuccessMessage;
