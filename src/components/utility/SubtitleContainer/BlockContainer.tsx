import React, {FC, useContext, useEffect, useState} from 'react';
import Animated, {block} from 'react-native-reanimated';
import {SubtitleContext} from './context/SubtitleContext';
import Word from './Word';
import Words from './Words';

const BlockContainer: FC = () => {
  const subtitleContext = useContext(SubtitleContext);
  const subtitles = subtitleContext.subtitles;
  const blockIndex = subtitleContext.currentBlockIndex.state;
  const lineIndex = subtitleContext.currentLineIndex.state;

  const [currentLine, setCurrentLine] = useState('');
  const [currentLineFinished, setCurrentLineFinished] = useState(false);
  let indexInLineStarts = 0;

  useEffect(() => {
    //Breakpoint if the last subtitle only had one line
    if (subtitles && subtitleContext.currentLineIndex.state === 0) {
      setCurrentLineFinished(false);
      setCurrentLine(subtitles[blockIndex].text[lineIndex]);
    } else {
      setCurrentLine('');
      setCurrentLineFinished(false);
    }
  }, [blockIndex]);

  useEffect(() => {
    if (!currentLineFinished) {
      return;
    }

    if (subtitles && lineIndex === subtitles[blockIndex].text.length - 1) {
      subtitleContext.currentBlockFinished.set(true);
    } else {
      subtitleContext.currentLineIndex.set(c => (c += 1));
      setCurrentLineFinished(false);
    }
  }, [currentLineFinished]);

  useEffect(() => {
    if (subtitles) setCurrentLine(subtitles[blockIndex].text[lineIndex]);
  }, [lineIndex]);

  return (
    <Animated.View style={[{flexWrap: 'wrap', flexDirection: 'row'}]}>
      <Words />
    </Animated.View>
  );
};

export default BlockContainer;
