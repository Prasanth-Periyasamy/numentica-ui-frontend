import { FooterDataType } from '@/services';

const getFooterModel = ({ footer = {} }: FooterDataType) => {
  const { companyName, companyLogo, copyRight, contactus, footerlinks, newsletter } = footer || {};
  return { companyName, companyLogo, copyRight, contactus, footerlinks, newsletter };
};

export default getFooterModel;
