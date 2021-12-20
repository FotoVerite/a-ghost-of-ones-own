import React, {FC, useState} from 'react';

import Slider from './Slider';
import Slide from './Slide';
import {Dimensions, View} from 'react-native';
import boc from './assets/boc.jpeg';
import boc2 from './assets/boc2.jpeg';
import boc3 from './assets/boc3.jpeg';
import boc4 from './assets/boc4.jpeg';

const slides = [
  {
    color: '#F2A1AD',
    title: 'Dessert Recipes',
    description:
      'Hot or cold, our dessert recipes can turn an average meal into a memorable event',
    picture: boc,
  },
  {
    color: '#0090D6',
    title: 'Healthy Foods',
    description:
      'Discover healthy recipes that are easy to do with detailed cooking instructions from top chefs',
    picture: boc2,
  },
  {
    color: '#F2A1AD',
    title: 'Dessert Recipes',
    description:
      'Hot or cold, our dessert recipes can turn an average meal into a memorable event',
    picture: boc3,
  },
  {
    color: '#F2A1AD',
    title: 'Dessert Recipes',
    description:
      'Hot or cold, our dessert recipes can turn an average meal into a memorable event',
    picture: boc4,
  },
];
export const assets = slides.map(({picture}) => picture);

const LiquidSwipe: FC<{}> = () => {
  const [index, setIndex] = useState(0);
  const prev = slides[index - 1];
  const next = slides[index + 1];
  const {width, height} = Dimensions.get('screen');
  const containerWidth = width < height ? width * 0.7 : height * 0.7;

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <View
        style={{
          width: containerWidth,
          height: containerWidth,
          borderColor: 'white',
          borderWidth: 16,
          transform: [{rotateZ: '5deg'}],
        }}>
        <Slider
          width={containerWidth}
          height={containerWidth}
          key={index}
          index={index}
          setIndex={setIndex}
          prev={prev && <Slide slide={prev} width={containerWidth} />}
          next={next && <Slide slide={next} width={containerWidth} />}>
          <Slide slide={slides[index]!} width={containerWidth} />
        </Slider>
      </View>
    </View>
  );
};

export default LiquidSwipe;
