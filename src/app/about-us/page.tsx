import Testimonials from '@/components/about-us/testimonials/Testimonials';
import RichText from '@/components/richText';
import { aboutUsService } from '@/services';

const AboutUs = async () => {
  const { heroSection, impactSection, testimonialTitle, testimonials, collaborate, getinTouch } =
    await aboutUsService?.getAboutUsPageData();
  const { impactDetails, title } = impactSection || {};
  return (
    <div className="mx-auto max-w-[1000px]">
      <section>
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
            </div>
          );
        })}
      </section>
      <section>
        <h3 className="font-secondary text-xl font-semibold">{title}</h3>
        <div className="flex items-center justify-between px-4 py-8">
          {impactDetails?.map((details) => {
            const { title, description, id } = details || {};
            return (
              <div key={id}>
                <h2>{title}</h2>
                <RichText data={description} />
              </div>
            );
          })}
        </div>
      </section>
      <Testimonials testimonialTitle={testimonialTitle} testimonials={testimonials} />
      <section className="my-12 rounded-2xl bg-[#171717] pb-3">
        <h4 className="mb-5 pt-5 text-center font-secondary text-xl font-semibold text-white">{collaborate?.title}</h4>
        <RichText data={collaborate?.description} paragraphStyles="text-white text-center mb-5" />
        <button className="mx-auto mb-5 block rounded-lg bg-black p-2 font-secondary text-base font-bold text-white">
          {getinTouch?.name}
        </button>
      </section>
    </div>
  );
};

export default AboutUs;
