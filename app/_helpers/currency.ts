interface CurrencyFormatterOptions {
  value: number;
}

export const formatCurrency = ({ value }: CurrencyFormatterOptions) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
