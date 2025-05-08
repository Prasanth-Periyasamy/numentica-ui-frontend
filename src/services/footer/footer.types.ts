import { ButtonWithSlug, LinkWithSlug, MediaAttributes, TitleWithDescription } from '../common.types';

export type FooterDataType = {
  footer?: FooterPageType;
};

export type FooterPageType = {
  companyLogo?: MediaAttributes;
  companyName?: string;
  copyRight?: string;
  footerlinks?: {
    id?: string;
    title?: string;
    links?: LinkWithSlug[];
  }[];
  contactus?: TitleWithDescription;
  newsletter?: {
    id?: string;
    subscribe?: ButtonWithSlug;
    news?: TitleWithDescription;
  };
};
