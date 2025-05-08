import { gql } from '@apollo/client';

const footerQuery = gql`
  query Footer {
    footer {
      companyLogo {
        name
        alternativeText
        url
      }
      companyName
      copyRight
      footerlinks {
        id
        title
        links {
          link
          slug
          id
        }
      }
      contactus {
        id
        title
        description
      }
      newsletter {
        id
        subscribe {
          id
          name
          slug
          show
        }
        news {
          id
          title
          description
        }
      }
    }
  }
`;

export default footerQuery;
