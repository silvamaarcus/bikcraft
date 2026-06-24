/**
 * @description Função para aplicar a máscara de CPF em uma string.
 * @param {string} value - O valor de entrada que será formatado como CPF.
 * @returns {string} Retorna o valor formatado como CPF no formato "000.000.000-00".
 */
export const maskCPF = (value: string) => {
  const cleanedValue = value.replace(/\D/g, ''); // Remove os caracteres não numéricos
  const match = cleanedValue.match(/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})$/); // Expressão regular para capturar os grupos de dígitos

  if (!match) {
    return '';
  }

  let maskedValue = '';
  if (match[1]) {
    maskedValue += match[1];
  }
  if (match[2]) {
    maskedValue += '.' + match[2];
  }
  if (match[3]) {
    maskedValue += '.' + match[3];
  }
  if (match[4]) {
    maskedValue += '-' + match[4];
  }

  return maskedValue;
};
