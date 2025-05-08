import client from '@/config/apolloClient.config';
import { teamQuery } from '@/gql';
import { getTeamModel } from '@/models';

export const getTeamData = async () => {
  const { data } = await client.query({
    query: teamQuery,
    variables: {
      publicationState: 'PUBLISHED',
    },
    fetchPolicy: 'no-cache',
  });
  return getTeamModel(data);
};
