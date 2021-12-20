import React, {FC, useContext, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {screenParams} from 'components/Navigation/screens';
import zolaAngry from '../assets/voicemails/zolaAngry.mp3';
import chris from '../assets/voicemails/chris.mp3';
import ghost from '../assets/voicemails/theGhost.mp3';

import {Layout} from 'components/Grid';
import {FlatList, ListRenderItem, View} from 'react-native';
import {NoteText} from 'components/StyledText';
import theme from 'themes';

import moment from 'moment';
import VoiceMailItem, {VoiceMailType} from './VoiceMailItem';

const VoiceMail: FC<{}> = props => {
  const [openedVoiceMailId, setOpenedVoiceMailId] = useState<
    number | undefined
  >(undefined);

  const voicemails = [
    {},
    {
      number: 'Zola',
      length: '1:08',
      area: 'New York, NY',
      date: moment('20210602T0000'),
      transcription: `What the fuck man!\n\nNo really,\nWhat, Where, You, Thinking.\n\nAnd this silent treatment isn't helping.\nStop this shit and fix it.`,
      uri: zolaAngry,
    },
    {
      number: 'Zola',
      length: '1:08',
      area: 'New York, NY',
      date: moment('20210602T0000'),
      transcription: `What the fuck man!\n\nNo really,\nWhat, Where, You, Thinking.\n\nAnd this silent treatment isn't helping.\nStop this shit and fix it.`,
      uri: zolaAngry,
    },
    {
      number: 'Zola',
      length: '1:08',
      area: 'New York, NY',
      date: moment('20210602T0000'),
      transcription: `What the fuck man!\n\nNo really,\nWhat, Where, You, Thinking.\n\nAnd this silent treatment isn't helping.\nStop this shit and fix it.`,
      uri: zolaAngry,
    },
    {
      number: 'Zola',
      length: '1:08',
      area: 'New York, NY',
      date: moment('20210602T0000'),
      transcription: `What the fuck man!\n\nNo really,\nWhat, Where, You, Thinking.\n\nAnd this silent treatment isn't helping.\nStop this shit and fix it.`,
      uri: zolaAngry,
    },
    {
      number: 'Zola',
      length: '1:08',
      area: 'New York, NY',
      date: moment('20210602T0000'),
      transcription: `What the fuck man!\n\nNo really,\nWhat, Where, You, Thinking.\n\nAnd this silent treatment isn't helping.\nStop this shit and fix it.`,
      uri: zolaAngry,
    },
    {
      number: 'Zola',
      length: '1:08',
      area: 'New York, NY',
      date: moment('20210602T0000'),
      transcription: `What the fuck man!\n\nNo really,\nWhat, Where, You, Thinking.\n\nAnd this silent treatment isn't helping.\nStop this shit and fix it.`,
      uri: zolaAngry,
    },
    {
      number: 'Zola',
      length: '1:08',
      area: 'New York, NY',
      date: moment('20210602T0000'),
      transcription: `What the fuck man!\n\nNo really,\nWhat, Where, You, Thinking.\n\nAnd this silent treatment isn't helping.\nStop this shit and fix it.`,
      uri: zolaAngry,
    },
    {
      number: 'Zola',
      length: '1:08',
      area: 'New York, NY',
      date: moment('20210602T0000'),
      transcription: `What the fuck man!\n\nNo really,\nWhat, Where, You, Thinking.\n\nAnd this silent treatment isn't helping.\nStop this shit and fix it.`,
      uri: zolaAngry,
    },
    {
      number: 'Zola',
      length: '1:08',
      area: 'New York, NY',
      date: moment('20210602T0000'),
      transcription: `What the fuck man!\n\nNo really,\nWhat, Where, You, Thinking.\n\nAnd this silent treatment isn't helping.\nStop this shit and fix it.`,
      uri: zolaAngry,
    },

    {
      number: 'Zola',
      length: '00:09',
      area: 'New York, NY',
      date: moment('20210602T0000'),
      transcription: `What the fuck man!\n\nNo really,\nWhat, Where, You, Thinking.\n\nAnd this silent treatment isn't helping.\nStop this shit and fix it.`,
      uri: zolaAngry,
    },
    {
      number: 'Chris',
      length: '00:09',
      area: 'New York, NY',
      date: moment('20210502T172300'),
      transcription: `Yo dude, 

I don't know why I aint texting this.

It's just that...
Look we really should talk face to face about Sunday.

Are you free tonight? `,
      uri: chris,
    },
    {
      number: 'Unkown',
      length: '00:45',
      area: 'New York, NY',
      date: moment('20210502172300'),
      transcription: `The phone isn't haunted.\nIt's just a medium.\nThe message isn't the medium.\nI'm not a fucking digita signal\n\nHow dumb are you? A phone haunted.\n\nha ha ha\n\nObject's can't be haunted.\nThey're objects! Without consciousness. Without a soul.\nWhat would the point be of haunting a rock, a river, a house even!\n

It is people that are haunted.  
By grief,  by longing,  by regret,  and pain. 
Sweet  sweet  pain. 

A rock does not have pain.  
It can contain pain.  But not to itself.  
Only to the people who see it,   who can sense the pain.

Without people there are no ghosts. 

They're just objects.  They go on like me.  

So solid and steady,  and ever here.`,
      uri: ghost,
    },
  ];

  const renderItem: ListRenderItem<VoiceMailType> = ({item, index}) => {
    const props = Object.assign({}, item, {
      index: index,
      openedVoiceMailId: {state: openedVoiceMailId, set: setOpenedVoiceMailId},
    });
    if (item.number == null) {
      return <NoteText size="l">Voicemail</NoteText>;
    } else return <VoiceMailItem {...props} />;
  };
  return (
    <Layout>
      <FlatList
        bounces
        style={{padding: theme.spacing.p1}}
        data={voicemails}
        renderItem={renderItem}
        keyExtractor={(item: any, index) => index + ''}
        ItemSeparatorComponent={props => {
          return (
            <View
              style={{
                height: 1,
                marginVertical: 10,
                backgroundColor: '#0F0F0F',
              }}
            />
          );
        }}
      />
    </Layout>
  );
};

export default VoiceMail;
