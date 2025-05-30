import Image from 'next/image';
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
      <div className="bg-cinder px-4 pb-1 pt-10">
        <section className="m-auto max-w-350 lg:mx-4 lg:h-[20rem]">
          <h1 className="font-secondary text-4xl font-normal  text-white">{heroSection?.title}</h1>
          <RichText data={heroSection?.description} paragraphStyles="text-4xl text-white" />
        </section>
        <div className="relative z-20 m-auto -mb-52 mt-16 block max-w-350 lg:mx-4 lg:hidden">
          <h3 className="text-white">The FrontLine</h3>
          <div className="flex gap-10 lg:flex-col">
            {founders?.map((founder) => {
              const { companyName, position, id, name, profilePhoto } = founder || {};
              const { alternativeText = '', url = '' } = profilePhoto || {};
              return (
                <div key={id}>
                  <div className="size-72">
                    <Image src={`${apiUrl}${url}`} alt={alternativeText} width={100} height={100} />
                  </div>
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="text-darkGreen">{position}</p>
                  <p className="text-darkGreen">{companyName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="relative z-20 m-auto -mb-52 -mt-36 hidden max-w-350 lg:mx-4 lg:block">
        <h3 className="text-white">The FrontLine</h3>
        <div className="flex gap-10 lg:flex-col">
          {founders?.map((founder) => {
            const { companyName, position, id, name, profilePhoto } = founder || {};
            const { alternativeText = '', url = '' } = profilePhoto || {};
            return (
              <div key={id}>
                <div className="size-72">
                  <Image src={`${apiUrl}${url}`} alt={alternativeText} width={100} height={100} />
                </div>
                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-darkGreen">{position}</p>
                <p className="text-darkGreen">{companyName}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="m-auto mt-60 max-w-350 px-4 lg:relative lg:mx-4 lg:px-0">
        <h3 className="bottom-0 left-2 font-semibold lg:absolute lg:text-white">{title}</h3>
        <div className="lg:overflow-hidden lg:rounded-lg">
          <Image src={`${apiUrl}${url}`} alt={alternativeText} width={100} height={100} />
        </div>
      </div>
      <section className="mb-16 mt-10 bg-cinder py-10">
        <div className="mx-auto flex max-w-[680px] items-center gap-14 md:flex-col md:px-4">
          <div className="">
            <h3 className="font-semibold text-white">{joinCrewTitle}</h3>
            <RichText data={description} paragraphStyles="text-white" />
          </div>
          <div className="md:w-full">
            <button className="text-nowrap rounded-lg bg-white px-10 py-1 md:block md:w-full">{joinusBtn?.name}</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
