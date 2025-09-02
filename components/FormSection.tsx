import React from 'react';

interface FormSectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const FormSection: React.FC<FormSectionProps> = ({ title, subtitle, children }) => (
  <section className="mb-8">
    <h3 className="text-2xl font-bold text-[#4A4B2F] border-b-2 border-[#D3D3B1] pb-2 mb-1">{title}</h3>
    {subtitle && <p className="text-sm text-stone-500 mb-4">{subtitle}</p>}
    <div className="mt-4">
      {children}
    </div>
  </section>
);

export default FormSection;
