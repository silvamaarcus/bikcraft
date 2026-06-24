import { zodValidator } from 'cpf-cnpj-validator/zod';
import * as z from 'zod';

const phoneRegex =
  /^(?:\+?55\s?)?(?:\(?([1-9][1-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\s?-?\s?(\d{4}))$/;

const { cpf: zCpf } = zodValidator(z);

export const ContactActionSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'O nome deve conter pelo menos 2 caracteres' }),
  phone: z
    .string()
    .min(1, { message: 'O número não pode conter menos que 6 digítos' })
    .regex(phoneRegex, 'Formato de telefone inválido. Use (DD) 9XXXX-XXXX'),
  email: z
    .email({ message: 'O e-mail deve ser válido' })
    .trim()
    .min(1, { message: 'O e-mail é obrigatório' }),
  description: z
    .string()
    .max(300, 'A descrição está muito longa. Máx: 300 caracteres'),
});

export const BudgetActionSchema = ContactActionSchema.extend({
  lastName: z
    .string()
    .trim()
    .min(2, { message: 'O sobrenome deve conter pelo menos 2 caracteres' }),
  cpf: zCpf(),
  cep: z
    .string()
    .transform((val) => val.replace(/\D/g, ''))
    .refine((val) => val.length === 8, {
      message: 'O CEP deve conter exatamente 8 números.',
    }),
  terms: z.boolean().refine((value) => value === true, {
    message: 'Você deve aceitar os termos de uso e políticas de privacidade',
  }),
});
