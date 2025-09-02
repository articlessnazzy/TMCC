import React from 'react';
import type { TournamentDetails } from '../types';

interface RulesDisplayProps {
    tournament: TournamentDetails;
}

const RulesDisplay: React.FC<RulesDisplayProps> = ({ tournament }) => {
    return (
        <section className="mb-8 p-6 bg-[#F8F5F0] rounded-lg border-2 border-dashed border-[#D3D3B1]">
            <h3 className="text-center text-3xl font-bold text-[#4A4B2F] mb-2">{tournament.name}</h3>
            <p className="text-center text-xl text-[#76794F] mb-4">{tournament.tagline}</p>
            
            <div className="text-center text-stone-600 mb-6">
                {tournament.schedule.map((line, index) => (
                    <p key={index} className="leading-relaxed">{line}</p>
                ))}
            </div>

            <div className="mb-6">
                <h4 className="font-bold text-lg text-stone-800 mb-3">Key Rules & Information:</h4>
                <ul className="list-disc list-inside space-y-2 text-stone-700">
                    {tournament.rules.map((rule, index) => (
                        <li key={index}>{rule}</li>
                    ))}
                </ul>
            </div>

             <div>
                <h4 className="font-bold text-lg text-stone-800 mb-2">Registration Fee:</h4>
                <p className="text-2xl font-bold text-[#4A4B2F]">{tournament.registrationFee}</p>
            </div>
        </section>
    );
};

export default RulesDisplay;
