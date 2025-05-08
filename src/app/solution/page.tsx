import RichText from '@/components/richText';
import SolutionService from '@/components/solution/solution-service/SolutionService';
import { solutionService } from '@/services';

const Solution = async () => {
  const { heroSection, servicesContent, services } = await solutionService?.getSolutionData();

  return (
    <main>
      <section className="max-w-350 mx-auto">
        <h1 className="my-10 w-[58%] font-secondary text-black">{heroSection?.title}</h1>
        <RichText data={heroSection?.description} paragraphStyles="font-primary" />
      </section>
      <SolutionService services={services} servicesContent={servicesContent} />
    </main>
  );
};

export default Solution;
