import { gql } from '@apollo/client';

const teamQuery = gql`
  query Team {
    team {
      joinusBtn {
        name
        slug
        show
      }
      joincrew {
        title
        description
      }
      crew {
        title
        image {
          alternativeText
          url
        }
      }
      heroSection {
        title
        description
      }
      founders {
        id
        name
        position
        companyName
        profilePhoto {
          alternativeText
          url
        }
      }
    }
  }
`;

export default teamQuery;
