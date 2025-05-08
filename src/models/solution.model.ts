import { SolutionDataType } from '@/services';

const getSolutionModel = ({ solution = {} }: SolutionDataType) => {
  const { heroSection, servicesContent, services } = solution || {};
  return { heroSection, servicesContent, services };
};

export default getSolutionModel;
