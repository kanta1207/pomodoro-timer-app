import { useEffect } from 'react';
import { LinearGradientWrapper } from '../../../components/common/LinearGradientWrapper';
import { ScrollView } from 'react-native';
import { homeScreenStyles } from './homeScreen.styles';
import { useAPIGetProfile } from '../../../hooks/api/useAPIGetProfile';

export const HomeScreen = () => {
  const { userProfile, getProfile } = useAPIGetProfile();

  useEffect(() => {
    getProfile();
  }, []);

  console.log('userProfile', userProfile);

  return (
    <LinearGradientWrapper>
      <ScrollView style={homeScreenStyles.scrollViewStyle}></ScrollView>
    </LinearGradientWrapper>
  );
};
