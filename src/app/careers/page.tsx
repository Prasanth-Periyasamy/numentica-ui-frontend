import CareersForm from '@/components/careers/CareersForm';
import RichText from '@/components/richText';
import { apiUrl } from '@/config';
import { careersService } from '@/services';
import Image from 'next/image';

const Careers = async () => {
  const { careers = [] } = await careersService?.getCareersData();
  const { title, description, image } = careers?.[0];
  const { url = '', alternativeText = '' } = image || {};
  return (
    <>
      <div className="items-left relative hidden flex-col justify-center bg-black px-7 pb-52 text-left lg:flex lg:pb-20 lg:pt-11">
        <h1 className="font-secondary text-2xl text-white">{title}</h1>
        <RichText data={description} paragraphStyles="font-primary text-sm text-white" />
        <Image
          src={`${apiUrl}${url}`}
          alt={alternativeText}
          width={100}
          height={100}
          className="absolute inset-0 z-50 object-cover"
        />
      </div>
      <div className="mx-auto my-14 grid max-w-350 grid-cols-2 gap-12 rounded-2xl border border-solid border-black 2xl:mx-4 lg:relative lg:z-10 lg:-mt-12 lg:grid-cols-1 lg:bg-white">
        <div className="items-left relative flex flex-col justify-center rounded-l-lg bg-black px-7 pb-52 text-left lg:hidden">
          <h1 className="font-secondary text-white">{title}</h1>
          <RichText data={description} paragraphStyles="font-primary text-[20px] text-white" />
          <Image
            src={`${apiUrl}${url}`}
            alt={alternativeText}
            width={100}
            height={100}
            className="absolute inset-0 z-50 object-cover"
          />
        </div>
        <div className="py-12 pr-12 lg:pl-12 md:px-2 md:py-4">
          <CareersForm />
        </div>
      </div>
    </>
  );
};

export default Careers;
