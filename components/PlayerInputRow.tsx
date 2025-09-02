import React from 'react';
import type { Player } from '../types';

interface PlayerInputRowProps {
  index: number;
  player: Player;
  onPlayerChange: (index: number, field: keyof Player, value: string) => void;
  onRemovePlayer: (index: number) => void;
  canRemove: boolean;
}

const PlayerInputRow: React.FC<PlayerInputRowProps> = ({
  index,
  player,
  onPlayerChange,
  onRemovePlayer,
  canRemove,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onPlayerChange(index, 'aadharFileName', e.target.files[0].name);
    } else {
      onPlayerChange(index, 'aadharFileName', '');
    }
  };

  const aadharId = `aadhar-${index}`;

  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-3 items-center mb-3 p-3 bg-stone-50 rounded-lg border border-stone-200">
      <div className="md:col-span-3">
        <label className="text-sm font-bold text-stone-600 md:hidden">Player Name</label>
        <input
          type="text"
          placeholder={`Player ${index + 1} Name`}
          value={player.name}
          onChange={(e) => onPlayerChange(index, 'name', e.target.value)}
          className="w-full p-2 bg-white border border-stone-300 rounded-md focus:ring-1 focus:ring-[#949664] focus:outline-none"
        />
      </div>
      <div className="md:col-span-1">
         <label className="text-sm font-bold text-stone-600 md:hidden">Age</label>
        <input
          type="number"
          placeholder="Age"
          value={player.age}
          onChange={(e) => onPlayerChange(index, 'age', e.target.value)}
          className="w-full p-2 bg-white border border-stone-300 rounded-md focus:ring-1 focus:ring-[#949664] focus:outline-none"
        />
      </div>
      <div className="md:col-span-3">
        <label htmlFor={aadharId} className="w-full text-sm font-medium text-stone-700 bg-stone-200 border border-dashed border-stone-400 rounded-md px-3 py-2 flex items-center justify-center cursor-pointer hover:bg-stone-300 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-stone-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          {player.aadharFileName ? <span className="text-xs truncate">{player.aadharFileName}</span> : 'Upload Aadhar Card'}
        </label>
        <input type="file" id={aadharId} className="hidden" onChange={handleFileChange} accept="image/*,.pdf" />
      </div>
      <div className="md:col-span-1 text-center">
        <button
          type="button"
          onClick={() => onRemovePlayer(index)}
          disabled={!canRemove}
          className="p-2 text-red-600 rounded-full hover:bg-red-100 disabled:text-stone-400 disabled:hover:bg-transparent transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PlayerInputRow;
