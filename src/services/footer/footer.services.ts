import client from '@/config/apolloClient.config';
import { footerQuery } from '@/gql';
import { getFooterModel } from '@/models';

export const getFooterData = async () => {
  const { data } = await client.query({
    query: footerQuery,
    variables: {
      publicationState: 'PUBLISHED',
    },
    fetchPolicy: 'no-cache',
  });
  return getFooterModel(data);
};
