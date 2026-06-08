import Image from 'next/image';

import TitleComponent from '@/app/_components/title';

import SectionTechsCard from './section-techs-card';

const SectionTechs = () => {
  return (
    <section className="bg-foreground relative h-240 min-h-240 w-full">
      <div className="container grid h-full grid-cols-1 items-center justify-center gap-8 sm:grid-cols-12">
        <div className="col-span-6">
          <div className="max-w-2xl px-4">
            <p className="text-c5 mb-5 text-2xl uppercase">
              Tecnologia Avançada
            </p>
            <TitleComponent
              title="você escolhe as suas cores e componentes"
              color="white"
            />
            <p className="text-c5 mt-8 text-2xl">
              Cada Bikcraft é única e possui a sua identidade. As medidas serão
              exatas para o seu corpo e altura, garantindo maior conforto e
              ergonomia na sua pedalada. Você pode também personalizar
              completamente as suas cores.
            </p>
            <h3 className="text-p1 decoration-p1/50 mt-5 font-semibold uppercase underline underline-offset-4">
              Escolha um modelo
            </h3>
            <div className="mt-10 flex items-center gap-8">
              <SectionTechsCard
                iconPath="/svg/icon-eletrica.svg"
                title="Motor Elétrico"
                description="Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar."
              />
              <SectionTechsCard
                iconPath="/svg/icon-rastreador.svg"
                title="Rastreador"
                description="Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego."
              />
            </div>
          </div>
        </div>
        <div className="col-span-6 hidden sm:block"></div>
      </div>

      <div className="absolute -right-60 bottom-60 h-200 w-260">
        <Image
          width={700}
          height={1120}
          src="/png/img-diferencial.png"
          alt="Bikcraft"
        />
      </div>
    </section>
  );
};

export default SectionTechs;
