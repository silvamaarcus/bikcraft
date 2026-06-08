import TitleComponent from '../_components/title';
import BikeProduct from './_components/bike-product';

const BikesPage = () => {
  return (
    <section>
      <div className="bg-foreground">
        <div className="container py-15">
          <TitleComponent
            subtitle="Escolha a melhor para você"
            title="nossas bicicletas"
            color="white"
          />
        </div>
      </div>
      <div className="py-30">
        <BikeProduct
          name="Nimbus Stark"
          description="A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade."
          price={2999}
          path="/assets/nimbus-stark.png"
          gps={true}
          specifications={{
            material: 'Fibra de carbono',
            topSpeed: '40 km/h',
          }}
        />

        <BikeProduct
          wallpaper
          name="Nimbus Stark"
          description="A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade."
          price={2999}
          path="/assets/nimbus-stark.png"
          gps={true}
          specifications={{
            material: 'Fibra de carbono',
            topSpeed: '40 km/h',
          }}
        />

        <BikeProduct
          name="Nimbus Stark"
          description="A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade."
          price={2999}
          path="/assets/nimbus-stark.png"
          gps={true}
          specifications={{
            material: 'Fibra de carbono',
            topSpeed: '40 km/h',
          }}
        />
      </div>
    </section>
  );
};

export default BikesPage;
