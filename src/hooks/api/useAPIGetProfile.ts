import { useState } from 'react';
import { UserProfile } from '../../types/types';
import { axiosBase } from '../../libs/axios';

export const useAPIGetProfile = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>();

  const getProfile = async () => {
    try {
      const { data } = await axiosBase().get<UserProfile>('/me');
      setUserProfile(data);
    } catch (err) {
      throw new Error(`Fetching error. ${err}`);
    }
  };

  return { userProfile, getProfile };
};
