import { viaCep } from '@/app/_lib/axios';
import { ZipCode } from '@/app/_types/cep';

export const ZipCodeServices = {
  /**
   * Busca o endereço correspondente a um determinado CEP utilizando a API do ViaCEP.
   * @param {string} cep - O CEP a ser pesquisado.
   * @returns {Promise<ZipCode>} Uma Promise que resolve para um objeto ZipCode contendo as informações do endereço.
   * @example const endereco = await ZipCodeServices.address('30140071');
   * console.log(endereco.logradouro);   *
   */
  address: async (cep: string): Promise<ZipCode> => {
    const cleanCep = cep.replace(/\D/g, '');

    const response = await viaCep.get<ZipCode>(`${cleanCep}/json`);

    return response.data;
  },
};
