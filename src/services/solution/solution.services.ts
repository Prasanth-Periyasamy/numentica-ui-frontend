import client from '@/config/apolloClient.config';
import { solutionQuery } from '@/gql';
import { getSolutionModel } from '@/models';

export const getSolutionData = async () => {
  const { data } = await client.query({
    query: solutionQuery,
    variables: {
      publicationState: 'PUBLISHED',
    },
    fetchPolicy: 'no-cache',
  });
  return getSolutionModel(data);
};
