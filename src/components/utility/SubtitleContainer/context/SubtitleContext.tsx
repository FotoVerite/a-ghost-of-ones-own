import {ApplicationContext} from 'contexts/app';
import React, {FC, ReactNode, useContext, useEffect, useState} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {SharedValue, useSharedValue} from 'react-native-reanimated';

export type ScriptType = {
  name: string;
  style?: ViewStyle;
  delay?: number;
  subtitles: SubtitleType[];
};
export type SubtitleType = {
  name: string;
  color: string;
  text: string[];
  specialAnimation?: Map<string, number[]>;
  style?: TextStyle;
  delay?: number;
};

export type SubtitleContextTypeDigest = {};

export type SubtitleContextTypeDigested = {
  currentBlockIndex: {
    set: React.Dispatch<React.SetStateAction<number>>;
    state: number;
  };
  currentLineIndex: {
    set: React.Dispatch<React.SetStateAction<number>>;
    state: number;
  };
  currentLineVisible: SharedValue<number>;
  currentBlockFinished: {
    set: React.Dispatch<React.SetStateAction<boolean>>;
    state: boolean;
  };
  currentLineFinished: {
    set: React.Dispatch<React.SetStateAction<boolean>>;
    state: boolean;
  };
  script: ScriptType | undefined;
  subtitles: SubtitleType[] | undefined;
  speed: number;
};
//defaults for empty app
export const SubtitleContext = React.createContext<SubtitleContextTypeDigested>(
  {},
);

const SubtitleContextProvider: FC<SubtitleContextTypeDigest> = props => {
  const context = useContext(ApplicationContext);
  const script = context.script.state;
  const subtitles = script?.subtitles;
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentBlockFinished, setCurrentBlockFinished] = useState(false);
  const [currentLineFinished, setCurrentLineFinished] = useState(false);
  const blockLength =
    subtitles == null ? 0 : subtitles[currentBlockIndex]?.text.length - 1;
  const [speed, setSpeed] = useState(50);

  const currentLineVisible = useSharedValue(1);

  useEffect(() => {
    if (subtitles && subtitles.length > 0) {
      setCurrentBlockFinished(false);
      setCurrentBlockIndex(0);
      setCurrentLineIndex(0);
      setCurrentLineFinished(false);
    }
  }, [subtitles]);

  useEffect(() => {
    if (!currentBlockFinished) {
      return;
    }
    if (subtitles && subtitles.length - 1 === currentBlockIndex) {
      context.script.set(undefined);
      setCurrentBlockFinished(false);
      setCurrentBlockIndex(0);
      setCurrentLineIndex(0);
      setCurrentLineFinished(false);
    } else {
      setCurrentBlockIndex(c => (c += 1));
      setCurrentBlockFinished(false);
      setCurrentLineIndex(0);
    }
  }, [currentBlockFinished]);

  useEffect(() => {
    //Breakpoint if the last subtitle only had one line
    if (currentLineIndex === 0) {
      setCurrentLineFinished(false);
    } else {
      setCurrentLineFinished(false);
    }
  }, [currentBlockIndex]);

  useEffect(() => {
    if (!currentLineFinished) {
      return;
    }

    if (currentLineIndex === blockLength) {
      setCurrentBlockFinished(true);
    } else {
      setCurrentLineIndex(c => (c += 1));
      setCurrentLineFinished(false);
    }
  }, [currentLineFinished]);

  return (
    <SubtitleContext.Provider
      value={{
        currentBlockIndex: {
          state: currentBlockIndex,
          set: setCurrentBlockIndex,
        },
        currentLineIndex: {
          state: currentLineIndex,
          set: setCurrentLineIndex,
        },
        currentLineFinished: {
          state: currentLineFinished,
          set: setCurrentLineFinished,
        },
        currentLineVisible: currentLineVisible,
        currentBlockFinished: {
          state: currentBlockFinished,
          set: setCurrentBlockFinished,
        },
        script: script,
        subtitles: subtitles,
        speed: speed,
      }}>
      {props.children}
    </SubtitleContext.Provider>
  );
};

export default SubtitleContextProvider;
export const SubtitleContextConsumer = SubtitleContext.Consumer;
