import { useQuery } from '@tanstack/react-query';
import { userService } from '../services/modules/users/user.service';

export const useCoinHistory = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => userService.getUsers,
  });
};
