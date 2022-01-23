import {Bold} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {TouchableHighlight} from 'react-native';
import {NoteContext, NoteProps} from './context/NoteContext';

const NoteListItem: FC<NoteProps> = note => {
  const context = useContext(NoteContext);
  return (
    <TouchableHighlight onPress={() => context.note.set(note)}>
      <Bold style={{color: 'gray'}}>{note.title}</Bold>
    </TouchableHighlight>
  );
};

export default NoteListItem;
