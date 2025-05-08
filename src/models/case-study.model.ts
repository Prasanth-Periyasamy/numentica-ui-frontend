import { CaseStudyDataType } from '@/services/case-study/case-study.types';

const getCaseStudyModel = ({ mainCaseStudy = {} }: CaseStudyDataType) => {
  const { heroSection, case_studies } = mainCaseStudy || {};
  return { heroSection, case_studies };
};

export default getCaseStudyModel;
