import Image from 'next/image';
import { footerLinkedin } from '../utils/imageConstants';
import './style.css';
import { homeService } from '@/services';
import RichText from '@/components/richText';
import { apiUrl } from '@/config';
import Client from '@/components/clients/Client';
import Service from '@/components/home/service/Service';
import Partner from '@/components/home/partners/Partner';

const Home = async () => {
  const {
    feedback,
    footprint,
    getInTouch,
    heroSection,
    insideSection,
    partnersSection,
    serviceSection,
    teamSection,
    visionSection,
  } = await homeService?.getHomePageData();

  const { title: heroTitle, description: heroDescription } = heroSection || {};
  const { title: visionTitle, description: visionDescription } = visionSection || {};
  const { description, image, title } = insideSection || {};
  const { url = '', alternativeText = '' } = image || {};
  const { title: touchTitle, btnName, btnSlug } = getInTouch || {};
  const { image: footPrintImage, description: footPrintDescription } = footprint || {};
  const { book, founders, teams } = teamSection || {};
  const { title: teamTitle, description: teamDescription } = teams || {};

  return (
    <main className="pb-20 pt-112px lg:pb-0 lg:pt-20 xs:pt-7">
      {/* Hero Section */}
      <div className="px-134px lg:px-7">
        <h1 className="4xl:w- m-auto min-h-[90px] w-3/4 whitespace-normal  text-center leading-tight text-black 3xl:w-2/5 2xl:w-70% lg:w-90% md:w-full  xs:min-h-[160px]">
          {heroTitle}
        </h1>
        <RichText
          data={heroDescription}
          paragraphStyles="color-black m-auto  my-10 w-83% text-center text-black md:my-6 md:w-full"
        />
      </div>
      <Partner partnersSection={partnersSection} />
      {/* vision Section */}
      <div className="mx-auto max-w-350 px-134px pt-10 lg:px-7">
        <h1 className="4xl:w- m-auto w-3/4 whitespace-normal  text-center leading-tight text-black 3xl:w-2/5 2xl:w-70% lg:w-90% md:w-full  xs:min-h-[160px]">
          {visionTitle}
        </h1>
        <RichText
          data={visionDescription}
          paragraphStyles="text-black m-auto my-4 text-center text-black md:my-6 md:w-full"
        />
      </div>
      {/* Service Section */}
      <Service serviceSection={serviceSection} />
      <button className="mx-auto block rounded-lg bg-black px-2 py-1 text-white">Discover more of our Solutions</button>
      {/* Video Section */}
      <section className="mx-auto grid max-w-350 grid-cols-[40%_60%] gap-10 py-10">
        <div>
          <h3 className="text-right">{title}</h3>
          <RichText data={description} paragraphStyles="color-black text-right text-black md:w-full" />
        </div>
        <div className="h-52 w-full overflow-hidden rounded-lg">
          <Image src={`${apiUrl}${url}`} alt={alternativeText} width={40} height={40} className="object-cover" />
        </div>
      </section>
      {/* Team Section */}
      <section className="mx-auto flex max-w-350 bg-black">
        <div>
          <h2 className="text-white">{teamTitle}</h2>
          <RichText
            data={teamDescription}
            paragraphStyles="text-white m-auto my-4 w-83% text-center text-black md:my-6 md:w-full"
          />
          <button className="bg-white">{book?.name}</button>
        </div>
        <div>
          {founders?.map((founder) => {
            const { companyName, id, name, position, profilePhoto } = founder || {};
            const { url = '', alternativeText = '' } = profilePhoto || {};
            return (
              <div key={id}>
                <div className="size-6">
                  <Image src={`${apiUrl}${url}`} alt={alternativeText} width={30} height={30} />
                </div>
                <p className="text-white">{name}</p>
                <p className="text-white">{position}</p>
                <p className="text-white">{companyName}</p>
                <div className="size-6">
                  <Image src={footerLinkedin} alt={alternativeText} width={30} height={30} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Client Section */}
      <Client clientFeedback={feedback} />
      {/* GetinTouch Section */}
      <section className="mx-auto my-10 flex max-w-350 items-center justify-between gap-2">
        <h3 className="font-secondary text-xl font-semibold">{touchTitle}</h3>
        <button className="rounded-lg bg-black px-4 py-1 text-white">{btnName}</button>
      </section>
      {/* Footprint */}
      <section className="mx-auto max-w-350">
        <RichText
          data={footPrintDescription || []}
          paragraphStyles="color-black font-secondary text-[30px] mb-6 text-center text-black md:w-full"
        />
        <div>
          <Image
            src={`${apiUrl}${footPrintImage?.url}`}
            alt={footPrintImage?.alternativeText || ''}
            width={30}
            height={30}
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
