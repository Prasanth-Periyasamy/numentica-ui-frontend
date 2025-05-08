import { HeaderDataType } from '@/services';

const getHeaderModel = ({ header = {} }: HeaderDataType) => {
  const { companyName, companyLogo, headerlinks, demobtn } = header || {};
  return { companyName, companyLogo, headerlinks, demobtn };
};

export default getHeaderModel;
