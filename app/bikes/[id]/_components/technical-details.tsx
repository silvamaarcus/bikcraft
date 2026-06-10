import { Package, ShipIcon } from 'lucide-react';
import { useParams } from 'next/navigation';
import React from 'react';

import { useGetBikeById } from '@/app/_api/_hooks/bikes';
import TechsCard from '@/app/_components/techs-card';
import { Badge } from '@/app/_components/ui/badge';
import { Button } from '@/app/_components/ui/button';
import { Card } from '@/app/_components/ui/card';

import TechnicalDetailsItem from './technical-details-item';

const TechnicalDetails = () => {
  const { id } = useParams();
  const { data } = useGetBikeById(id as string);
  return (
    <div>
      <p className="text-c5 font-mono text-2xl">{data?.description}</p>
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
            description={data?.specifications.electric_motor || ''}
            iconPath="/svg/icon-eletrica.svg"
          />
          <TechsCard
            title={data?.specifications.top_speed || ''}
            description={data?.specifications.electric_motor || ''}
            iconPath="/svg/icon-velocidade.svg"
          />
          <TechsCard
            title="Rastreador"
            description={data?.specifications.tracker || ''}
            iconPath="/svg/icon-rastreador.svg"
          />
          <TechsCard
            title={data?.specifications.material || ''}
            description={data?.specifications.material_details || ''}
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
            value={data?.technical_sheet.weight || ''}
          />
          <TechnicalDetailsItem
            name="Altura"
            value={data?.technical_sheet.height || ''}
          />
          <TechnicalDetailsItem
            name="Largura"
            value={data?.technical_sheet.width || ''}
          />
          <TechnicalDetailsItem
            name="Profunidade"
            value={data?.technical_sheet.depth || ''}
          />
          <TechnicalDetailsItem
            name="Marchas"
            value={data?.technical_sheet.gears || 0}
          />

          <TechnicalDetailsItem
            name="Roda"
            value={data?.technical_sheet.wheel_size || 0}
            border={false}
          />
        </Card>
      </div>
    </div>
  );
};

export default TechnicalDetails;
