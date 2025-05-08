import React from 'react';
import Link from 'next/link';
import { NavLink } from '@/types';

const NavLinks: React.FC<NavLink> = ({ link, pathname, children }) => {
  console.log('fdfdf', pathname, link?.slug);
  return (
    <Link
      key={link?.id}
      href={link?.slug || ''}
      className={
        pathname === link?.slug
          ? 'border-b border-solid border-black font-primary font-bold'
          : 'duration-100 ease-linear hover:scale-105'
      }
    >
      {children}
    </Link>
  );
};

export default NavLinks;
