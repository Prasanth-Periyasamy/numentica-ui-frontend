import Testimonials from '@/components/about-us/testimonials/Testimonials';
import RichText from '@/components/richText';
import { apiUrl } from '@/config';
import { aboutUsService } from '@/services';
import Image from 'next/image';

const AboutUs = async () => {
  const { heroSection, impactSection, testimonialTitle, testimonials, collaborate, getinTouch } =
    await aboutUsService?.getAboutUsPageData();
  const { impactDetails, title } = impactSection || {};
  return (
    <div className="mx-auto max-w-[1000px]">
      <section className="px-4">
        {heroSection?.map((section, index) => {
          const { id, title, description, image } = section || {};
          return (
            <div key={id}>
              <h1 className={index === 0 ? 'text-center' : ' mb-3 font-secondary text-[20px] font-semibold'}>
                {title}
              </h1>
              <RichText
                data={description}
                paragraphStyles={index === 0 ? 'text-center mb-8' : ' font-secondary mb-8'}
                imageStyles="h-[400px] object-cover"
              />
              {image?.url ? (
                <div className="h-52 w-full">
                  <Image src={`${apiUrl}${image?.url}`} alt={image?.alternativeText || ''} width={50} height={50} />
                </div>
              ) : null}
            </div>
          );
        })}
      </section>
      <section className="px-4">
        <h3 className="font-secondary text-xl font-semibold">{title}</h3>
        <div className="flex items-center justify-between px-4 py-8">
          {impactDetails?.map((details) => {
            const { title, description, id } = details || {};
            return (
              <div key={id}>
                <h2 className="bg-gradient-to-r from-cyan-600 via-green-500 to-yellow-500 bg-clip-text text-transparent">
                  {title}
                </h2>
                <RichText data={description} />
              </div>
            );
          })}
        </div>
      </section>
      <Testimonials testimonialTitle={testimonialTitle} testimonials={testimonials} />
      <section className="mx-4 my-12 rounded-2xl bg-cinder pb-3">
        <h4 className="mb-5 pt-5 text-center font-secondary text-xl font-semibold text-white">{collaborate?.title}</h4>
        <RichText data={collaborate?.description} paragraphStyles="text-white text-center mb-5" />
        <button className="from-brightBlue via-mintyGreen mx-auto block h-10 w-32 overflow-hidden rounded-lg bg-gradient-to-r to-[#FDC500] p-[2px] font-secondary text-base font-bold text-white">
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-black text-white">
            {getinTouch?.name}
          </div>
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
