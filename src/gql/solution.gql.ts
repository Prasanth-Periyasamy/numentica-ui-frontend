import { gql } from '@apollo/client';

const solutionQuery = gql`
  query Solution {
    solution {
      heroSection {
        title
        description
      }
      servicesContent {
        description
        title
      }
      services {
        id
        title
        description
        image {
          alternativeText
          url
        }
      }
    }
  }
`;

export default solutionQuery;
