'use client';

import { Package, ShipIcon } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';

import { useGetBikeById } from '@/app/_api/_hooks/bikes';
import TechsCard from '@/app/_components/techs-card';
import TitleComponent from '@/app/_components/title';
import { Badge } from '@/app/_components/ui/badge';
import { Button } from '@/app/_components/ui/button';
import { Card } from '@/app/_components/ui/card';
import { formatCurrency } from '@/app/_helpers/currency';

import TechnicalDetailsItem from './_components/technical-details-item';

const BikeDetailsPage = () => {
  const { id } = useParams();
  const { data } = useGetBikeById(id as string);

  return (
    <section className="bg-foreground">
      <div className="container py-15">
        <TitleComponent
          subtitle={data?.price ? formatCurrency({ value: data.price }) : ''}
          title={data?.name}
          color="white"
        />

        <div className="mt-15 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Imagens da bike */}
          <div>
            <Image
              src={data?.image_url}
              alt={data?.name}
              width={560}
              height={440}
              className="w-full rounded object-cover"
            />
            <div className="mt-5 flex w-full gap-5">
              <Image
                src={data?.image_url}
                alt={data?.name}
                width={270}
                height={212}
                className="w-1/2 rounded"
              />
              <Image
                src={data?.image_url}
                alt={data?.name}
                width={270}
                height={212}
                className="w-1/2 rounded"
              />
            </div>
          </div>
          {/* Dados técnicos */}
          <div>
            <p className="text-c5 font-mono text-2xl">
              A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe.
              Ela vem equipada com os melhores acessórios, o que garante maior
              velocidade.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <Button>Comprar agora</Button>
              <div className="flex flex-col gap-1">
                <Badge className="text-c6 flex items-center gap-2 bg-black text-xs">
                  <ShipIcon />
                  entrega em {data?.delivery_time_days} dias
                </Badge>
                <Badge className="text-c6 flex items-center gap-2 bg-black text-xs">
                  <Package />
                  {data?.stock_quantity} em estoque
                </Badge>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-xs font-medium text-white uppercase">
                Informações
              </h3>
              <Card className="mt-3 grid grid-cols-2 gap-10 bg-black p-8">
                <TechsCard
                  title="Motor elétrico"
                  description={data?.specifications.electric_motor}
                  iconPath="/svg/icon-eletrica.svg"
                />
                <TechsCard
                  title={data?.specifications.top_speed}
                  description={data?.specifications.electric_motor}
                  iconPath="/svg/icon-velocidade.svg"
                />
                <TechsCard
                  title="Rastreador"
                  description={data?.specifications.tracker}
                  iconPath="/svg/icon-rastreador.svg"
                />
                <TechsCard
                  title={data?.specifications.material}
                  description={data?.specifications.material_details}
                  iconPath="/svg/icon-carbono.svg"
                />
              </Card>
            </div>

            {/* Ficha*/}
            <div className="mt-10">
              <h3 className="text-xs font-medium text-white uppercase">
                Ficha Técnica
              </h3>
              <Card className="mt-3 flex flex-col space-y-1 bg-black p-8">
                <TechnicalDetailsItem
                  name="Peso"
                  value={data?.technical_sheet.weight}
                />
                <TechnicalDetailsItem
                  name="Altura"
                  value={data?.technical_sheet.height}
                />
                <TechnicalDetailsItem
                  name="Largura"
                  value={data?.technical_sheet.width}
                />
                <TechnicalDetailsItem
                  name="Profunidade"
                  value={data?.technical_sheet.depth}
                />
                <TechnicalDetailsItem
                  name="Marchas"
                  value={data?.technical_sheet.gears}
                />

                <TechnicalDetailsItem
                  name="Roda"
                  value={data?.technical_sheet.wheel_size}
                  border={false}
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BikeDetailsPage;
