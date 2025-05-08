import { apiUrl } from '@/config';
import { MediaAttributes } from '@/services/common.types';
import Image from 'next/image';
import React from 'react';

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

const Testimonials = ({ testimonialTitle, testimonials }: TestimonialsProps) => {
  return (
    <div>
      <h3 className="mb-7 font-secondary text-[20px] font-semibold">{testimonialTitle}</h3>
      <div className="flex flex-row gap-3">
        {testimonials?.map((testimonial) => {
          const { id, name, description, profilePhoto, projectName } = testimonial || {};
          const { alternativeText = '', url = '' } = profilePhoto || {};
          return (
            <div key={id} className="flex-1">
              <div className="flex items-center gap-2 bg-[#171717] px-5 py-4">
                <div className="size-12 overflow-hidden rounded-full">
                  <Image src={`${apiUrl}${url}`} alt={alternativeText} width={10} height={10} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">{name}</p>
                  <p className="font-secondary text-[8px] text-[#E2E2E2]">{projectName}</p>
                </div>
              </div>
              <div className="flex h-[240px] items-center justify-center bg-slate-400 px-3">
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
