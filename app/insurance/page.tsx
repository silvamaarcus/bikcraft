import SectionInsuranceCard from '../_components/section-insurance-card';
import SectionInsuranceCardItem from '../_components/section-insurance-card-item';
import TechsCard from '../_components/techs-card';
import TitleComponent from '../_components/title';
import FaqAccordion from './_components/faq-accordion';

const InsurancePage = () => {
  return (
    <section>
      <div className="bg-foreground">
        <div className="app-container py-15">
          <TitleComponent
            subtitle="escolha o seguro"
            title="você seguro"
            color="white"
          />
          <div className="mt-15 flex items-center justify-center gap-8">
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
      </div>
      <div className="bg-black">
        <div className="app-container py-15">
          <TitleComponent title="nossas vantagens" color="white" />
          <div className="my-23 grid grid-cols-3 gap-10">
            <TechsCard
              iconPath="/svg/icon-eletrica.svg"
              title="Reparo Elétrico"
              description="Garantimos o reparo completo do seu motor em caso de falhas. Sabemos que falhas são raras, mas estamos aqui para caso ocorra."
            />
            <TechsCard
              iconPath="/svg/icon-carbono.svg"
              title="Maaterial"
              description="Nossos quadros são feitos para durar para sempre. Mas caso algo ocorra, ficamos felizes em reparar."
            />
            <TechsCard
              iconPath="/svg/icon-sustentavel.svg"
              title="Sustentável"
              description="Trabalhamos com a filosofia de desperdício zero. Qualquer parte defeituosa é reciclada e reutilizada em outro projeto."
            />
            <TechsCard
              iconPath="/svg/icon-rastreador.svg"
              title="Recuperação"
              description="A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais."
            />
            <TechsCard
              iconPath="/svg/icon-seguro.svg"
              title="Segurança"
              description="A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais."
            />
            <TechsCard
              iconPath="/svg/icon-velocidade.svg"
              title="Rapidez"
              description="A sua Bikcraft ficará pronta para uso no mesmo dia, caso você traga ela para ser reparada em uma das filiais."
            />
          </div>
        </div>
      </div>
      <div>
        <div className="app-container py-15">
          <TitleComponent title="perguntas frequentes" color="black" />

          <div className="mt-22">
            <FaqAccordion />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsurancePage;
