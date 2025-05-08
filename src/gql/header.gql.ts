import { gql } from '@apollo/client';

const headerQuery = gql`
  query Header {
    header {
      companyName
      companyLogo {
        name
        alternativeText
        url
      }
      demobtn {
        id
        name
        slug
        show
      }
      headerlinks {
        id
        link
        slug
      }
    }
  }
`;

export default headerQuery;
