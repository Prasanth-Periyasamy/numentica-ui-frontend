'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { hamBurger, cross } from '@/utils/imageConstants';
import NavLinks from '../navLink';
import './style.css';
import { HeaderDataType } from '@/services';
import { apiUrl } from '@/config';

const Header = ({ header }: HeaderDataType) => {
  const { companyLogo = '', companyName, demobtn, headerlinks } = header || {};
  const { name } = demobtn || {};
  const { alternativeText = '', url = '' } = companyLogo || {};
  const path = usePathname();
  const cleanedPath = path.replace(/\/$/, '');
  const [animationDelay, setAnimationDelay] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // To stop logo animation for 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationDelay((prev) => !prev);
    }, 10000);

    return () => clearTimeout(timer);
  }, [animationDelay]);

  return (
    <header className="bg-[#F6F6F6]">
      <div className="pl- m-auto mx-4 flex max-w-350 items-center justify-between gap-4 pb-4 pt-4 lg:px-10 sm:px-2">
        <div className="flex w-full items-center gap-4 lg:justify-between lg:gap-1">
          <div className="relative inline-block h-9 w-66px sm:h-8 sm:w-50px">
            <Link href="/">
              <Image src={`${apiUrl}${url}`} alt={alternativeText} width={66} height={36} />
            </Link>
            <div
              className={`absolute right-0 h-8.5px w-8.5px rounded-full bg-logo sm:h-7px sm:w-7px ${
                animationDelay ? 'no-bounce' : 'bounce'
              }`}
            ></div>
          </div>
          <h3>
            <Link href="/">{companyName}</Link>
          </h3>
          <div className="relative">
            <div
              className="flex h-35px w-35px cursor-pointer items-center justify-center 4xl:hidden 3xl:hidden lg:flex sm:h-[25px] sm:w-30px"
              onClick={toggleSidebar}
            >
              <Image src={hamBurger} alt="hamBurger" width={30} height={30} className="sm:h-70% sm:w-70%" />
            </div>
            {isOpen && (
              <div
                className="fixed inset-0 z-40 bg-black bg-opacity-25 transition-opacity duration-300"
                onClick={toggleSidebar}
              ></div>
            )}
            <div
              className={`fixed inset-y-0 right-0 z-50 transform border-l  border-gray-200 bg-white transition-transform duration-500 lg:w-50% sm:w-70% ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="flex flex-wrap justify-between text-nowrap  border-b border-solid p-4">
                <div className="flex h-10 w-10 items-center gap-2 xs:h-7 xs:w-7">
                  <Image src={`${apiUrl}${url}`} alt="numentica logo" width={30} height={30} />
                  <h5 className="font-normal xs:text-[16px]">{companyName}</h5>
                </div>
                <button onClick={toggleSidebar} className="focus:outline-none">
                  <div
                    className={`h-30px w-30px transform transition-colors duration-300 ease-linear hover:text-gray-700 xs:h-5 
                  xs:w-5`}
                  >
                    <Image src={cross} width={30} height={30} alt="cross icon" />
                  </div>
                </button>
              </div>
              <ul className="flex flex-col gap-3 text-center">
                {headerlinks?.map((links) => {
                  const { id, link: name } = links;
                  return (
                    <NavLinks key={id} link={links} pathname={cleanedPath}>
                      {name}
                    </NavLinks>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-10 font-primary lg:hidden">
          {headerlinks?.map((links) => {
            const { id, link: name, slug } = links;
            return (
              <NavLinks key={id} link={links} pathname={cleanedPath}>
                {name}
              </NavLinks>
            );
          })}
          <button className="text-nowrap rounded-lg bg-black px-3 py-1 font-secondary text-base font-bold text-white">
            {name}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
