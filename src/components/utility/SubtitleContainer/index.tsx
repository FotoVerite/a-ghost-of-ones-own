import React, {FC, useContext} from 'react';
import {View} from 'react-native';

import theme from 'themes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Animated from 'react-native-reanimated';
import {ScriptType, SubtitleContext} from './context/SubtitleContext';
import Words from './Words';

export type ScriptTriggerType = {type: 'script'; script: ScriptType[]};

const SubtitlesContainer: FC = () => {
  const insets = useSafeAreaInsets();

  const context = useContext(SubtitleContext);
  if (context.subtitles)
    return (
      <Animated.View
        style={{
          position: 'absolute',
          bottom: insets.bottom,
          left: '10%',
          height: '15%',
          width: '80%',
        }}>
        <View
          style={[
            {
              marginTop: theme.spacing.p2,
            },
            context.script?.style,
          ]}>
          {!context.currentLineFinished.state && <Words />}
        </View>
      </Animated.View>
    );
  else {
    return <></>;
  }
};

export default SubtitlesContainer;
