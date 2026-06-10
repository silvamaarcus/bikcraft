import { useGetBikes } from '@/app/_api/_hooks/bikes';
import TitleComponent from '@/app/_components/title';
import { formatCurrency } from '@/app/_helpers/currency';

import OtherBike from './other-bike';

const ChoiceBike = () => {
  const { data } = useGetBikes();

  return (
    <section>
      <div className="container pt-23 pb-30">
        <TitleComponent title="escolha a sua" />

        <div className="mt-10 grid grid-cols-2 gap-10">
          <OtherBike
            url={data?.[1].image_url}
            name={data?.[1].name}
            price={
              data?.[1].price ? formatCurrency({ value: data?.[1].price }) : ''
            }
          />

          <OtherBike
            url={data?.[2].image_url}
            name={data?.[2].name}
            price={
              data?.[2].price ? formatCurrency({ value: data?.[2].price }) : ''
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ChoiceBike;
