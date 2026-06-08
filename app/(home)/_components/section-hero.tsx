import Image from 'next/image';
import Link from 'next/link';

import TitleComponent from '@/app/_components/title';
import { Button } from '@/app/_components/ui/button';

const SectionHero = () => {
  return (
    <section className="mb-50 h-170 min-h-170 w-full bg-black">
      <div className="container grid h-full grid-cols-1 items-center justify-center gap-8 sm:grid-cols-12">
        <div className="col-span-6">
          <div className="max-w-2xl px-4">
            <TitleComponent
              title="Bicicletas feitas sob medida"
              color="white"
            />
            <p className="text-c5 mt-8 text-2xl">
              Bicicletas elétricas de alta precisão e qualidade, feitas sob
              medida para o cliente. Explore o mundo na sua velocidade com a
              Bikcraft.
            </p>
            <Link href="/bikes">
              <Button className="mt-5">Selecione a sua</Button>
            </Link>
          </div>
        </div>

        <div className="col-span-6 hidden sm:block">
          <div className="h-200 w-160">
            <Image
              width={640}
              height={800}
              src="/png/img-hero.png"
              alt="Bikcraft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
