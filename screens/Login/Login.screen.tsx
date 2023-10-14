import { Text, StyleSheet, View, Pressable } from 'react-native';
import React, { Component, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { colorCode } from '../../utils/colors.util';
import { useAuthWithSpotify } from '../../hooks/useAuthWithSpotify';

export const LoginScreen = () => {
  const { request, response, authWithSpotify } = useAuthWithSpotify();
  useEffect(() => {
    if (response?.type === 'success') {
      console.log(response.params);
    }
  }, [response]);

  return (
    <LinearGradient
      colors={[colorCode.secondaryBlack, colorCode.primaryBlack]}
      style={styles.gradientStyle}
    >
      <SafeAreaView>
        <View style={styles.spacingViewStyle} />
        <Entypo
          style={styles.iconStyle}
          name="spotify"
          size={80}
          color={colorCode.white}
        />
        <Text style={styles.textStyle}>Millions of Songs Free on spotify!</Text>
        <View style={styles.spacingViewStyle} />
        <Pressable
          onPress={authWithSpotify}
          disabled={!request}
          style={styles.signInButtonStyle}
        >
          <Text>Sign In with spotify</Text>
        </Pressable>

        <Pressable style={styles.signInWithThirdPartyButtonStyle}>
          <MaterialIcons name="phone-android" size={24} color="white" />
          <Text style={styles.signInWithThirdPartyTextStyle}>
            Continue with phone number
          </Text>
        </Pressable>

        <Pressable style={styles.signInWithThirdPartyButtonStyle}>
          <AntDesign name="google" size={24} color="red" />
          <Text style={styles.signInWithThirdPartyTextStyle}>
            Continue with Google
          </Text>
        </Pressable>

        <Pressable style={styles.signInWithThirdPartyButtonStyle}>
          <Entypo name="facebook" size={24} color="blue" />
          <Text style={styles.signInWithThirdPartyTextStyle}>
            Sign In with facebook
          </Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientStyle: { flex: 1 },
  spacingViewStyle: { height: 80 },
  iconStyle: { textAlign: 'center' },
  textStyle: {
    color: colorCode.white,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
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
