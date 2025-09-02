import type { TournamentId } from './constants';

export interface Player {
  name: string;
  age: string;
  aadharFileName: string;
}

export interface FormData {
  tournamentId: TournamentId;
  teamName: string;
  captainName: string;
  captainContact: string;
  captainEmail: string;
  players: Player[];
  paymentConfirmed: boolean;
  rulesAgreed: boolean;
}

export interface TournamentDetails {
  id: TournamentId;
  name: string;
  tagline: string;
  schedule: string[];
  registrationFee: string;
  rules: string[];
}
