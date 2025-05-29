'use client';
import { apiUrl } from '@/config';
import { MediaAttributes } from '@/services/common.types';
import Image from 'next/image';
import Slider from 'react-slick';
import React from 'react';
import { baseSettings } from '@/data/sliderBaseSettings';

type TestimonialsProps = {
  testimonialTitle?: string;
  testimonials?: {
    id?: string;
    name?: string;
    projectName?: string;
    description?: [];
    profilePhoto?: MediaAttributes;
  }[];
};

const settings = {
  ...baseSettings,
  className: 'center',
  // speed: 3000,
  // autoplaySpeed: 3000,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnHover: false,
  swipeToSlide: true,
};

const Testimonials = ({ testimonialTitle, testimonials }: TestimonialsProps) => {
  return (
    <>
      <div className="block lg:hidden">
        <h3 className="mb-7 font-secondary text-[20px] font-semibold">{testimonialTitle}</h3>
        <div className="flex flex-row gap-3">
          {testimonials?.map((testimonial) => {
            const { id, name, description, profilePhoto, projectName } = testimonial || {};
            const { alternativeText = '', url = '' } = profilePhoto || {};
            return (
              <div key={id} className="relative flex-1 border border-solid">
                <div className="absolute -top-1 inline-block h-1 w-14 rounded-3xl bg-gradient-to-r from-[#0063F7] to-[#0EF393]"></div>
                <div className="flex items-center gap-2 bg-[#171717] px-5 py-4">
                  <div className="size-12 overflow-hidden rounded-full">
                    <Image src={`${apiUrl}${url}`} alt={alternativeText} width={10} height={10} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{name}</p>
                    <p className="font-secondary text-[8px] text-[#E2E2E2]">{projectName}</p>
                  </div>
                </div>
                <div className="flex h-[240px] items-center justify-center px-3">
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <h3 className="mb-7 px-4 font-secondary text-[20px] font-semibold">{testimonialTitle}</h3>
      <div className="hidden px-10 lg:block">
        <Slider {...settings}>
          {testimonials?.map((testimonial) => {
            const { id, name, description, profilePhoto, projectName } = testimonial || {};
            const { alternativeText = '', url = '' } = profilePhoto || {};
            return (
              <div key={id} className="relative flex-1 border border-solid">
                <div className="absolute -top-1 inline-block h-1 w-14 rounded-3xl bg-gradient-to-r from-[#0063F7] to-[#0EF393]"></div>
                <div className="flex items-center gap-2 bg-[#171717] px-5 py-4">
                  <div className="size-12 overflow-hidden rounded-full">
                    <Image src={`${apiUrl}${url}`} alt={alternativeText} width={10} height={10} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">{name}</p>
                    <p className="font-secondary text-[8px] text-[#E2E2E2]">{projectName}</p>
                  </div>
                </div>
                <div className="flex h-[240px] items-center justify-center px-3">
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Testimonials;
