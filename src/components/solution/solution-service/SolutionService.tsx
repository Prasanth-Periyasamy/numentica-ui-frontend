'use client';
import RichText from '@/components/richText';
import { apiUrl } from '@/config';
import { TitleWithDescription } from '@/services/common.types';
import { rightArrowWhite } from '@/utils/imageConstants';
import Image from 'next/image';
import React, { useState } from 'react';

type SolutionServiceProps = {
  servicesContent?: TitleWithDescription;
  services?: TitleWithDescription[];
};

const SolutionService = ({ servicesContent, services }: SolutionServiceProps) => {
  const [selectedService, setSelectedService] = useState<string>('28');
  const handleService = (id: string) => {
    setSelectedService(id);
  };
  return (
    <div>
      <section className="bg-[#171717] px-4">
        <div className="mx-auto grid max-w-350 grid-cols-[25%_72%] gap-6 py-16 lg:grid-cols-1">
          <div className="">
            <h2 className="font-secondary text-[28px] font-semibold text-white">{servicesContent?.title}</h2>
            <RichText data={servicesContent?.description} paragraphStyles="font-primary text-white lg:hidden" />
          </div>
          <div>
            {services?.map((service) => {
              const { title, id = '' } = service || {};
              return (
                <div
                  key={id}
                  className="flex items-center justify-between gap-2 border-b border-solid border-[#F0EEEE] py-4"
                  onClick={() => handleService(id)}
                >
                  <h3 className="font-primary text-xl font-semibold text-white">{title}</h3>
                  <div className="size-6">
                    <Image src={rightArrowWhite} alt="RightArrow" className="text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-350 px-4">
        {services?.map((service) => {
          if (selectedService === service?.id) {
            const { title, id, description, image } = service || {};
            const { alternativeText = '', url = '' } = image || {};
            return (
              <div key={id} className="my-10">
                <div className="mb-10 flex items-center gap-10">
                  <div className="size-10">
                    <Image src={`${apiUrl}${url}`} alt={alternativeText} width={100} height={100} />
                  </div>
                  <h3 key={id} className="font-primary text-xl font-semibold">
                    {title}
                  </h3>
                </div>
                <RichText data={description} paragraphStyles="text-black" />
              </div>
            );
          }
        })}
      </section>
    </div>
  );
};

export default SolutionService;
