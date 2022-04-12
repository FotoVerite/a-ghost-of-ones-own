import React, {FC, useContext, useEffect, useState} from 'react';
import {ColorValue, View} from 'react-native';
import {P} from 'components/StyledText';

import theme from 'themes';
import {ApplicationContext, SoundObjetType} from 'contexts/app';
import SpeechSound from './SpeechSounds';

export type ScriptType = {
  name: string;
  color: ColorValue;
  text: string[];
  sounds?: SoundObjetType[];
};
export type ScriptTriggerType = {type: 'script'; script: ScriptType[]};
const indexesStartState = {
  char: 0,
  word: 0,
  line: 0,
  script: 0,
  resetLine: false,
  speed: 50,
  color: 'white' as ColorValue,
  finished: false,
};

const Subtitles: FC = () => {
  const context = useContext(ApplicationContext);
  const [scriptIndex, setScriptIndex] = useState(0);
  const [indexes, setIndexes] = useState(indexesStartState);
  const [force, setForce] = useState(0);

  const [currentLine, setCurrentLine] = useState('');
  const [wordsToDisplay, setWordsToDisplay] = useState<string[]>([]);

  let word: string = '';
  let line: string[] = [];
  let scriptPart: ScriptType = {};
  let char: string = '';

  const setNextChar = () => {
    setCurrentLine(s => s + (indexes['char'] === 0 ? ` ${char}` : `${char}`));
    const newIndex = Object.assign({}, indexes, {
      char: 0,
      speed: 20,
      color: context.script.state[indexes['script']].color,
    });
    if (word.length === indexes['char'] + 1) {
      newIndex['speed'] = 35;
      if (line.length === indexes['word'] + 1) {
        newIndex['word'] = 0;
        newIndex['resetLine'] = true;
        if (scriptPart.text.length === indexes['line'] + 1) {
          newIndex['line'] = 0;
          if (context.script.state.length === indexes['script'] + 1) {
            newIndex['script'] = 0;
            newIndex['finished'] = true;
          } else {
            newIndex['script'] = indexes['script'] + 1;
          }
        } else {
          newIndex['line'] = indexes['line'] + 1;
        }
      } else {
        newIndex['word'] = indexes['word'] + 1;
      }
    } else {
      newIndex['char'] = indexes['char'] + 1;
    }
    setIndexes(newIndex);
  };

  useEffect(() => {
    let t: NodeJS.Timeout | undefined = undefined;
    if (scriptPart == null) {
      return;
    }
    if (context.script.state.length != 0) {
      scriptPart = context.script.state[indexes['script']];
      line = scriptPart.text[indexes['line']].split(' ');
      word = line[indexes['word']];
      char = word[indexes['char']];
      if (indexes['resetLine']) {
        t = setTimeout(() => {
          setCurrentLine('');
        }, 2000);
        setTimeout(() => {
          setIndexes(i =>
            Object.assign({}, i, {
              resetLine: false,
            }),
          );
        }, 2500);
      } else {
        t = setTimeout(() => setNextChar(), indexes['speed']);
      }
    }
    return () => (t ? clearTimeout(t) : undefined);
  }, [context.script.state]);

  useEffect(() => {
    let t: NodeJS.Timeout | undefined = undefined;
    if (scriptPart == null) {
      return;
    }
    if (context.script.state.length != 0) {
      scriptPart = context.script.state[indexes['script']];
      line = scriptPart.text[indexes['line']].split(' ');
      word = line[indexes['word']];
      char = word[indexes['char']];
      if (indexes['finished']) {
        t = setTimeout(() => {
          setCurrentLine('');
          context.script.set([]);
          setIndexes(indexesStartState);
        }, 1000);
        t = setTimeout(() => {
          setIndexes(i => Object.assign({}, i, {finished: false}));
        }, 1200);
        return;
      }
      if (indexes['resetLine']) {
        t = setTimeout(() => {
          setCurrentLine('');
        }, 1000);
        t = setTimeout(() => {
          setIndexes(i => Object.assign({}, i, {resetLine: false}));
        }, 1200);
      } else {
        t = setTimeout(() => setNextChar(), indexes['speed']);
      }
    }
    return () => (t ? clearTimeout(t) : undefined);
  }, [indexes]);

  // useEffect(() => {
  //   let t: NodeJS.Timeout | undefined = undefined;
  //   if (context.script.state.length == 0 || charIndex === 0) {
  //     return;
  //   }

  //   if (word.length === charIndex + 1) {
  //     t = setTimeout(() => setNextChar('word'), 100);
  //   } else {
  //     console.log('called');
  //     t = setTimeout(() => setNextChar(), 100);
  //   }

  //   return () => (t ? clearTimeout(t) : undefined);
  // }, [charIndex]);

  // useEffect(() => {
  //   let t: NodeJS.Timeout | undefined = undefined;
  //   if (context.script.state.length == 0 || wordIndex === 0) {
  //     return;
  //   }
  //   if (line.length === wordIndex) {
  //     setLineIndex(i => i + 1);
  //   } else {
  //     t = setTimeout(() => setNextChar('line'), 200);
  //   }

  //   return () => (t ? clearTimeout(t) : undefined);
  // }, [wordIndex]);

  // useEffect(() => {
  //   let t: NodeJS.Timeout | undefined = undefined;
  //   if (context.script.state.length == 0 || lineIndex === 0) {
  //     return;
  //   }
  //   if (scriptPart.text.length === scriptIndex) {
  //     setScriptIndex(i => i + 1);
  //   } else {
  //     t = setTimeout(() => setNextChar('script'), 1000);
  //   }

  //   return () => (t ? clearTimeout(t) : undefined);
  // }, [lineIndex]);

  // useEffect(() => {
  //   let t: NodeJS.Timeout | undefined = undefined;
  //   if (context.script.state.length == 0 || scriptIndex === 0) {
  //     return;
  //   }
  //   setLineIndex(0);
  //   if (scriptPart.text.length === scriptIndex) {
  //     setScriptIndex(0);
  //     t = setTimeout(() => setNextChar(), 1000);
  //   } else {
  //     t = setTimeout(() => setNextChar(), 100);
  //   }
  //   return () => (t ? clearTimeout(t) : undefined);
  // }, [scriptIndex]);

  if (currentLine != '')
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          height: '20%',
          width: '80%',
        }}>
        <P
          size={'l'}
          style={{
            color: indexes['color'],
            textAlign: 'left',
            marginTop: theme.spacing.p2,

            marginStart: theme.spacing.p2,
          }}>
          {currentLine}
        </P>
      </View>
    );
  else {
    return <></>;
  }
};

export default Subtitles;
