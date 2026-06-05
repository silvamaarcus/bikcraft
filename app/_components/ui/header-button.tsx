'use client';

import { cva } from 'class-variance-authority';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/app/_lib/utils';

const headerButtonVariants = cva(
  'font-sans text-white bg-transparent hover:text-white/80',
  {
    variants: {
      variant: {
        unselected: 'hover:underline hover:underline-offset-4',
        selected: 'underline underline-offset-4',
      },
    },
    defaultVariants: {
      variant: 'unselected',
    },
  },
);

interface HeaderButtonProps {
  path: string;
  label: string;
}

const HeaderButton = ({ path, label }: HeaderButtonProps) => {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={cn(
        headerButtonVariants({
          variant: isActive ? 'selected' : 'unselected',
        }),
      )}
    >
      {label}
    </Link>
  );
};

export default HeaderButton;
