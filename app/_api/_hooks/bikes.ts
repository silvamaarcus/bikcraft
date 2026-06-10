'use client';

import { useQuery } from '@tanstack/react-query';

import { Bike } from '@/app/_types/bike';

import { BikesService } from '../_services/bikes';

export const useGetBikes = () => {
  return useQuery({
    queryKey: ['bikes'],
    queryFn: async () => BikesService.getBikes(),
  });
};

export const useGetBikeById = (id: string) => {
  return useQuery<Bike>({
    queryKey: ['bikes', id],
    queryFn: async () => BikesService.getBike(id),
    enabled: !!id,
  });
};
