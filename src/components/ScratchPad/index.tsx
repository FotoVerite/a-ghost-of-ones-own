import React, {FC, useEffect} from 'react';
import {Dimensions, View} from 'react-native';

import {Layout} from 'components/Grid';
import Oval from './Oval';
import Svg, {Path, Rect, SvgXml} from 'react-native-svg';
import {P} from 'components/StyledText';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {
  addCurve,
  close,
  createPath,
  interpolatePath,
  mixPath,
  parse,
  serialize,
} from 'react-native-redash';
import {duration} from 'moment';

type Props = {};

const ScratchPad: FC<Props> = () => {
  const {height, width} = Dimensions.get('window');
  const AnimatedPath = Animated.createAnimatedComponent(Path);

  const progress = useSharedValue(0);

  const path1 = parse(
    'M73.1 -129.8C95.4 -99.4 114.6 -80.2 151.3 -53.4C188.1 -26.5 242.5 8.1 238.1 33.8C233.7 59.5 170.5 76.2 126.3 87.2C82.2 98.1 57 103.3 29.5 120.6C2 137.8 -27.9 167.3 -55.1 168.2C-82.3 169.1 -106.9 141.5 -115.9 111.4C-124.8 81.3 -118.1 48.7 -125.1 16.4C-132.2 -15.8 -152.9 -47.6 -157.1 -85.6C-161.2 -123.6 -148.7 -167.8 -119.8 -195.1C-90.8 -222.3 -45.4 -232.7 -10 -217.1C25.4 -201.5 50.8 -160.1 73.1 -129.8',
  );

  const path2 = parse(
    'M138.6 -195.2C174.8 -192.4 196.1 -145.8 211.8 -100.1C227.4 -54.3 237.4 -9.4 215.4 19.5C193.3 48.3 139.2 61 112 103C84.9 145.1 84.7 216.5 56.9 250.4C29.2 284.3 -26.1 280.8 -54.9 245.6C-83.8 210.4 -86.1 143.5 -113.3 103.2C-140.4 62.8 -192.5 49 -205 23.7C-217.6 -1.5 -190.7 -38.1 -169.8 -75C-149 -111.8 -134.2 -148.9 -106.9 -155.7C-79.7 -162.6 -39.8 -139.3 5.7 -148.1C51.2 -157 102.4 -197.9 138.6 -195.2',
  );

  const p1 = parse(
    'M150,0 C150,0 0,75 200,75 C75,200 200,225 200,225 C225,200 200,150 0,150 ',
  );
  const p2 = parse(
    'M150,0 C150,0 0,75 200,75 C75,200 200,225 200,225 C225,200 200,150 0,150 ',
  );
  const animatedProps = useAnimatedProps(() => {
    const d = interpolatePath(progress.value, [0, 1], [path1, path2]);
    return {
      d,
    };
  });

  const renderOvals = () => {
    const ovals = new Array<Element>();
    for (let step = 0; step < 45; step++) {
      let stepIn = 40;
      if (step % 2) {
        stepIn--;
      }
      ovals.push(
        <Oval
          height={height}
          width={width}
          step={step}
          stepIn={stepIn}
          key={`oval-${step}`}
        />,
      );
    }
    return ovals;
  };

  useEffect(() => {
    progress.value = withRepeat(withTiming(1, {duration: 5000}), -1, true);
  }, []);

  return (
    <Layout>
      {renderOvals()}
      <View
        style={{
          backgroundColor: 'red',
          zIndex: 100,
          position: 'absolute',
          top: 500,
        }}>
        <Svg
          viewBox={`0 0 ${width} ${height}`}
          width={100}
          height={100}
          style={{zIndex: 100, position: 'absolute'}}>
          <AnimatedPath
            strokeWidth={27}
            stroke={'#BB004B'}
            animatedProps={animatedProps}
            x={100}
            y={200}
          />
        </Svg>
      </View>
    </Layout>
  );
};

export default ScratchPad;
