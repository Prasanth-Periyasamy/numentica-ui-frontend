import client from '@/config/apolloClient.config';
import { careersQuery } from '@/gql';
import { getCareersModel } from '@/models';

export const getCareersData = async () => {
  const { data } = await client.query({
    query: careersQuery,
    variables: {
      publicationState: 'PUBLISHED',
    },
    fetchPolicy: 'no-cache',
  });
  return getCareersModel(data);
};
