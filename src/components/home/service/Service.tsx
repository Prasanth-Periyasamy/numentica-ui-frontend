'use client';
import Slider from 'react-slick';
import { TitleWithDescription } from '@/services/common.types';
import Image from 'next/image';
import { apiUrl } from '@/config';
import { baseSettings } from '@/data/sliderBaseSettings';

interface ServiceSectionProps {
  serviceSection?: TitleWithDescription[];
}

const settings = {
  ...baseSettings,
  className: 'center',
  autoplay: true,
  pauseOnHover: false,
  swipeToSlide: true,
};

const Service = ({ serviceSection }: ServiceSectionProps) => {
  return (
    <div className="mx-auto my-10 max-w-350">
      <Slider {...settings}>
        {serviceSection?.map((service) => {
          const { image, title } = service || {};
          const { url = '', alternativeText = '' } = image || {};
          return (
            <div className="w-full px-2">
              <div className="mx-10 !flex h-20 w-full items-center gap-2 bg-slate-500 p-4">
                <div className="size-10">
                  <Image src={`${apiUrl}${url}`} alt={alternativeText} width={30} height={30} />
                </div>
                <p>{title}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Service;
