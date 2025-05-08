import { ButtonWithSlug, MediaAttributes, TitleWithDescription } from '../common.types';

export type TeamDataType = {
  team?: TeamPageType;
};

export type TeamPageType = {
  joinusBtn?: ButtonWithSlug;
  joincrew?: TitleWithDescription;
  crew?: TitleWithDescription;
  heroSection?: TitleWithDescription;
  founders?: {
    id?: string;
    name?: string;
    position?: string;
    companyName?: string;
    profilePhoto?: MediaAttributes;
  }[];
};
