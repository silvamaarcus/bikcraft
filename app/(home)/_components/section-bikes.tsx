'use client';

import { useGetBikes } from '@/app/_api/_hooks/bikes';
import TitleComponent from '@/app/_components/title';
import { formatCurrency } from '@/app/_helpers/currency';

import SectionBikesCard from './section-bikes-card';

const SectionBikes = () => {
  const { data } = useGetBikes();

  return (
    <section className="my-50">
      <div className="container">
        <TitleComponent title="escolha a sua" color="black" />
      </div>
      <div className="mx-14 mt-10 flex items-center gap-8">
        {data?.[0].image_url ? (
          <SectionBikesCard
            url={data?.[0].image_url}
            name={data?.[0].name}
            price={formatCurrency({ value: data?.[0].price })}
          />
        ) : (
          <p>Imagem indisponivel</p>
        )}
        {data?.[1].image_url ? (
          <SectionBikesCard
            url={data?.[1].image_url}
            name={data?.[1].name}
            price={formatCurrency({ value: data?.[1].price })}
          />
        ) : (
          <p>Imagem indisponivel</p>
        )}
        {data?.[2].image_url ? (
          <SectionBikesCard
            url={data?.[2].image_url}
            name={data?.[2].name}
            price={formatCurrency({ value: data?.[2].price })}
          />
        ) : (
          <p>Imagem indisponivel</p>
        )}
      </div>
    </section>
  );
};

export default SectionBikes;
