'use client';
import Image from 'next/image';
import { useState } from 'react';

import { useGetBikes } from '@/app/_api/_hooks/bikes';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from '@/app/_components/ui/field';
import { RadioGroup, RadioGroupItem } from '@/app/_components/ui/radio-group';
import { formatCurrency } from '@/app/_helpers/currency';

import BudgetForm from './budget-form';
import LabelBudgetAction from './budget-form-label';
import LabelTechItem from './label-tech-item';

const BudgetAction = () => {
  const [optionChoice, setOptionChoice] = useState('');
  const [bikeChoice, setBikeChoice] = useState('');
  const [insuranceChoice, setInsuranceChoice] = useState('');

  const { data } = useGetBikes();

  return (
    <section className="container">
      <div className="grid h-144 max-h-144 w-290 max-w-290 grid-cols-12">
        {/* Tipo e Seguro */}
        <div className="col-span-6 bg-black p-15">
          <div>
            <LabelBudgetAction title="Bikcraft ou seguro?" />

            <RadioGroup
              value={optionChoice}
              onValueChange={setOptionChoice}
              className="mt-5 flex gap-5"
            >
              <FieldLabel
                htmlFor="bikcraft-plan"
                className={`${optionChoice === 'bikcraft' ? 'text-11 bg-white!' : 'bg-c9 text-c4'}`}
              >
                <Field orientation="horizontal">
                  <RadioGroupItem value="bikcraft" id="bikcraft-plan" />
                  <FieldContent>
                    <FieldTitle>Bikcraft</FieldTitle>
                  </FieldContent>
                </Field>
              </FieldLabel>

              <FieldLabel
                htmlFor="insurance-plan"
                className={`${optionChoice === 'insurance' ? 'text-11 bg-white!' : 'bg-c9 text-c4'}`}
              >
                <Field orientation="horizontal">
                  <RadioGroupItem value="insurance" id="insurance-plan" />
                  <FieldContent>
                    <FieldTitle>Seguro</FieldTitle>
                  </FieldContent>
                </Field>
              </FieldLabel>
            </RadioGroup>
          </div>

          <div className="mt-8">
            {optionChoice === 'bikcraft' && (
              <>
                <LabelBudgetAction title="Escolha a sua:" />

                <RadioGroup
                  value={bikeChoice}
                  onValueChange={setBikeChoice}
                  className="mt-5 flex-col space-y-5"
                >
                  <FieldLabel
                    htmlFor="bike-choice"
                    className={`${bikeChoice === 'nimbus' ? 'text-11 bg-white!' : 'bg-c9 text-c4'}`}
                  >
                    <Field orientation="vertical">
                      <FieldContent>
                        <FieldTitle className="flex w-full items-center justify-between">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem
                              value="nimbus"
                              id="bikcraft-nimbus"
                            />
                            {data?.[0].name || ''}
                          </div>
                          {bikeChoice === 'nimbus' && (
                            <span className="text-black">
                              {formatCurrency({ value: data?.[0].price || 0 })}
                            </span>
                          )}
                        </FieldTitle>

                        {bikeChoice === 'nimbus' && (
                          <FieldDescription className="flex justify-between gap-2 py-5">
                            <div className="flex flex-col space-y-2">
                              <LabelTechItem
                                iconPath="/svg/icon-eletrica.svg"
                                title="Motor elétrico"
                              />
                              <LabelTechItem
                                iconPath="/svg/icon-carbono.svg"
                                title={data?.[0].specifications.material || ''}
                              />
                              <LabelTechItem
                                iconPath="/svg/icon-velocidade.svg"
                                title={data?.[0].specifications.top_speed || ''}
                              />
                              <LabelTechItem
                                iconPath="/svg/icon-rastreador.svg"
                                title={
                                  data?.[0].specifications.integrated_gps ===
                                  true
                                    ? 'Rastreador'
                                    : 'Sem rastreio'
                                }
                              />
                            </div>
                            <Image
                              width={140}
                              height={88}
                              src={data?.[0].image_url || ''}
                              alt={data?.[0].name || ''}
                              className="rounded object-cover"
                            />
                          </FieldDescription>
                        )}
                      </FieldContent>
                    </Field>
                  </FieldLabel>

                  <FieldLabel
                    htmlFor="insurance-plan"
                    className={`${bikeChoice === 'magic' ? 'text-11 bg-white!' : 'bg-c9 text-c4'}`}
                  >
                    <Field orientation="vertical">
                      <FieldContent>
                        <FieldTitle className="flex w-full items-center justify-between">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="magic" id="bikcraft-magic" />
                            {data?.[1].name || ''}
                          </div>
                          {bikeChoice === 'magic' && (
                            <span className="text-black">
                              {formatCurrency({ value: data?.[1].price || 0 })}
                            </span>
                          )}
                        </FieldTitle>
                        {bikeChoice === 'magic' && (
                          <FieldDescription className="flex justify-between gap-2 py-5">
                            <div className="flex flex-col space-y-2">
                              <LabelTechItem
                                iconPath="/svg/icon-eletrica.svg"
                                title="Motor elétrico"
                              />
                              <LabelTechItem
                                iconPath="/svg/icon-carbono.svg"
                                title={data?.[1].specifications.material || ''}
                              />
                              <LabelTechItem
                                iconPath="/svg/icon-velocidade.svg"
                                title={data?.[1].specifications.top_speed || ''}
                              />
                              <LabelTechItem
                                iconPath="/svg/icon-rastreador.svg"
                                title={
                                  data?.[1].specifications.integrated_gps ===
                                  true
                                    ? 'Rastreador'
                                    : 'Sem rastreio'
                                }
                              />
                            </div>
                            <Image
                              width={140}
                              height={88}
                              src={data?.[1].image_url || ''}
                              alt={data?.[1].name || ''}
                              className="rounded object-cover"
                            />
                          </FieldDescription>
                        )}
                      </FieldContent>
                    </Field>
                  </FieldLabel>

                  <FieldLabel
                    htmlFor="insurance-plan"
                    className={`${bikeChoice === 'nebula' ? 'text-11 bg-white!' : 'bg-c9 text-c4'}`}
                  >
                    <Field orientation="vertical">
                      <FieldContent>
                        <FieldTitle className="flex w-full items-center justify-between">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem
                              value="nebula"
                              id="bikcraft-nebula"
                            />
                            {data?.[2].name || ''}
                          </div>
                          {bikeChoice === 'nebula' && (
                            <span className="text-black">
                              {formatCurrency({ value: data?.[2].price || 0 })}
                            </span>
                          )}
                        </FieldTitle>
                        {bikeChoice === 'nebula' && (
                          <FieldDescription className="flex justify-between gap-2 py-5">
                            <div className="flex flex-col space-y-2">
                              <LabelTechItem
                                iconPath="/svg/icon-eletrica.svg"
                                title="Motor elétrico"
                              />
                              <LabelTechItem
                                iconPath="/svg/icon-carbono.svg"
                                title={data?.[2].specifications.material || ''}
                              />
                              <LabelTechItem
                                iconPath="/svg/icon-velocidade.svg"
                                title={data?.[2].specifications.top_speed || ''}
                              />
                              <LabelTechItem
                                iconPath="/svg/icon-rastreador.svg"
                                title={
                                  data?.[2].specifications.integrated_gps ===
                                  true
                                    ? 'Rastreador'
                                    : 'Sem rastreio'
                                }
                              />
                            </div>
                            <Image
                              width={140}
                              height={88}
                              src={data?.[2].image_url || ''}
                              alt={data?.[2].name || ''}
                              className="rounded object-cover"
                            />
                          </FieldDescription>
                        )}
                      </FieldContent>
                    </Field>
                  </FieldLabel>
                </RadioGroup>
              </>
            )}

            {optionChoice === 'insurance' && (
              <>
                <LabelBudgetAction title="Escolha o plano:" />

                <RadioGroup
                  value={insuranceChoice}
                  onValueChange={setInsuranceChoice}
                  className="mt-5 flex-col space-y-5"
                >
                  <FieldLabel
                    htmlFor="silver-choice"
                    className={`${insuranceChoice === 'silver' ? 'text-11 bg-white!' : 'bg-c9 text-c4'}`}
                  >
                    <Field orientation="vertical">
                      <FieldContent>
                        <FieldTitle className="flex w-full items-center justify-between">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem
                              value="silver"
                              id="insurance-silver"
                            />
                            Prata
                          </div>

                          <span>{formatCurrency({ value: 199 })}</span>
                        </FieldTitle>
                      </FieldContent>
                    </Field>
                  </FieldLabel>

                  <FieldLabel
                    htmlFor="gold-choice"
                    className={`${insuranceChoice === 'gold' ? 'text-11 bg-white!' : 'bg-c9 text-c4'}`}
                  >
                    <Field orientation="vertical">
                      <FieldContent>
                        <FieldTitle className="flex w-full items-center justify-between">
                          <div className="flex items-center gap-2">
                            <RadioGroupItem
                              value="gold"
                              id="insurance-silver"
                            />
                            Gold
                          </div>

                          <span>{formatCurrency({ value: 299 })}</span>
                        </FieldTitle>
                      </FieldContent>
                    </Field>
                  </FieldLabel>
                </RadioGroup>
              </>
            )}
          </div>
        </div>

        {/* Formulário */}
        <div className="col-span-6 bg-white p-15">
          <BudgetForm />
        </div>
      </div>
    </section>
  );
};

export default BudgetAction;
