import { gql } from '@apollo/client';

const careersQuery = gql`
  query Career {
    career {
      careers {
        ... on ComponentCommonTitleWithDescription {
          title
          description
        }
      }
    }
  }
`;

export default careersQuery;
