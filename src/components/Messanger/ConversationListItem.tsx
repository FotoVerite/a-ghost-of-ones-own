import {Row} from 'components/Grid';
import {Bold, P} from 'components/StyledText';
import React, {FC, useContext} from 'react';
import {TouchableOpacity, Image, View} from 'react-native';
import theme from 'themes';
import {MessengerContext, ConversationType} from './context/MessengerContext';

const ConversationListItem: FC<{conversation: ConversationType}> = ({
  conversation,
}) => {
  const context = useContext(MessengerContext);
  return (
    <TouchableOpacity
      onPress={() => {
        context.conversation.set(conversation);
      }}>
      <Row>
        <Image
          source={conversation.avatar}
          style={[
            {
              width: 50,
              height: 50,
              marginRight: theme.spacing.p2,
              overflow: 'hidden',
              aspectRatio: 1,
            },
          ]}
        />
        <View style={{flex: 1}}>
          <Bold>{conversation.name}</Bold>
          <P>{conversation.listDisplayText}</P>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default ConversationListItem;
