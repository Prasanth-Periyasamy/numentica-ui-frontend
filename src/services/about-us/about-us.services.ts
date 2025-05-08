import { client } from '@/config';
import aboutUsQuery from '@/gql/about-us.gql';
import { getAboutUsModel } from '@/models';

export const getAboutUsPageData = async () => {
  const { data } = await client.query({
    query: aboutUsQuery,
    variables: {
      publicationState: 'PUBLISHED',
    },
    fetchPolicy: 'no-cache',
  });
  return getAboutUsModel(data);
};
