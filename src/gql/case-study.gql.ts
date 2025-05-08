import { gql } from '@apollo/client';

const caseStudyQuery = gql`
  query MainCaseStudy {
    mainCaseStudy {
      heroSection {
        id
        title
        description
      }
      case_studies {
        title
        description
        caseStudyId
        caseStudyPhoto {
          alternativeText
          name
          url
        }
      }
    }
  }
`;

export default caseStudyQuery;
