'use client';
import { apiUrl } from '@/config';
import { MediaAttributes } from '@/services/common.types';
import Image from 'next/image';
import Slider from 'react-slick';

const settings = {
  className: 'center',
  slidesToScroll: 1,
  slideToShow: 1,
  autoplay: true,
  pauseOnHover: false,
  swipeToSlide: true,
  dots: false,
  fade: true,
  waitForAnimate: false,
};

interface PartnerPageProps {
  partnersSection?: {
    id?: string;
    title?: string;
    description?: string;
    btnName?: string;
    partnerPhoto?: MediaAttributes;
  }[];
}

const Partner = ({ partnersSection }: PartnerPageProps) => {
  return (
    <section className="mx-auto max-w-350 bg-gradient-to-r from-[#2799D5] to-[#04A56B] py-12">
      <Slider {...settings}>
        {partnersSection?.map((partner) => {
          const { id, btnName, description, partnerPhoto, title } = partner || {};
          const { alternativeText = '', url = '' } = partnerPhoto || {};
          return (
            <div key={id} className="flex">
              <div className="flex items-center justify-center">
                <div className="flex flex-col gap-3">
                  <h2 className="text-white">{title}</h2>
                  <p className="w-3/5 text-white">{description}</p>
                  <button className="w-fit rounded-lg bg-white px-2 py-1 font-bold">{btnName}</button>
                </div>
                <div className="h-32 w-36">
                  <Image src={`${apiUrl}${url}`} alt={alternativeText} width={40} height={40} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default Partner;
