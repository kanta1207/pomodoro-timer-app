import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Main: { id: number } | undefined;
};
export const useNavigationWithType = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return navigation;
};
