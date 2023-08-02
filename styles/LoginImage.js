import { StyleSheet, Image } from 'react-native';

export default function LoginImage({ placeholderImageSource }) {
  return (
    <Image source = {placeholderImageSource} style = {styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 168,
    height: 112,
    flexShrink: 0
  },
});
