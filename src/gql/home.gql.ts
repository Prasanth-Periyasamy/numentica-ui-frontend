import { gql } from '@apollo/client';

const homeQuery = gql`
  query Home {
    home {
      heroSection {
        title
        description
      }
      partnersSection {
        id
        title
        description
        btnName
        partnerPhoto {
          alternativeText
          url
        }
      }
      visionSection {
        title
        description
      }
      serviceSection {
        id
        title
        description
        image {
          alternativeText
          url
        }
      }
      insideSection {
        title
        description
        image {
          alternativeText
          url
        }
      }
      teamSection {
        book {
          name
          slug
        }
        teams {
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
      feedback {
        id
        clientName
        feedback
        clientPhoto {
          alternativeText
          url
        }
      }
      getInTouch {
        title
        btnName
        btnSlug
      }
      footprint {
        description
        image {
          alternativeText
          url
        }
      }
    }
  }
`;

export default homeQuery;
