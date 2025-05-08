import { MediaAttributes } from '../common.types';

export type CaseStudyDataType = {
  mainCaseStudy?: CaseStudyPageType;
};

export type CaseStudyPageType = {
  heroSection?: {
    id?: string;
    title?: string;
    description?: [];
  };
  case_studies?: {
    title?: string;
    description?: string;
    caseStudyId?: string;
    caseStudyPhoto?: MediaAttributes;
  }[];
};
