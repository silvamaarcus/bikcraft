'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useGetBikeById } from '@/app/_api/_hooks/bikes';
import TitleComponent from '@/app/_components/title';
import { formatCurrency } from '@/app/_helpers/currency';

import ChoiceBike from './_components/choice-bike';
import InsuranceSell from './_components/insurance-sell';
import TechnicalDetails from './_components/technical-details';

const BikeDetailsPage = () => {
  const { id } = useParams();
  const { data } = useGetBikeById(id as string);

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <section className="bg-foreground">
        <div className="app-container py-15">
          <TitleComponent
            subtitle={data.price ? formatCurrency({ value: data.price }) : ''}
            title={data.name}
            color="white"
          />

          <div className="mt-15 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {/* Imagens da bike */}
            <div>
              <Image
                src={data.image_url}
                alt={data.name}
                width={560}
                height={440}
                className="w-full rounded object-cover"
              />
              <div className="mt-5 flex w-full gap-5">
                <Image
                  src={data.image_url}
                  alt={data.name}
                  width={270}
                  height={212}
                  className="w-1/2 rounded"
                />
                <Image
                  src={data.image_url}
                  alt={data.name}
                  width={270}
                  height={212}
                  className="w-1/2 rounded"
                />
              </div>
            </div>
            {/* Dados técnicos */}
            <TechnicalDetails />
          </div>
        </div>
      </section>
      <ChoiceBike />
      <InsuranceSell />
    </>
  );
};

export default BikeDetailsPage;
