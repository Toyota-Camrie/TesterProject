import React, {useState} from 'react';
import { useCallback } from 'react';
import { View, ScrollView, Text, TextInput, StyleSheet, Pressable } from 'react-native';


//Fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
SplashScreen.preventAutoHideAsync();


import LoginImage from './styles/LoginImage';
const LogImage = require('./images/logo.png');

import GoogleIcon from './styles/GoogleIcon';
const GooglePic = require('./images/iconGoogle.png');

import FacebookIcon from './styles/FacebookIcon';
const FacebookPic = require('./images/iconFacebook.png');


export default function App() {

  const [fontsLoaded] = useFonts({
    'Montserrat': require('./fonts/Montserrat-Regular.ttf'),
    'Work Sans': require('./fonts/WorkSans-Regular.ttf'),
    'Mulish': require('./fonts/Mulish-Regular.ttf'),
    'Inter': require('./fonts/Inter-Regular.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
  <ScrollView>
    <View style = {styles.container} onLayout = {onLayoutRootView}>

      <View style = {styles.imageContainer}>
        <LoginImage placeholderImageSource = { LogImage } />
      </View>

      <View style = {styles.loginTitle}>
        <Text style = {styles.loginText}>Login</Text>
      </View>

      <View style = {styles.descriptionBox}>
        <Text style = {styles.descriptionText}>Let’s Get Connected Forever!</Text>
      </View>

      <View style = {styles.emailBox}>
        <View style = {styles.emailEntry}>
          <Text style = {styles.emailPlaceholder}>Email or Username</Text>
        </View>
      </View>

      <View style = {styles.passwordBox}>
        <View style = {styles.passwordEntry}>
          <Text style = {styles.passwordPlaceholder}>Password</Text>
        </View>
      </View>

      <View style = {styles.forgotBox}>
        <Text style = {styles.forgotPassword}>Forgot password?</Text>
      </View>

      <View style = {styles.signinButton}>
        <Pressable style = {styles.buttonStyle} onPress={() => alert('You pressed a button.')}>
          <Text style = {styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>

      <View style = {styles.signUp}>
        <Text>
          Not have account?
          <Text style = {styles.signupText}> Sign Up</Text>
        </Text>
      </View>

      <View style = {styles.other}>
        <Text style = {styles.or}>OR</Text>
      </View>

      <View style = {styles.otherSign}>
        <Text style = {styles.otherText}>Sign In with</Text>
      </View>

      <View style = {styles.boxes}>
        <View style = {styles.googleBox}>
          <GoogleIcon placeholderImageSource = { GooglePic } />
        </View>

        <View style = {styles.facebookBox}>
          <FacebookIcon placeholderImageSource = { FacebookPic } />
        </View>
      </View>

      <View style = {styles.footerContainer}>
        <View style = {styles.rectangle}></View>
      </View>

    </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },

  image: {
    width: 168,
    height: 112,
    flexShrink: 0
  },

  imageContainer: {
    backgroundColor: 'light-gray',
    paddingTop: 89.78
  },

  loginTitle: {
    paddingRight: 276.32,
    paddingLeft: 49.68,
    marginTop: 44.08
  },

  loginText: {
    color: 'rgba(54, 69, 90, 1)',
    fontFamily: 'Montserrat',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 600
  },

  descriptionBox: {
    marginTop: 14.86,
    paddingRight: 102.67,
    paddingLeft: 49.68
  },

  descriptionText: {
    color: 'rgba(73, 85, 102, 1)',
    fontFamily: 'Work Sans',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400
  },

  emailBox: {
    marginTop: 22.28,
    paddingLeft: 49.68,
    paddingRight: 37.32
  },

  emailEntry: {
    width: 327,
    height: 64,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 242, 246, 1)',
    justifyContent: 'center'
  },

  emailPlaceholder: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mulish',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    paddingLeft: 18,
    paddingTop: 24,
    paddingBottom: 22
  },

  passwordBox: {
    marginTop: 16,
    paddingLeft: 49.68,
    paddingRight: 37.32
  },

  passwordEntry: {
    width: 327,
    height: 64,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(240, 242, 246, 1)',
    justifyContent: 'center'
  },

  passwordPlaceholder: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mulish',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 400,
    paddingLeft: 18,
    paddingTop: 22.71,
    paddingBottom: 20.71
  },

  forgotBox: {
    paddingLeft: 240.68,
    paddingRight: 37.32,
    marginTop: 24
  },

  forgotPassword: {
    color: 'rgba(10, 32, 73, 1)',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400
  },

  signinButton: {
    paddingLeft: 56.68,
    paddingRight: 30.32,
    marginTop: 30
  },

  buttonStyle: {
    width: 327,
    height: 64,
    flexShrink: 0,
    borderRadius: 7,
    backgroundColor: 'rgba(1, 167, 190, 1)'
  },

  buttonText: {
    color: 'rgba(255, 255, 255, 1)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 700,
    paddingTop: 22,
    paddingBottom: 21
  },

  signUp: {
    color: 'rgba(0, 0, 0, 1)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    marginTop: 30,
    paddingLeft: 98,
    paddingRight: 92
  },

  signupText: {
    fontWeight: 600
  },

  other: {
    //paddingRight: 194,
    //paddingLeft: 200,
    marginTop: 25
  },

  or: {
    color: 'rgba(10, 32, 73, 1)',
    fontFamily: 'Inter',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 500
  },

  otherSign: {
    marginTop: 19,
    paddingLeft: 164,
    paddingRight: 149
  },

  otherText: {
    color: 'rgba(151, 151, 151, 1)',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 600
  },

  boxes: {
    flexDirection: 'row'
  },

  googleBox: {
    width: 148,
    height: 60,
    flexShrink: 0,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(209, 209, 209, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 23
  },

  google_image: {
    width: 24,
    height: 24,
    flexShrink: 0
  },

  facebookBox: {
    width: 148,
    height: 60,
    flexShrink: 0,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(209, 209, 209, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center'
  },

  facebook: {
    width: 24,
    height: 24,
    flexShrink: 0
  },

  footerContainer: {
    alignItems: 'center',
    width: 124,
    height: 6,
    flexShrink: 0,
    borderRadius: 17,
    marginTop: 25.04,
    marginBottom: 28,
    backgroundColor: 'rgba(1, 167, 190, 1)'
  }

});
