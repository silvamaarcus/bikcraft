import Link from 'next/link';
import { useParams } from 'next/navigation';

import { useGetBikes } from '@/app/_api/_hooks/bikes';
import TitleComponent from '@/app/_components/title';
import { formatCurrency } from '@/app/_helpers/currency';

import ChoiceBikeCard from './choice-bike-card';

const ChoiceBike = () => {
  const { data } = useGetBikes();
  const { id } = useParams();

  if (!id || !data) return null;

  const alternateBikes = data?.filter((bike) => bike.id !== id);

  return (
    <section>
      <div className="container pt-23 pb-30">
        <TitleComponent title="escolha a sua" />

        <div className="mt-10 grid grid-cols-2 gap-10">
          {alternateBikes.map((bike) => (
            <Link key={bike.id} href={`/bikes/${bike.id}`}>
              <ChoiceBikeCard
                url={bike.image_url}
                name={bike.name}
                price={formatCurrency({ value: bike.price })}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChoiceBike;
