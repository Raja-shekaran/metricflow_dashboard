import type { CoinHistory, CoinHistoryApiResponse } from './types';

export const transformCoinHistory = (
  data: CoinHistoryApiResponse,
): CoinHistory => ({
  price: data.market_data.current_price.usd,
  marketCap: data.market_data.market_cap.usd,
  //Hardcoded since large image is not available for demo api
  logo: 'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
  name: data.name,
});
