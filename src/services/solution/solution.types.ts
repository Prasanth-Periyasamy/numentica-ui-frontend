import { TitleWithDescription } from '../common.types';

export type SolutionDataType = {
  solution?: SolutionPageType;
};

export type SolutionPageType = {
  heroSection?: TitleWithDescription;
  servicesContent?: TitleWithDescription;
  services?: TitleWithDescription[];
};
