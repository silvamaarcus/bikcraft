'use client';

import { useQuery } from '@tanstack/react-query';

import { BikesService } from '../_services/bikes';

export const useGetBikes = () => {
  return useQuery({
    queryKey: ['bikes'],
    queryFn: async () => BikesService.getBikes(),
  });
};
