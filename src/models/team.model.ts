import { TeamDataType } from '@/services';

const getTeamModel = ({ team = {} }: TeamDataType) => {
  const { crew, founders, heroSection, joincrew, joinusBtn } = team || {};
  return { crew, founders, heroSection, joincrew, joinusBtn };
};

export default getTeamModel;
