import { gql } from '@apollo/client';

const aboutUsQuery = gql`
  query About {
    about {
      getinTouch {
        name
        slug
        show
      }
      collaborate {
        title
        description
      }
      heroSection {
        id
        title
        description
      }
      testimonialTitle
      testimonials {
        id
        name
        projectName
        description
        profilePhoto {
          alternativeText
          url
        }
      }
      impactSection {
        title
        impactDetails {
          title
          description
          id
        }
      }
    }
  }
`;

export default aboutUsQuery;
