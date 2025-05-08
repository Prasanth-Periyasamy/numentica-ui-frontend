import CareersForm from '@/components/careers/CareersForm';
import RichText from '@/components/richText';
import { careersService } from '@/services';

const Careers = async () => {
  const { careers = [] } = await careersService?.getCareersData();
  console.log('careers:', careers);
  const { title, description } = careers?.[0];
  return (
    <div className="mx-auto mb-14 mt-20 grid max-w-350 grid-cols-2 gap-5 border border-solid border-[#DDDDDD]">
      <div className="items-left flex flex-col justify-center rounded-l-lg bg-black px-7 text-left">
        <h1 className="font-secondary text-white">{title}</h1>
        <RichText data={description} paragraphStyles="font-primary text-[20px] text-white" />
      </div>
      <div>
        <CareersForm />
      </div>
    </div>
  );
};

export default Careers;
