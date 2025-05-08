import client from '@/config/apolloClient.config';
import { headerQuery } from '@/gql';
import { getHeaderModel } from '@/models';

export const getHeaderData = async () => {
  const { data } = await client.query({
    query: headerQuery,
    variables: {
      publicationState: 'PUBLISHED',
    },
    fetchPolicy: 'no-cache',
  });
  return getHeaderModel(data);
};
