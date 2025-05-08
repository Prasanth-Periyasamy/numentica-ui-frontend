import client from '@/config/apolloClient.config';
import { blogsQuery } from '@/gql';
import { getBlogsModel } from '@/models';
import { getBlogSlugsModel } from '@/models/blogs.model';

const { allBlogsQuery, uniqueBlogQuery, blogsSlugsQuery } = blogsQuery;

const { getAllBlogsModel, getUniqueBlogModel } = getBlogsModel;

export const getAllBlogsData = async () => {
  const { data } = await client.query({
    query: allBlogsQuery,
    variables: {
      publicationState: 'PUBLISHED',
    },
    fetchPolicy: 'no-cache',
  });
  return getAllBlogsModel(data);
};

export const getUniqueBlogData = async (params: string) => {
  const { data } = await client.query({
    query: uniqueBlogQuery,
    variables: {
      publicationState: 'PUBLISHED',
      documentId: 't5evdggixd53ovt5fxzlxiv0',
    },
    fetchPolicy: 'no-cache',
  });
  return getUniqueBlogModel(data);
};

export const getBlogsSlugData = async () => {
  const { data } = await client.query({
    query: blogsSlugsQuery,
    variables: {
      publicationState: 'PUBLISHED',
    },
    fetchPolicy: 'no-cache',
  });

  return getBlogSlugsModel(data);
};
