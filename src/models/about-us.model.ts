import { AboutUsDataType } from '@/services';

const getAboutUsModel = ({ about = {} }: AboutUsDataType) => {
  const { heroSection, impactSection, testimonialTitle, testimonials, getinTouch, collaborate } = about || {};
  return { heroSection, impactSection, testimonialTitle, testimonials, getinTouch, collaborate };
};

export default getAboutUsModel;
