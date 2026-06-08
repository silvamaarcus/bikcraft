import SectionInsuranceCard from './section-insurance-card';
import SectionInsuranceCardItem from './section-insurance-card-item';
import TitleComponent from './title';

const SectionInsurance = () => {
  return (
    <section className="bg-foreground">
      <div className="container pt-15 pb-30">
        <TitleComponent title="seguros" color="white" />
        <div className="my-15 flex items-center justify-center gap-8">
          <SectionInsuranceCard
            price="199"
            type="silver"
            description={
              <ul className="list-none space-y-5 text-lg text-white">
                <SectionInsuranceCardItem text="Duas trocas por ano" />
                <SectionInsuranceCardItem text="Assistência técnica" />
                <SectionInsuranceCardItem text="Assistência técnica" />
                <SectionInsuranceCardItem text="Cobertura estadual" />
              </ul>
            }
          />
          <SectionInsuranceCard
            price="299"
            type="gold"
            description={
              <ul className="list-none space-y-5 text-lg text-white">
                <SectionInsuranceCardItem text="Cinco trocas por ano" />
                <SectionInsuranceCardItem text="Assistência especial" />
                <SectionInsuranceCardItem text="Suporte 24h" />
                <SectionInsuranceCardItem text="Cobertura nacional" />
                <SectionInsuranceCardItem text="Desconto em parceiros" />
                <SectionInsuranceCardItem text="Acesso ao Clube Bikcraft" />
              </ul>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default SectionInsurance;
