import {Row} from 'components/Grid';
import {ApplicationContext, SoundObjetType} from 'contexts/app';
import fuse from 'fuse.js';
import Fuse from 'fuse.js';
import React, {FC, useContext, useEffect, useState} from 'react';
import {Dimensions, ScrollView, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Sound from 'react-native-sound';

import theme from 'themes';

export type NoteProps = {
  name?: string;
  play: number;
};

export type SpeechSynthType = {
  [index: string]: Array<{sound: SoundObjetType; player: Sound}>;
};

const SpeechSound: FC<NoteProps> = ({name, play}) => {
  const [textValue, setTextValue] = useState('');
  const context = useContext(ApplicationContext);
  const [sounds, setSounds] = useState<SpeechSynthType>({});
  const [lastPlayed, setLastPlayed] = useState<Sound>();

  const createPart = (sound: SoundObjetType) => {
    const player = new Sound(sound.uri, error => {
      if (error) {
        return;
      }
      sound = Object.assign({}, sound, {duration: player.getDuration()});
    });
    return {player: player, sound: sound};
  };

  useEffect(() => {
    Object.keys(sounds).forEach(part =>
      sounds[part].forEach(s => s.player.release()),
    );
    const hash: {
      [index: string]: Array<{sound: SoundObjetType; player: Sound}>;
    } = {};
    context.script.state
      .filter(s => s.sounds != null)
      .forEach(
        part => (hash[part.name] = part.sounds!.map(s => createPart(s))),
      );

    setSounds(hash);

    return () => {
      Object.keys(sounds).forEach(part =>
        sounds[part].forEach(s => s.player.release()),
      );
    };
  }, [context.script.state]);

  useEffect(() => {
    if (lastPlayed) {
    }
    if (name && sounds && sounds[name] && play) {
      const player = sounds[name][0].player;
      player.setPitch(play > 0 ? play : 0);
      player.setVolume(1).play(success => {
        if (success) {
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
      setLastPlayed(player);
    }
  }, [name, play]);

  return <></>;
};

export default SpeechSound;
