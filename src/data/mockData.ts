import { TokenData } from '../types';

export const mockTokenData: TokenData[] = [
  {
    id: '1',
    name: 'AEVO',
    price: 0.443,
    fundingRate: {
      hourly: 0.01,
      apr: 87.6
    },
    type: 'spot + perp'
  },
  {
    id: '2',
    name: 'WIF',
    price: 2.51,
    fundingRate: {
      hourly: 0.015,
      apr: 131.4
    },
    type: 'spot + perp'
  },
  {
    id: '3',
    name: 'HYPE',
    price: 24.90,
    fundingRate: {
      hourly: 0.008,
      apr: 70.08
    },
    type: 'spot + perp'
  }
];
