import { useQuery } from '@tanstack/react-query';
import { coinHistoryService } from '../services/modules/crypto/coin.history.service';

export const useCoinHistory = () => {
  return useQuery({
    queryKey: ['coin-history'],
    queryFn: () => coinHistoryService.getCoinHistory(),
  });
};
