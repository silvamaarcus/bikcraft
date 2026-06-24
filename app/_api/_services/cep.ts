import { viaCep } from '@/app/_lib/axios';
import { ZipCode } from '@/app/_types/cep';

export const ZipCodeServices = {
  /**
   * Busca
   * @param cep - CEP a ser consultado, com ou sem formatação.
   * @returns Uma Promise contendo os dados do endereço encontrado.
   * @example const endereco = await ZipCodeServices.address('30140071');
   * console.log(endereco.logradouro);
   *
   */
  address: async (cep: string): Promise<ZipCode> => {
    const cleanCep = cep.replace(/\D/g, '');

    const response = await viaCep.get<ZipCode>(`${cleanCep}/json`);

    return response.data;
  },
};
