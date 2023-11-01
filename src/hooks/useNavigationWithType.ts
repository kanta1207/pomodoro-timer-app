import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  // Home: { id: number } | undefined;
  // Pomodoro: { id: number } | undefined;
  // Login: { id: number } | undefined;
  // SignUp: { id: number } | undefined;
  Main: { id: number } | undefined;
};
export const useNavigationWithType = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return navigation;
};
