import Image from 'next/image';
import Link from 'next/link';

import HeaderMenuMobile from './header-menu-mobile';
import HeaderButton from './ui/header-button';

const HeaderComponent = () => {
  return (
    <header className="h-24 w-full bg-black">
      {/* DESKTOP */}
      <div className="app-container hidden items-center justify-between sm:flex">
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
      <div className="app-container flex items-center justify-between text-white sm:hidden">
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
