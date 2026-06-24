'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import * as React from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { useGetAddress } from '@/app/_api/_hooks/cep';
import { Checkbox } from '@/app/_components/ui/checkbox';
import { Label } from '@/app/_components/ui/label';
import { BudgetActionSchema } from '@/app/_forms/schemas';

import { Button } from '../../_components/ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '../../_components/ui/field';
import { Input } from '../../_components/ui/input';

const BudgetForm = () => {
  const form = useForm<z.infer<typeof BudgetActionSchema>>({
    resolver: zodResolver(BudgetActionSchema),
    defaultValues: {
      name: '',
      lastName: '',
      cpf: '',
      email: '',
      cep: '',
      terms: false,
    },
  });

  function onSubmit(data: z.infer<typeof BudgetActionSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: 'bottom-right',
      classNames: {
        content: 'flex flex-col gap-2',
      },
      style: {
        '--border-radius': 'calc(var(--radius)  + 4px)',
      } as React.CSSProperties,
    });
  }

  const cep = useWatch({
    control: form.control,
    name: 'cep',
  });

  const { data, isLoading } = useGetAddress(cep);

  return (
    <>
      <form id="form-budget" onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <div className="flex items-center gap-5">
            {/* Nome */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-name">Nome</FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Seu nome"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Sobrenome */}
            <Controller
              name="lastName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-last-name">Sobrenome</FieldLabel>
                  <Input
                    {...field}
                    id="form-last-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Seu sobrenome"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </div>
          {/* CPF */}
          <Controller
            name="cpf"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-cpf">CPF</FieldLabel>
                <Input
                  {...field}
                  id="form-cpf"
                  aria-invalid={fieldState.invalid}
                  placeholder="000.000.000-00"
                  autoComplete="off"
                  maxLength={14}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
          {/* Email */}
          <Controller
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="form-email">Email</FieldLabel>
                <Input
                  {...field}
                  id="form-email"
                  aria-invalid={fieldState.invalid}
                  placeholder="contato@email.com"
                  autoComplete="off"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <div className="grid grid-cols-2 gap-5">
            {/* CEP */}
            <Controller
              name="cep"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-cep">CEP</FieldLabel>
                  <Input
                    {...field}
                    id="form-cep"
                    aria-invalid={fieldState.invalid}
                    autoComplete="off"
                    disabled={isLoading}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {/* Número */}
            <Field>
              <FieldLabel htmlFor="form-cep-number">Número</FieldLabel>
              <Input
                id="form-cep-number"
                autoComplete="off"
                value={data?.unidade}
              />
            </Field>

            {/* Logradouro */}
            <Field>
              <FieldLabel htmlFor="form-cep-street">Logradouro</FieldLabel>
              <Input
                id="form-cep-street"
                autoComplete="off"
                value={data?.logradouro}
              />
            </Field>
            {/* Bairro */}
            <Field>
              <FieldLabel htmlFor="form-cep-neighborhood">Bairro</FieldLabel>
              <Input
                id="form-cep-neighborhood"
                autoComplete="off"
                value={data?.bairro}
              />
            </Field>
            {/* Cidade */}
            <Field>
              <FieldLabel htmlFor="form-cep-city">Cidade</FieldLabel>
              <Input
                id="form-cep-city"
                autoComplete="off"
                value={data?.localidade}
              />
            </Field>
            {/* Estado */}
            <Field>
              <FieldLabel htmlFor="form-cep-state">Estado</FieldLabel>
              <Input id="form-cep-state" autoComplete="off" value={data?.uf} />
            </Field>
          </div>
          {/* Termos e Condições */}
          <Controller
            name="terms"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field orientation="vertical">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="terms-checkbox"
                    name="terms-checkbox"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <Label htmlFor="terms-checkbox">
                    Li e aceito os{' '}
                    <Link
                      href="/terms"
                      className="underline underline-offset-4"
                    >
                      termos e condições.
                    </Link>
                  </Label>
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </FieldGroup>
      </form>

      <Field orientation="horizontal" className="mt-5">
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          Resetar
        </Button>
        <Button type="submit" form="form-budget">
          Solicitar orçamento
        </Button>
      </Field>
    </>
  );
};
export default BudgetForm;
