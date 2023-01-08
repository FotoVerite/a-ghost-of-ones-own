import React, {FC, useContext} from 'react';
import {Dimensions, View} from 'react-native';

import theme from 'themes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import {ScriptType, SubtitleContext} from './context/SubtitleContext';
import Words from './Words';
import {Row} from 'components/Grid';
import {Button} from 'react-native-elements';
import {BlurView} from 'rn-id-blurview';
import {white} from 'components/Notes/notes/white';

export type ScriptTriggerType = {type: 'script'; script: ScriptType[]};

const SubtitlesContainer: FC = () => {
  const insets = useSafeAreaInsets();

  const context = useContext(SubtitleContext);
  const {width, height} = Dimensions.get('window');

  if (context.subtitles)
    return (
      <Animated.View
        style={{
          position: 'absolute',
          bottom: insets.bottom + theme.spacing.p1,
          width: '90%',
          left: '5%',
          height: height - (insets.bottom + theme.spacing.p1 + insets.top),
          zIndex: 20,
        }}>
        <Row
          style={{
            justifyContent: 'flex-end',
            backgroundColor: '#41404058',
            borderBottomWidth: 1,
            borderColor: '#98939357',
            height: 40,
            flexGrow: 0,
          }}>
          <Button
            onPress={() => context.skip.set(true)}
            title="Skip"
            style={{marginStart: 'auto', flexGrow: 0}}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </Row>
        <View style={{flexGrow: 1}}></View>
        <View
          style={[
            {
              marginTop: theme.spacing.p2,
              borderWidth: 2,
              borderColor: '#ffffff51',
              borderRadius: theme.BorderRadius.small,
              height: 100,
              shadowColor: '#3a02df',
              shadowOffset: {width: 0, height: 3},
              shadowOpacity: 0.4,
              shadowRadius: 2,
              backgroundColor: '#41404058',
            },
            context.script?.style,
          ]}>
          {!context.currentLineFinished.state && (
            <>
              <BlurView
                style={{
                  zIndex: 0,
                  position: 'absolute',
                  width: width * 0.9 - 8,
                  marginStart: 2,
                  height: 95,
                  top: 0,
                }}
                blurType="dark"
                blurAmount={5}
                reducedTransparencyFallbackColor="white"
                blurRadius={0}
              />
              <Words />
            </>
          )}
        </View>
      </Animated.View>
    );
  else {
    return <></>;
  }
};

export default SubtitlesContainer;
