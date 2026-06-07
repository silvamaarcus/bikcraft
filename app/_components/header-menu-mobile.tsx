'use client';

import { MenuIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const HeaderMenuMobile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <MenuIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-screen" align="start" sideOffset={8}>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Páginas | Bikcraft</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link href="/bikes">Bicicletas</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/insurance">Seguros</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">Contato</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenuMobile;
