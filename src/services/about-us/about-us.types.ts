import { ButtonWithSlug, MediaAttributes, TitleWithDescription } from '../common.types';

export type AboutUsDataType = {
  about?: AboutUsPageType;
};

export type AboutUsPageType = {
  getinTouch?: ButtonWithSlug;
  collaborate?: TitleWithDescription;
  heroSection?: TitleWithDescription[];
  testimonialTitle?: string;
  testimonials?: {
    id?: string;
    name?: string;
    projectName?: string;
    description?: [];
    profilePhoto?: MediaAttributes;
  }[];
  impactSection?: {
    title?: string;
    impactDetails?: TitleWithDescription[];
  };
};
