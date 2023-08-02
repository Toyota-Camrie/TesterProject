import React from 'react';
import { View, StyleSheet } from 'react-native';

import SplashImage from './styles/SplashImage';

const LogoImage = require('./images/logo.png');

export default function App() {
  return (
    <View style = {styles.container}>
      <View style = {styles.imageContainer}>
        <SplashImage placeholderImageSource = { LogoImage } />
      </View>

      <View style = {styles.footerContainer}>
        <View style = {styles.rectangle}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.74)',
    height: '100%'
  },

  imageContainer: {
    //paddingRight: 106.42,
    paddingTop: 370.38
  },

  image: {
    width: 201.165,
    height: 134.659,
    flexShrink: 0
  },

  footerContainer: {
    alignItems: 'center',
    width: 124,
    height: 6,
    flexShrink: 0,
    borderRadius: 17,
    marginTop: 356.97,
    marginBottom: 28,
    backgroundColor: 'rgba(1, 167, 190, 1)'
  }
});