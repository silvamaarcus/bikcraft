import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/app/_components/ui/button';

const InsuranceSell = () => {
  return (
    <section className="bg-foreground">
      <div className="container py-15">
        <div className="grid grid-cols-2">
          <div className="relative">
            <div className="absolute top-2/12 left-0 my-30 h-189 w-170 -translate-y-1/2">
              <Image
                width={680}
                height={756}
                src="/png/img-seguros.png"
                alt="Bikcraft"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-hero max-w-lg font-sans font-semibold text-white">
              Pedale mais tranquilo com o nosso{' '}
              <span className="text-p1">seguro.</span>
            </h1>
            <p className="text-c5 mt-8 mb-5 font-mono text-2xl">
              Inscreva-se em um dos planos do nosso seguro Bikcraft e aproveite
              diversos benefícios.
            </p>
            <Link href="/insurance">
              <Button>Conhecça mais</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceSell;
