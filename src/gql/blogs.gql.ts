import { gql } from '@apollo/client';

export const allBlogsQuery = gql`
  query MainBlog {
    mainBlog {
      title
      blogs {
        documentId
        title
        description
        blogger
        blogDate
        blogId
        createdAt
        updatedAt
        bloggerPhoto {
          name
          alternativeText
          url
        }
        blogImage {
          name
          alternativeText
          url
        }
      }
    }
  }
`;

export const uniqueBlogQuery = gql`
  query Blog($documentId: ID!) {
    blog(documentId: $documentId) {
      documentId
      title
      description
      blogger
      blogDate
      blogId
      blogContent {
        id
        title
        description
      }
      bloggerPhoto {
        alternativeText
        url
      }
      blogImage {
        alternativeText
        url
      }
    }
  }
`;

export const blogsSlugsQuery = gql`
  query Blog {
    blogs {
      documentId
    }
  }
`;
