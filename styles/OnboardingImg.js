import { StyleSheet, Image } from 'react-native';

export default function OnboardingImg({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 414,
    height: 487,
    flexShrink: 0
  }
});
