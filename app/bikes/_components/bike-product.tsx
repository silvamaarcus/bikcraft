import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/app/_components/ui/button';

interface BikeProductProps {
  wallpaper?: boolean;
  path: string;
  name: string;
  price: string;
  description: string;
  specifications: {
    material: string;
    topSpeed: string;
  };
  gps: boolean;
  id: string;
}

const BikeProduct = ({
  wallpaper = false,
  path,
  name,
  price,
  description,
  specifications,
  gps,
  id,
}: BikeProductProps) => {
  return (
    <div className="relative min-h-115">
      <div className="app-container grid grid-cols-2 gap-8">
        <div className="relative flex items-center justify-center">
          <Image
            width={560}
            height={340}
            src={path}
            alt={name}
            className="rounded"
          />
          <span className="absolute top-4 right-21.5 rounded bg-black px-4 py-2 pl-2 text-lg text-white">
            R$ {price}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="bg-p1 mb-2 h-2 w-3"></span>
          <h2
            className={`text-4xl font-semibold ${wallpaper ? 'text-white' : 'text-black'}`}
          >
            {name}
          </h2>
          <p
            className={`${wallpaper ? 'text-c5' : 'text-c8'} mt-5 mb-8 max-w-lg text-lg`}
          >
            {description}
          </p>
          <ul
            className={`flex list-none flex-col space-y-4 ${wallpaper ? 'text-c5' : 'text-c8'}`}
          >
            <li className="flex items-center gap-2">
              <Image
                width={24}
                height={24}
                src="/svg/icon-eletrica.svg"
                alt={name}
              />
              Motor Elétrico
            </li>
            <li className="flex items-center gap-2">
              <Image
                width={24}
                height={24}
                src="/svg/icon-carbono.svg"
                alt={name}
              />
              {specifications.material}
            </li>
            <li className="flex items-center gap-2">
              <Image
                width={24}
                height={24}
                src="/svg/icon-velocidade.svg"
                alt={name}
              />
              {specifications.topSpeed}
            </li>
            <li className="relative flex items-center gap-2">
              <Image
                width={24}
                height={24}
                src="/svg/icon-rastreador.svg"
                alt={name}
              />
              {gps ? 'Rastreador' : 'Sem rastreador'}

              <div className="absolute right-20">
                <Link href={`/bikes/${id}`}>
                  <Button size="lg" className="uppercase">
                    Mais sobre
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {wallpaper ? (
        <div className="bg-foreground absolute top-50 right-0 -z-10 h-full w-295 -translate-y-1/2"></div>
      ) : null}
    </div>
  );
};

export default BikeProduct;
