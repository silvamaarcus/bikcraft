import { api } from '@/app/_lib/axios';

export const BikesService = {
  /**
   * Busca todas as bicicletas disponíveis.
   * @returns Uma promessa que resolve para um array de bicicletas.
   */
  getBikes: async () => {
    const response = await api.get('/bikes');
    return response.data;
  },
};
