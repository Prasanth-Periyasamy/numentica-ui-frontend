import RichText from '@/components/richText';
import { apiUrl } from '@/config';
import { caseStudyService } from '@/services';
import { rightArrows } from '@/utils/imageConstants';
import Image from 'next/image';

const CaseStudy = async () => {
  const { heroSection, case_studies } = await caseStudyService?.getCaseStudyData();
  const { id, description, title } = heroSection || {};
  return (
    <main className="mb-14 grid grid-cols-[23%_72%] gap-8 px-[90px] pt-10 lg:px-8 sm:px-2">
      <section>
        <h1 className="pb-4 font-secondary capitalize">{title}</h1>
        <RichText
          data={description}
          //   paragraphStyles={'my-0 text-left text-black text-base leading-8 px-2'}
          //   linkStyles="hover:text-locationBox"
        />
      </section>
      <section>
        <div className="flex flex-col">
          {case_studies?.map((caseStudy) => {
            const { caseStudyId, caseStudyPhoto, title, description } = caseStudy;
            const { name, alternativeText = '', url } = caseStudyPhoto || {};
            return (
              <div key={caseStudyId} className="flex  gap-4 border-b border-solid border-[#DDDDDD] pb-7 pt-7">
                <div className="h-[150px] w-[300px]">
                  <Image
                    src={`${apiUrl}${url}`}
                    alt={alternativeText}
                    className="object-cover"
                    width={100}
                    height={100}
                  />
                </div>
                <div>
                  <h2>{title}</h2>
                  <div className="flex items-center gap-16">
                    <p className="text-[#5E5E5E]">{description}</p>
                    <div className="size-10">
                      <Image src={rightArrows} alt="RightArrow" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default CaseStudy;
