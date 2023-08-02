import React from 'react';
import { useCallback } from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';

//Stylesheet
import ExternalStyles from './styles/OnboardingStyles';

//Fonts
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

//SplashScreen and Image
SplashScreen.preventAutoHideAsync();
import OnboardingImage from './styles/OnboardingImg';
const OnboardImage = require('./images/onboarding_img.png');


export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('./fonts/Montserrat-Regular.ttf'),
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
      <View style = {ExternalStyles.container} onLayout = {onLayoutRootView}>
        <View style = {ExternalStyles.imageContainer}>
          <OnboardingImage placeholderImageSource = { OnboardImage } />
        </View>

        <View style = {ExternalStyles.rectangleFrame}>
          <View style = {ExternalStyles.blueRectangle}></View>
          <View style = {ExternalStyles.grayCircle}></View>
        </View>

        <View style = {ExternalStyles.titleBox}>
          <Text style = {ExternalStyles.titleContent}>Digital and Influencer Marketing
Services in one action.</Text>
        </View>

        <View style = {ExternalStyles.textDescription}>
          <Text style = {ExternalStyles.textContent}>Lorem ipsum dolor sit amet, consectetur adipiscing elit leo felis congue elit leo.</Text>
        </View>

        <View style = {ExternalStyles.startButton}>
          <Pressable style = {ExternalStyles.buttonStyle} onPress={() => alert('You pressed a button.')}>
            <Text style = {ExternalStyles.buttonText}>Get Started</Text>
          </Pressable>
        </View>

        <View style = {ExternalStyles.containFooter}>
          <View style = {ExternalStyles.rectangle}></View>
        </View>

      </View>
    </ScrollView>
  )
}