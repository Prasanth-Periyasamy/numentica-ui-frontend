import client from '@/config/apolloClient.config';
import { homeQuery } from '@/gql';
import { getHomePageModel } from '@/models';

export const getHomePageData = async () => {
  const { data } = await client.query({
    query: homeQuery,
    variables: {
      publicationState: 'PUBLISHED',
    },
    fetchPolicy: 'no-cache',
  });
  return getHomePageModel(data);
};
