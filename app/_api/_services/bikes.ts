import { api } from '@/app/_lib/axios';

export const BikesService = {
  /**
   * Busca todas as bicicletas disponíveis.
   * @returns Retorna uma lista de bicicletas com suas informações, incluindo nome, preço e URL da imagem.
   */
  getBikes: async () => {
    const response = await api.get('/bikes');
    return response.data;
  },
};
