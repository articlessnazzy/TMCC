import type { TournamentDetails } from './types';

export type TournamentId = 'lpl' | 'sat';

export const TOURNAMENTS: Record<TournamentId, TournamentDetails> = {
  lpl: {
    id: 'lpl',
    name: 'Legends Premier League',
    tagline: 'Tennis Ball - Tennex',
    schedule: [
      'Every Friday 7am - 9:30am',
      'From 3rd October 2025 - Friday',
      'TMCC wicket',
    ],
    registrationFee: '3000 /- per team',
    rules: [
      'Age criteria: 40+ years. A maximum of 2 players can be between 35 - 40 years.',
      'Maximum 6 teams.',
      '2 matches per team, everyday.',
      'Maximum 13 players per team: 12 on field, 1 mandatory 1st slip.',
      'Openers cannot bowl in the same match.',
      'A new pair of openers is required for every match.',
      'All players must have to submit their Aadhar card via this Google Form.',
      'If players are not available, then NO substitutes will be allowed.',
      'In case of non-availability of ground, matches will be postponed to a mutually decided day or will be played last after league matches.',
      'Prize: To be announced.',
      'More details to follow.'
    ],
  },
  sat: {
    id: 'sat',
    name: 'Saturday Auction Tournament',
    tagline: 'Tennis Ball - Tennex Heavy',
    schedule: [
        'Every Saturday morning 7am - 9:30am',
        'From 4th October 2025 - Saturday',
        'TMCC wicket',
        'Semis and Finals will be a full day event on a Saturday'
    ],
    registrationFee: '5000 /- per owner',
    rules: [
      'Maximum 6 teams.',
      'Owners to register with TMCC of their interest.',
      'Owner can retain 3 players of his group.',
      '3 matches per team.',
      '13 players per team.',
      'First 108 players to register will be considered.',
      'Prizes - To Be Announced.',
      'More Details to Follow.'
    ],
  },
};
