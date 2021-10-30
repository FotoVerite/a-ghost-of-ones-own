import {Bold} from 'components/StyledText';
import React, {FC} from 'react';
import {
  ColorValue,
  Image,
  Touchable,
  TouchableHighlight,
  View,
} from 'react-native';
import styled from 'styled-components/native';
import {NoteProps} from './Note';

type Props = {
  note: Element;
  title: string;
  setter: React.Dispatch<React.SetStateAction<NoteProps | undefined>>;
};

const NoteListItem: FC<Props> = ({note, setter, title}) => {
  return (
    <TouchableHighlight onPress={() => setter({title: title, note: note})}>
      <Bold style={{color: 'gray'}}>{title}</Bold>
    </TouchableHighlight>
  );
};

export default NoteListItem;
