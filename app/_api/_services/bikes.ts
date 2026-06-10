import { api } from '@/app/_lib/axios';
import { Bike } from '@/app/_types/bike';

export const BikesService = {
  /**
   * Busca todas as bicicletas disponíveis.
   * @returns Retorna uma lista de bicicletas com suas informações, incluindo nome, preço e URL da imagem.
   */
  getBikes: async (): Promise<Bike[]> => {
    const response = await api.get<Bike[]>('/bikes');
    return response.data;
  },

  /**
   * Busca dados de um bicicleta pelo ID
   * @returns Retorna os dados da bicicleta coletado pelo ID com suas informações, incluindo nome, preço e URL da imagem.
   */
  getBike: async (id: string): Promise<Bike> => {
    const response = await api.get<Bike>(`/bikes/${id}`);
    return response.data;
  },
};
