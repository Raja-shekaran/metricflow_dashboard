import { useQuery } from '@tanstack/react-query';
import { userService } from '../services/modules/users/user.service';
import { transformUsers } from '../services/modules/users/user.transform';

export const useUsers = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => userService.getUsers(),
    select: transformUsers,
  });
};
