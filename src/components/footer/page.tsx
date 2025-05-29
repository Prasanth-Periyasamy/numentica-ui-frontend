'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TextField } from '@mui/material';
import { apiUrl } from '@/config';
import { FooterDataType } from '@/services';
import RichText from '../richText';

const Footer = ({ footer }: FooterDataType) => {
  const { companyLogo, companyName, contactus, copyRight, footerlinks, newsletter } = footer || {};
  const { url = '', alternativeText = '' } = companyLogo || {};
  const { description, title } = contactus || {};
  const { news, subscribe } = newsletter || {};

  return (
    <div>
      <div className="-mb-76px relative m-auto grid max-w-350 grid-cols-5 items-center gap-4 rounded-lg bg-gradient-to-r from-[#2799D5] to-[#04A56B] px-14 py-10 2xl:mx-4 lg:grid-cols-1 lg:px-2 lg:py-4">
        <div className="col-span-2">
          <h3 className="font-primary text-lg font-bold text-white lg:text-sm">{news?.title}</h3>
          <RichText
            data={news?.description}
            paragraphStyles={'text-white font-primary font-bold text-2.5xl lg:text-base'}
          />
        </div>
        <div className="col-span-2">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            className="w-full !text-white"
            sx={{
              input: { color: 'white' },
              label: {
                color: 'white',
                '&.Mui-focused': {
                  color: 'white',
                },
              },
              '& .MuiInput-underline:before': {
                borderBottomColor: 'white',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'white',
              },
            }}
          />
        </div>
        <div className="col-span-1">
          <button className="h-10 w-32 overflow-hidden rounded-lg bg-gradient-to-r from-[#0063F7] via-[#0EF393] to-[#FDC500] p-[2px] font-secondary text-base font-bold text-white lg:w-full">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-black text-white">
              {subscribe?.name}
            </div>
          </button>
        </div>
      </div>
      <div className="bg-cinder px-20 text-white md:px-0">
        <div className="mx-auto flex max-w-350 justify-center py-24 2xl:mx-4 md:justify-start md:pb-6">
          <div>
            <section className="mb-8 mt-10 grid grid-cols-4 items-center md:flex md:gap-3">
              <div>
                <Image
                  className="hidden h-11 w-20 md:block"
                  src={`${apiUrl}${url}`}
                  alt={alternativeText}
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="col-span-1 col-start-2 text-white md:col-start-1">{companyName}</h3>
            </section>
            <section className="grid grid-cols-4 md:grid-cols-1 md:gap-6">
              <div className="flex items-center justify-center md:hidden">
                <Image
                  className="h-100px w-140px"
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
                      <h2 className="mb-6 font-secondary text-xl font-semibold text-white md:text-base">{title}</h2>
                      {links?.map((navLinks) => {
                        const { id, link, slug = '' } = navLinks || {};
                        return (
                          <Link key={id} href={slug} className="mt-3 flex flex-col font-primary md:text-sm">
                            {link}
                          </Link>
                        );
                      })}
                    </div>
                  );
                })}
              <div>
                <h2 className="mb-6 font-secondary text-xl font-semibold text-white md:text-base">{title}</h2>
                <RichText
                  data={description}
                  paragraphStyles="my-0 text-left text-white text-base md:text-sm leading-8 px-2 md:px-0 md:pb-3"
                  linkStyles="no-underline"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
      <p className="bg-cinder border-t border-boulder py-3 text-center text-boulder md:text-xs">{copyRight}</p>
    </div>
  );
};

export default Footer;
