import React, {FC} from 'react';
import {Text, View} from 'react-native';

import Letter from './Letter';

const Word: FC<{
  color: string;
  currentLineIndex: number;
  word: string;
  wordIndex: number;
  charCount: number;
  indexInLine: number;
  showLine: boolean;
}> = ({
  color,
  charCount,
  currentLineIndex,
  indexInLine,
  showLine,
  word,
  wordIndex,
}) => {
  const letterArray = word.split('');
  return (
    <View style={{flexWrap: 'nowrap', flexDirection: 'row', marginRight: 6}}>
      {letterArray.map((l, i) => (
        <Letter
          color={color}
          charCount={charCount}
          letter={l}
          key={`${currentLineIndex}-${wordIndex}-${i}-${l}`}
          indexInLine={indexInLine + i}
          showLine={showLine}
          wordIndex={wordIndex}
        />
      ))}
    </View>
  );
};

export default Word;
