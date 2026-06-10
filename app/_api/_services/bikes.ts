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

  /**
   * Busca dados de um bicicleta pelo ID
   * @returns Retorna os dados da bicicleta coletado pelo ID com suas informações, incluindo nome, preço e URL da imagem.
   */
  getBike: async (id: string) => {
    const response = await api.get(`/bikes/${id}`);
    return response.data;
  },
};
