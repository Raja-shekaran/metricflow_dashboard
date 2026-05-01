import { coinGeckoClient } from './api/clients/coinGeckoClient';

export const coinHistoryService = {
  getCoinHistory: () =>
    coinGeckoClient.get('/coins/bitcoin/history', {
      params: {
        date: '2026-01-01',
        localization: 'en',
      },
    }),
};
