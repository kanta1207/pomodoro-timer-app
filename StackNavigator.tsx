import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/Home/Home.screen';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';
import { ProfileScreen } from './screens/Profile/Profile.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { colorCode } from './utils/colors.util';
import { LoginScreen } from './screens/Login/Login.screen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarLabelStyle: { color: colorCode.white },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="home" size={24} color={colorCode.white} />
            ) : (
              <AntDesign name="home" size={24} color={colorCode.white} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarLabelStyle: { color: colorCode.white },
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name="person" size={24} color={colorCode.white} />
            ) : (
              <Ionicons
                name="person-outline"
                size={24}
                color={colorCode.white}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colorCode.primaryBlack,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    shadowOpacity: 4,
    shadowRadius: 4,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    borderTopWidth: 0,
  },
});
