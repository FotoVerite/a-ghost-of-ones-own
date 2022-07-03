import {Row} from 'components/Grid';
import {Bold, P} from 'components/StyledText';
import React, {FC} from 'react';
import {Image, ImageSourcePropType, ImageStyle, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import theme from 'themes';

type Props = {
  avatarSprite: ImageSourcePropType;
  avatarStyles: ImageStyle;
  index: number;
  name: string;
  message: string;
  setMessageId: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const ExchangeListItem: FC<Props> = ({
  avatarSprite,
  avatarStyles,
  index,
  message,
  name,
  setMessageId,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setMessageId(index);
      }}>
      <Row>
        <Image
          source={avatarSprite}
          style={[
            {
              width: 50,
              height: 50,
              marginRight: theme.spacing.p2,
              overflow: 'hidden',
              aspectRatio: 1,
            },
            avatarStyles,
          ]}
        />
        <View style={{flex: 1}}>
          <Bold>{name}</Bold>
          <P>{message}</P>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default ExchangeListItem;
