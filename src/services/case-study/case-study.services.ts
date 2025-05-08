import client from '@/config/apolloClient.config';
import { caseStudyQuery } from '@/gql';
import getCaseStudyModel from '@/models/case-study.model';

export const getCaseStudyData = async () => {
  const { data } = await client.query({
    query: caseStudyQuery,
    variables: {
      publicationState: 'PUBLISHED',
    },
    fetchPolicy: 'no-cache',
  });
  return getCaseStudyModel(data);
};
