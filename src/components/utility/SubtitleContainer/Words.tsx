import React, {FC, useContext, useEffect, useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import theme from 'themes';
import {SubtitleContext, SubtitleType} from './context/SubtitleContext';
import Word from './Word';

const Words: FC = () => {
  const subtitleContext = useContext(SubtitleContext);
  const block =
    subtitleContext.subtitles == null
      ? ({} as SubtitleType)
      : subtitleContext.subtitles[subtitleContext.currentBlockIndex.state];
  const line = block.text[subtitleContext.currentLineIndex.state];
  const charCount = line.split(' ').join('').length;
  const wordArray = line.split(' ');
  const [showLine, setShowLine] = useState(false);
  let indexInLineStarts = 0;

  useEffect(() => {
    subtitleContext.currentLineVisible.value = 1;
  }, []);

  const animationStyle = useAnimatedStyle(() => {
    return {
      opacity: subtitleContext.currentLineVisible.value,
    };
  });

  return (
    <TouchableWithoutFeedback onPress={() => setShowLine(true)}>
      <Animated.View
        style={[
          {
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'flex-end',
            padding: theme.spacing.p1,
          },
          animationStyle,
        ]}>
        {wordArray.map((w, i) => {
          const thisWordIndexStartsAt = indexInLineStarts;
          indexInLineStarts += w.length;
          return (
            <Word
              color={block.color}
              word={w}
              wordIndex={i}
              charCount={charCount}
              indexInLine={thisWordIndexStartsAt}
              key={`${subtitleContext.currentBlockIndex.state}-${i}-${w}`}
              currentLineIndex={subtitleContext.currentLineIndex.state}
              showLine={showLine}
            />
          );
        })}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Words;
