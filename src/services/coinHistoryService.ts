import { coinGeckoClient } from './clients/coinGeckoClient';

export const marketService = {
  getMarkets: () =>
    coinGeckoClient.get('coins/bitcoin/history', {
      params: {
        date: '2024-01-01',
        localization: 'en',
      },
    }),
};
