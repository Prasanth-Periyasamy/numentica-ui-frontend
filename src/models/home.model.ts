import { HomeDataType } from '@/services';

const getHomePageModel = ({ home = {} }: HomeDataType) => {
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
  } = home || {};
  return {
    feedback,
    footprint,
    getInTouch,
    heroSection,
    insideSection,
    partnersSection,
    serviceSection,
    teamSection,
    visionSection,
  };
};

export default getHomePageModel;
