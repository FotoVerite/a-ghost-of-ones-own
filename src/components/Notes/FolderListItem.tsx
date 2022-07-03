import {Row} from 'components/Grid';
import {Bold, P} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {TouchableHighlight, View} from 'react-native';
import {FolderProps, NoteContext} from './context/NoteContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from 'themes';
Icon.loadFont();

const NoteListItem: FC<{folder: FolderProps}> = ({folder}) => {
  const context = useContext(NoteContext);
  return (
    <TouchableHighlight onPress={() => context.folder.set(folder)}>
      <Row
        style={{
          alignItems: 'center',
        }}>
        <Icon
          name="folder"
          color="yellow"
          size={20}
          style={{marginEnd: theme.spacing.p1}}
        />
        <P style={styles.fonts}>{folder.title}</P>
        <Row style={{flexGrow: 0, marginLeft: 'auto', alignItems: 'center'}}>
          <P style={styles.amount}>{folder.notes.length}</P>
          <Icon name="chevron-right" color="gray" size={20} />
        </Row>
      </Row>
    </TouchableHighlight>
  );
};

const styles = {
  fonts: {color: 'white', fontSize: 20},
  amount: {color: 'gray', fontSize: 16, marginEnd: theme.spacing.p2},
};

export default NoteListItem;
