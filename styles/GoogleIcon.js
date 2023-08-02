import { StyleSheet, Image } from 'react-native';

export default function GoogleIcon({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.google_image} />
  );
}

const styles = StyleSheet.create({
  google_image: {
    width: 24,
    height: 24,
    flexShrink: 0
  },
});
