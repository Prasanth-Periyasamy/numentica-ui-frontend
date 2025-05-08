// 'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { numenticaTeam, founder, arun, uma, linkedin } from '../../utils/imageConstants';
import { TeamData } from '@/types';
import { team } from '../../data/team';
import GetInTouch from '@/components/getInTouch';
import { AnimatedElement } from '@/components/animatedElement';
import { teamService } from '@/services';
import RichText from '@/components/richText';
import { apiUrl } from '@/config';

const Team = async () => {
  const { crew, founders, heroSection, joincrew, joinusBtn } = await teamService.getTeamData();
  const { title, image } = crew || {};
  const { alternativeText = '', url = '' } = image || {};
  const { title: joinCrewTitle, description } = joincrew || {};
  return (
    <>
      <div className="bg-[#171717] pb-1 pt-10">
        <section className="m-auto max-w-350">
          <h1 className="font-secondary text-[36px] font-normal  text-white">{heroSection?.title}</h1>
          <RichText data={heroSection?.description} paragraphStyles="text-[36px] text-white" />
        </section>
        <div className="relative z-20 m-auto -mb-52 mt-[64px] max-w-350">
          <h3 className="text-white">The FrontLine</h3>
          <div className="flex gap-10">
            {founders?.map((founder) => {
              const { companyName, position, id, name, profilePhoto } = founder || {};
              const { alternativeText = '', url = '' } = profilePhoto || {};
              return (
                <div key={id}>
                  <div className="size-[280px]">
                    <Image src={`${apiUrl}${url}`} alt={alternativeText} width={100} height={100} />
                  </div>
                  <h3 className="text-[20px] font-semibold">{name}</h3>
                  <p className="text-[#232323]">{position}</p>
                  <p className="text-[#232323]">{companyName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="m-auto mt-60 max-w-350">
        <h3 className="font-semibold">{title}</h3>
        <div>
          <Image src={`${apiUrl}${url}`} alt={alternativeText} width={100} height={100} />
        </div>
      </div>
      <section className="mb-16 mt-10 bg-[#171717] py-10">
        <div className="mx-auto flex max-w-[680px] items-center gap-14">
          <div className="">
            <h3 className="font-semibold text-white">{joinCrewTitle}</h3>
            <RichText data={description} paragraphStyles="text-white" />
          </div>
          <div>
            <button className="text-nowrap rounded-lg bg-white px-10 py-1">{joinusBtn?.name}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
