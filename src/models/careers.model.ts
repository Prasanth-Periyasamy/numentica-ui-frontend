import { CareersDataType } from '@/services';

const getCareersModel = ({ career = {} }: CareersDataType) => {
  const { careers } = career || {};
  return { careers };
};

export default getCareersModel;
