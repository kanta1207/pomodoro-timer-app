import { Text, View, Pressable, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { colorCode } from '../../utils/colors.util';

import { LinearGradientWrapper } from '../../components/common/LinearGradientWrapper';

import { useNavigationWithType } from '../../hooks/useNavigationWithType';
import { useAuthWithSpotify } from '../../hooks/api/useAPIAuthWithSpotify';

import { greetingMessage } from '../../utils/greetingMessage';

export const LoginScreen = () => {
  const { request, response, authWithSpotify } = useAuthWithSpotify();
  const navigation = useNavigationWithType();
  useEffect(() => {
    if (response?.type === 'success') {
      console.log(response.params);
    }
  }, [response]);

  return (
    <LinearGradientWrapper>
      <SafeAreaView>
        {/* <View style={styles.spacingViewStyle} /> */}
        <View style={styles.containerStyle}>
          <Text style={styles.textStyle}>
            {greetingMessage()}!Let's get started!
          </Text>
          <View style={styles.spacingViewStyle} />
          <Pressable
            onPress={authWithSpotify}
            disabled={!request}
            style={styles.signInWithThirdPartyButtonStyle}
          >
            <Entypo name="spotify" size={24} color="green" />
            <Text style={styles.signInWithThirdPartyTextStyle}>
              Sign In with Spotify
            </Text>
          </Pressable>
          <Pressable style={styles.signInWithThirdPartyButtonStyle}>
            <AntDesign name="google" size={24} color="red" />
            <Text style={styles.signInWithThirdPartyTextStyle}>
              Sign In with Google
            </Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.navigate('Main')}
            disabled={!request}
            style={styles.signInWithThirdPartyButtonStyle}
          >
            <Text style={styles.signInWithThirdPartyTextStyle}>
              Use timer without an account
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradientWrapper>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 80,
    marginHorizontal: 40,
  },
  spacingViewStyle: { height: 80 },
  iconStyle: { textAlign: 'center' },
  textStyle: {
    color: colorCode.white,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    width: 350,
  },
  signInButtonStyle: {
    backgroundColor: colorCode.green,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  signInWithThirdPartyButtonStyle: {
    backgroundColor: colorCode.secondaryBlack,
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderColor: colorCode.gray,
    borderWidth: 0.8,
  },
  signInWithThirdPartyTextStyle: {
    fontWeight: '500',
    color: colorCode.white,
    textAlign: 'center',
    flex: 1,
  },
});
