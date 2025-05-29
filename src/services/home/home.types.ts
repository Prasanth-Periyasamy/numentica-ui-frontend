import { ButtonWithSlug, MediaAttributes, TitleWithDescription } from '../common.types';

export type HomeDataType = {
  home?: HomePageType;
};

export type HomePageType = {
  heroSection?: TitleWithDescription;
  partnersSection?: {
    id?: string;
    title?: string;
    description?: string;
    btnName?: string;
    partnerPhoto?: MediaAttributes;
  }[];
  visionSection?: TitleWithDescription;
  serviceSection?: TitleWithDescription[];
  insideSection?: TitleWithDescription;
  teamSection?: {
    book?: ButtonWithSlug;
    teams?: TitleWithDescription;
    founders?: {
      id?: string;
      name?: string;
      position?: string;
      companyName?: string;
      profilePhoto?: MediaAttributes;
    }[];
  };
  feedback?: {
    id?: string;
    clientName?: string;
    feedback?: [];
    clientPhoto?: MediaAttributes;
  }[];
  getInTouch?: {
    title?: string;
    btnName?: string;
    btnSlug?: string;
  };
  footprint?: {
    description?: [];
    image?: MediaAttributes;
  };
};
