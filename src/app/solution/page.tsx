import RichText from '@/components/richText';
import SolutionService from '@/components/solution/solution-service/SolutionService';
import { solutionService } from '@/services';

const Solution = async () => {
  const { heroSection, servicesContent, services } = await solutionService?.getSolutionData();
  const { title, description } = heroSection || {};
  return (
    <main>
      <section className="mx-auto max-w-350 lg:px-4">
        <h1 className="my-10 w-[58%] font-secondary text-black">{title}</h1>
        <RichText data={description} paragraphStyles="font-primary" />
      </section>
      <SolutionService services={services} servicesContent={servicesContent} />
    </main>
  );
};

export default Solution;
