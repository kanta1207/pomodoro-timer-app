import { Text, View, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { colorCode } from '../../utils/colors.util';
import { useAuthWithSpotify } from '../../hooks/api/useAPIAuthWithSpotify';
import { LinearGradientWrapper } from '../../components/common/LinearGradientWrapper';
import { loginScreenStyles } from './loginScreen.styles';

export const LoginScreen = () => {
  const { request, response, authWithSpotify } = useAuthWithSpotify();
  useEffect(() => {
    if (response?.type === 'success') {
      console.log(response.params);
    }
  }, [response]);

  return (
    <LinearGradientWrapper>
      <SafeAreaView>
        <View style={loginScreenStyles.spacingViewStyle} />
        <Entypo
          style={loginScreenStyles.iconStyle}
          name="spotify"
          size={80}
          color={colorCode.white}
        />
        <Text style={loginScreenStyles.textStyle}>
          Millions of Songs Free on spotify!
        </Text>
        <View style={loginScreenStyles.spacingViewStyle} />
        <Pressable
          onPress={authWithSpotify}
          disabled={!request}
          style={loginScreenStyles.signInButtonStyle}
        >
          <Text>Sign In with spotify</Text>
        </Pressable>

        <Pressable style={loginScreenStyles.signInWithThirdPartyButtonStyle}>
          <MaterialIcons name="phone-android" size={24} color="white" />
          <Text style={loginScreenStyles.signInWithThirdPartyTextStyle}>
            Continue with phone number
          </Text>
        </Pressable>

        <Pressable style={loginScreenStyles.signInWithThirdPartyButtonStyle}>
          <AntDesign name="google" size={24} color="red" />
          <Text style={loginScreenStyles.signInWithThirdPartyTextStyle}>
            Continue with Google
          </Text>
        </Pressable>

        <Pressable style={loginScreenStyles.signInWithThirdPartyButtonStyle}>
          <Entypo name="facebook" size={24} color="blue" />
          <Text style={loginScreenStyles.signInWithThirdPartyTextStyle}>
            Sign In with facebook
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradientWrapper>
  );
};
