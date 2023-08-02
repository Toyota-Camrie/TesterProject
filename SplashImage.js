import { StyleSheet, Image } from 'react-native';

export default function SplashImage({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 201.165,
    height: 134.659,
    flexShrink: 0
  },
});
