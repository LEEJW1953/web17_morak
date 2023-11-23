import { Member } from '@/types';

import { morakAPI } from './morakAPI';

export const member = {
  endPoint: {
    default: '/member',
    me: '/member/me',
  },

  myInfo: async () => {
    const { data } = await morakAPI.get<Member>(member.endPoint.me);
    return data;
  },

  infoById: async (id: string) => {
    const { data } = await morakAPI.get<Member>(
      `${member.endPoint.default}/${id}`,
    );
    return data;
  },
};
