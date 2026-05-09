export type CoinHistory = {
  price: number;
  symbol: string;
  marketCap: number;
};

export type CoinHistoryApiResponse = {
  symbol: string;
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
  };
};
