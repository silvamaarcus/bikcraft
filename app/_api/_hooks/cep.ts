import { useQuery } from '@tanstack/react-query';

import { ZipCode } from '@/app/_types/cep';

import { ZipCodeServices } from '../_services/cep';

export const useGetAddress = (input: string) => {
  return useQuery<ZipCode>({
    queryKey: ['cep', input],
    queryFn: async () => ZipCodeServices.address(input),
    enabled: input.replace(/\D/g, '').length === 8, // Só dispara requisição quando houver 8 digitos
  });
};
