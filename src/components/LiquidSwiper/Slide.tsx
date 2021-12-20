import Color from 'color';
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Svg, {RadialGradient, Defs, Rect, Stop} from 'react-native-svg';

export interface SlideProps {
  width: number;
  slide: {
    color: string;
    title: string;
    description: string;
    picture: ReturnType<typeof require>;
  };
}

const Slide = ({
  width,
  slide: {picture, color, title, description},
}: SlideProps) => {
  const SIZE = width - 75;

  const lighterColor = Color(color).lighten(0.8).toString();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      ...StyleSheet.absoluteFillObject,
    },
    image: {
      width: width - 32,
      height: width - 32,
    },
  });

  return (
    <>
      <View style={styles.container}>
        <Image source={picture} defaultSource={picture} style={styles.image} />
      </View>
    </>
  );
};

export default Slide;
