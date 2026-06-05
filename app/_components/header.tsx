import Image from 'next/image';
import Link from 'next/link';

import HeaderMenuMobile from './header-menu-mobile';
import HeaderButton from './ui/header-button';

const HeaderComponent = () => {
  return (
    <header className="bg-foreground h-24 w-full">
      {/* DESKTOP */}
      <div className="container hidden items-center justify-between sm:flex">
        <Link href="/">
          <Image
            src="/svg/bikcraft.svg"
            width={136}
            height={32}
            alt="Bikcraft"
          />
        </Link>

        <nav className="flex items-center gap-6">
          <HeaderButton path="/bikes" label="Bicicletas" />
          <HeaderButton path="/insurance" label="Seguros" />
          <HeaderButton path="/contact" label="Contato" />
        </nav>
      </div>
      {/* MOBILE */}
      <div className="container flex items-center justify-between text-white sm:hidden">
        <Link href="/">
          <Image
            src="/svg/bikcraft.svg"
            width={136}
            height={32}
            alt="Bikcraft"
          />
        </Link>
        <HeaderMenuMobile />
      </div>
    </header>
  );
};

export default HeaderComponent;
