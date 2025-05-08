'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { numenticaLogo } from '@/utils/imageConstants';
import { SocialMediaData } from '@/types';
import { socialMediaIcons } from '@/data/socialMediaIcons';
import { FooterDataType } from '@/services';
import RichText from '../richText';
import { apiUrl } from '@/config';
import { TextField } from '@mui/material';

// Define the staggered animation
const staggerContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 2,
      delayChildren: 2,
    },
  },
};

// Define the bounce animation
const bounce = {
  hidden: { y: 0 },
  show: {
    y: [0, -10, 0],
    transition: { duration: 0.5 },
  },
};

const Footer = ({ footer }: FooterDataType) => {
  const { companyLogo, companyName, contactus, copyRight, footerlinks, newsletter } = footer || {};
  const { url = '', alternativeText = '' } = companyLogo || {};
  const { description, id, title } = contactus || {};
  const { news, subscribe } = newsletter || {};
  const [activeIcon, setActiveIcon] = useState(0);
  const [hover, setHover] = useState({ isHovered: false, id: 0 });
  const controls = useAnimation();
  const socialMediaIconsLength = socialMediaIcons.length;

  const handleIconHover = (id: number, value: boolean) => {
    return setHover({ ...hover, isHovered: value, id: id });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prevIcon) => (prevIcon + 1) % socialMediaIconsLength);
    }, 2000);
    return () => clearInterval(interval);
  }, [socialMediaIconsLength]);

  useEffect(() => {
    controls.start('show');
  }, [activeIcon, controls]);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* <div className="mx-8 mb-2.5 mt-20 flex items-center justify-between lg:mx-4 md:flex-col md:justify-center md:gap-8 sm:mt-14">
        <div className="flex cursor-pointer items-center gap-4" onClick={handleScrollToTop}>
          <div className="h-8 w-14">
            <Image src={numenticaLogo} alt="numentica logo" />
          </div>
          <h3 className="text-[24px]">
            numentica <strong className="font-primary">ui</strong>
          </h3>
        </div>
        <motion.div
          className="flex items-center gap-5 lg:gap-2.5"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {socialMediaIcons?.map((icon: SocialMediaData, index) => (
            <motion.div
              className={`h-8 w-8 transform cursor-pointer transition-transform ease-in-out hover:scale-125
              `}
              key={icon?.id}
              onMouseEnter={() => handleIconHover(icon?.id, true)}
              onMouseLeave={() => handleIconHover(icon?.id, false)}
              animate={activeIcon === index && !hover.isHovered ? controls : 'hidden'}
              variants={bounce}
              whileHover={{ scale: 1.25 }}
            >
              <Link href={icon?.url} target="_blank">
                <Image
                  src={hover.isHovered && index === hover?.id - 1 ? icon?.src : icon?.hoverSrc}
                  alt={icon?.alt}
                  width={40}
                  height={40}
                  className="rounded-md md:hidden"
                />
                <Image
                  src={icon?.src}
                  alt={icon?.alt}
                  width={40}
                  height={40}
                  className="rounded-md 4xl:hidden 3xl:hidden md:block"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <p className="para1">All Rights Reserved 2024</p>
      </div> */}
      <div className="m-auto max-w-350">
        <div className="relative m-auto -mb-[76px] grid max-w-[1200px] grid-cols-5 items-center gap-4 rounded-lg bg-blue-400 px-14 py-10">
          <div className="col-span-2">
            <h3 className="font-primary text-lg font-bold text-white">{news?.title}</h3>
            <RichText
              data={news?.description}
              paragraphStyles={'text-white font-primary font-bold text-[26px]'}
              //   linkStyles="hover:text-locationBox"
            />
          </div>
          <div className="col-span-2">
            <TextField id="standard-basic" label="Email" variant="standard" className="w-full" />
          </div>
          <div className="col-span-1">
            <button className="rounded-lg border border-solid border-blue-400 bg-black px-2 py-1 font-secondary text-base font-bold text-white">
              {subscribe?.name}
            </button>
          </div>
        </div>
        <div className="m-auto max-w-350 bg-[#171717] px-20 text-white">
          <div className="flex justify-center py-24">
            <div>
              <section className="mb-8 mt-10 grid grid-cols-4">
                <h3 className="col-span-1 col-start-2 text-white">{companyName}</h3>
              </section>
              <section className="grid grid-cols-4">
                <div className="flex items-center justify-center">
                  <Image
                    className="h-[100px] w-[140px]"
                    src={`${apiUrl}${url}`}
                    alt={alternativeText}
                    width={80}
                    height={80}
                  />
                </div>

                {footerlinks &&
                  footerlinks.map((link) => {
                    const { id, title, links } = link || {};
                    return (
                      <div key={id}>
                        <h2 className="mb-6 font-secondary text-[20px] font-semibold text-white">{title}</h2>
                        {links?.map((navlinks) => {
                          const { id, link, slug = '' } = navlinks || {};
                          return (
                            <Link key={id} href={slug} className="mt-3 flex flex-col font-primary">
                              {link}
                            </Link>
                          );
                        })}
                      </div>
                    );
                  })}
                <div>
                  <h2 className="mb-6 font-secondary text-[20px] font-semibold text-white">{title}</h2>
                  <RichText
                    data={description}
                    paragraphStyles={'my-0 text-left text-white text-base leading-8 px-2'}
                    //   linkStyles="hover:text-locationBox"
                  />
                </div>
              </section>
            </div>
          </div>
          <p className="border-t border-solid py-3 text-center text-[#797979]">{copyRight}</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
