import type { CoinHistory, CoinHistoryApiResponse } from './types';

export const transformCoinHistory = (
  data: CoinHistoryApiResponse,
): CoinHistory => {
  return {
    price: data.market_data.current_price.usd,
    symbol: data.symbol,
    marketCap: data.market_data.current_price.usd,
  };
};
