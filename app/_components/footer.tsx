import Image from 'next/image';
import Link from 'next/link';

const FooterComponent = () => {
  return (
    <footer className="bg-foreground h-full w-full">
      <div className="container mt-8 grid grid-cols-1 gap-8 sm:grid-cols-12">
        <div className="col-span-1 sm:col-span-3">
          <Link href="/">
            <Image
              src="/svg/bikcraft.svg"
              width={136}
              height={32}
              alt="Bikcraft"
            />
          </Link>
        </div>
        <div className="col-span-1 sm:col-span-5">
          <h1 className="font-mono text-2xl text-white uppercase">Contato</h1>
          <div className="text-c5 border-c5/10 mt-8 flex w-full flex-col gap-2 border-b pb-8 text-sm">
            <p>+55 21 9999-9999</p>
            <p>contato@bikcraft.com</p>
          </div>
          <div className="text-c5 border-c5/10 mt-8 flex w-full flex-col gap-2 border-b pb-8 text-sm">
            <p>Rua Ali Perto, 42 - Botafogo</p>
            <p>Rio de Janeiro - RJ</p>
          </div>
          <div className="mt-8 flex items-center gap-8">
            <Link href="https://www.instagram.com/bikcraft" target="_blank">
              <Image
                src="/svg/icon-instagram.svg"
                width={32}
                height={32}
                alt="Instagram"
              />
            </Link>
            <Link href="https://www.facebook.com/bikcraft" target="_blank">
              <Image
                src="/svg/icon-facebook.svg"
                width={32}
                height={32}
                alt="Facebook"
              />
            </Link>
            <Link href="https://www.youtube.com/bikcraft" target="_blank">
              <Image
                src="/svg/icon-youtube.svg"
                width={32}
                height={32}
                alt="YouTube"
              />
            </Link>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-4">
          <h1 className="font-mono text-2xl text-white uppercase">
            Informações
          </h1>
          <div className="text-c5 mt-8 flex w-full flex-col gap-4 pb-8 text-sm">
            <p>
              <Link href="/bikes">Bicicletas</Link>
            </p>
            <p>
              <Link href="/insurance">Seguros</Link>
            </p>
            <p>
              <Link href="/contact">Contato</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="text-c5 py-4 text-sm">
          © 2026 Bikcraft. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
