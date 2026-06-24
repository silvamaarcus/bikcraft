'use client';

import { useGetBikes } from '../_api/_hooks/bikes';
import TitleComponent from '../_components/title';
import { formatCurrency } from '../_helpers/currency';
import BikeProduct from './_components/bike-product';

const BikesPage = () => {
  const { data } = useGetBikes();

  return (
    <section>
      <div className="bg-foreground">
        <div className="app-container py-15">
          <TitleComponent
            subtitle="Escolha a melhor para você"
            title="nossas bicicletas"
            color="white"
          />
        </div>
      </div>
      <div className="py-30">
        {data?.[0].image_url ? (
          <BikeProduct
            id={data?.[0].id}
            name={data?.[0].name}
            description={data?.[0].description}
            path={data?.[0].image_url}
            price={formatCurrency({ value: data?.[0].price })}
            gps={data?.[0].gps}
            specifications={{
              material: data?.[0].specifications.material,
              topSpeed: data?.[0].specifications.top_speed,
            }}
          />
        ) : (
          <p>Bike indisponivel</p>
        )}

        {data?.[1].image_url ? (
          <BikeProduct
            id={data?.[1].id}
            name={data?.[1].name}
            description={data?.[1].description}
            path={data?.[1].image_url}
            price={formatCurrency({ value: data?.[1].price })}
            gps={data?.[1].gps}
            specifications={{
              material: data?.[1].specifications.material,
              topSpeed: data?.[1].specifications.top_speed,
            }}
            wallpaper
          />
        ) : (
          <p>Bike indisponivel</p>
        )}

        {data?.[2].image_url ? (
          <BikeProduct
            id={data?.[2].id}
            name={data?.[2].name}
            description={data?.[2].description}
            path={data?.[2].image_url}
            price={formatCurrency({ value: data?.[2].price })}
            gps={data?.[2].gps}
            specifications={{
              material: data?.[2].specifications.material,
              topSpeed: data?.[2].specifications.top_speed,
            }}
          />
        ) : (
          <p>Bike indisponivel</p>
        )}
      </div>
    </section>
  );
};

export default BikesPage;
