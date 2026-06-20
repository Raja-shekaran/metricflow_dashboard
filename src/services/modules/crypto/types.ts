export type CoinHistory = {
  name: string;
  logo: string;
  price: number;
  marketCap: number;
};

export type CoinHistoryApiResponse = {
  name: string;
  image: {
    thumb: string;
    small: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
  };
};
