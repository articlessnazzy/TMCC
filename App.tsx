import React, { useState, useCallback } from 'react';
import { TOURNAMENTS, TournamentId } from './constants';
import type { FormData, Player } from './types';
import Header from './components/Header';
import FormSection from './components/FormSection';
import TextInput from './components/TextInput';
import PlayerInputRow from './components/PlayerInputRow';
import RulesDisplay from './components/RulesDisplay';
import OrnamentalDivider from './components/OrnamentalDivider';
import SuccessMessage from './components/SuccessMessage';

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    tournamentId: 'lpl',
    teamName: '',
    captainName: '',
    captainContact: '',
    captainEmail: '',
    players: Array(1).fill({ name: '', age: '', aadharFileName: '' }),
    paymentConfirmed: false,
    rulesAgreed: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const selectedTournament = TOURNAMENTS[formData.tournamentId];

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
        const { checked } = e.target as HTMLInputElement;
        setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  }, []);

  const handlePlayerChange = useCallback((index: number, field: keyof Player, value: string) => {
    const updatedPlayers = [...formData.players];
    updatedPlayers[index] = { ...updatedPlayers[index], [field]: value };
    setFormData(prev => ({ ...prev, players: updatedPlayers }));
  }, [formData.players]);

  const addPlayer = useCallback(() => {
    if (formData.players.length < 13) {
      setFormData(prev => ({
        ...prev,
        players: [...prev.players, { name: '', age: '', aadharFileName: '' }],
      }));
    }
  }, [formData.players]);

  const removePlayer = useCallback((index: number) => {
    if (formData.players.length > 1) {
      const updatedPlayers = formData.players.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, players: updatedPlayers }));
    }
  }, [formData.players]);
  
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.teamName.trim()) newErrors.teamName = 'Team name is required.';
    if (!formData.captainName.trim()) newErrors.captainName = 'Captain/Owner name is required.';
    if (!formData.captainContact.match(/^\d{10}$/)) newErrors.captainContact = 'Enter a valid 10-digit contact number.';
    if (!formData.captainEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) newErrors.captainEmail = 'Enter a valid email address.';
    if (formData.players.some(p => !p.name.trim() || !p.age.trim())) newErrors.players = 'All player names and ages are required.';
    if (!formData.paymentConfirmed) newErrors.paymentConfirmed = 'You must confirm the payment.';
    if (!formData.rulesAgreed) newErrors.rulesAgreed = 'You must agree to the tournament rules.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <SuccessMessage teamName={formData.teamName} />;
  }

  return (
    <div className="min-h-screen text-[#4A4B2F] p-4 sm:p-8">
      <main className="max-w-4xl mx-auto bg-white/50 backdrop-blur-sm shadow-2xl shadow-stone-400/20 rounded-lg p-6 sm:p-10">
        <Header />
        <form onSubmit={handleSubmit} noValidate>
          <FormSection title="Tournament Selection">
             <select
                id="tournamentId"
                name="tournamentId"
                value={formData.tournamentId}
                onChange={handleInputChange}
                className="w-full p-3 bg-[#F8F5F0] border border-stone-300 rounded-md focus:ring-2 focus:ring-[#949664] focus:outline-none transition"
              >
                <option value="lpl">Legends Premier League</option>
                <option value="sat">Saturday Auction Tournament</option>
              </select>
          </FormSection>

          <OrnamentalDivider />

          <RulesDisplay tournament={selectedTournament} />

          <OrnamentalDivider />
          
          <FormSection title="Team & Captain Details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <TextInput label="Team Name" name="teamName" value={formData.teamName} onChange={handleInputChange} error={errors.teamName} required/>
              <TextInput label="Captain / Owner's Name" name="captainName" value={formData.captainName} onChange={handleInputChange} error={errors.captainName} required/>
              <TextInput label="Contact Number" name="captainContact" type="tel" value={formData.captainContact} onChange={handleInputChange} error={errors.captainContact} required/>
              <TextInput label="Email Address" name="captainEmail" type="email" value={formData.captainEmail} onChange={handleInputChange} error={errors.captainEmail} required/>
            </div>
          </FormSection>
          
          <OrnamentalDivider />
          
          <FormSection title="Player Registration" subtitle={`Maximum 13 players. (${formData.players.length} / 13)`}>
            {formData.players.map((player, index) => (
              <PlayerInputRow
                key={index}
                index={index}
                player={player}
                onPlayerChange={handlePlayerChange}
                onRemovePlayer={removePlayer}
                canRemove={formData.players.length > 1}
              />
            ))}
             {errors.players && <p className="text-red-600 text-sm mt-2">{errors.players}</p>}
            <button
              type="button"
              onClick={addPlayer}
              disabled={formData.players.length >= 13}
              className="mt-4 px-4 py-2 bg-[#76794F] text-white rounded-md hover:bg-[#5f6140] transition disabled:bg-stone-400 disabled:cursor-not-allowed"
            >
              Add Player
            </button>
          </FormSection>

          <OrnamentalDivider />

          <FormSection title="Confirmation & Agreement">
            <div className="space-y-4">
               <div className="flex items-start p-4 bg-[#F8F5F0] rounded-lg border border-stone-200">
                  <input
                    type="checkbox"
                    id="paymentConfirmed"
                    name="paymentConfirmed"
                    checked={formData.paymentConfirmed}
                    onChange={handleInputChange}
                    className="h-5 w-5 mt-1 text-[#76794F] focus:ring-[#949664] border-stone-400 rounded cursor-pointer"
                  />
                  <label htmlFor="paymentConfirmed" className="ml-3 text-stone-700">
                    I confirm that the registration fee of <span className="font-bold">₹{selectedTournament.registrationFee}</span> has been paid or will be paid shortly as per the instructions provided by the committee.
                  </label>
               </div>
               {errors.paymentConfirmed && <p className="text-red-600 text-sm">{errors.paymentConfirmed}</p>}

                <div className="flex items-start p-4 bg-[#F8F5F0] rounded-lg border border-stone-200">
                  <input
                    type="checkbox"
                    id="rulesAgreed"
                    name="rulesAgreed"
                    checked={formData.rulesAgreed}
                    onChange={handleInputChange}
                    className="h-5 w-5 mt-1 text-[#76794F] focus:ring-[#949664] border-stone-400 rounded cursor-pointer"
                  />
                  <label htmlFor="rulesAgreed" className="ml-3 text-stone-700">
                    I have read, understood, and agree to all the tournament rules, regulations, and schedules.
                  </label>
               </div>
               {errors.rulesAgreed && <p className="text-red-600 text-sm">{errors.rulesAgreed}</p>}
            </div>
          </FormSection>
          
          <div className="mt-10 text-center">
            <button
              type="submit"
              className="w-full md:w-auto px-12 py-4 bg-[#4A4B2F] text-white text-xl font-bold rounded-lg shadow-lg hover:bg-[#3b3c25] transition-transform transform hover:scale-105"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default App;
