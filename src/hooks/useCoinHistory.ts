import { useQuery } from '@tanstack/react-query';
import { coinHistoryService } from '../services/modules/crypto/coin.history.service';
import { transformCoinHistory } from '../services/modules/crypto/crypto.transform';

export const useCoinHistory = () => {
  return useQuery({
    queryKey: ['coin-history'],
    queryFn: () => coinHistoryService.getCoinHistory(),
    select: transformCoinHistory,
  });
};
