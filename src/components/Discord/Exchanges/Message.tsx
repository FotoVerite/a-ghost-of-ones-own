import React, {FC, useContext} from 'react';
import {Dimensions, Image, TouchableHighlight, View} from 'react-native';
import {P} from 'components/StyledText';
import {Row} from 'components/Grid';
import theme, {discordTheme} from 'themes';
import context, {
  DiscordContext,
  DiscordExchangeType,
  MessagesType,
} from '../context';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Text} from 'moti';

const Message: FC<{
  message: MessagesType;
  index: number;
}> = ({message, index}) => {
  const {width} = Dimensions.get('window');

  const highlightText = textArray => {};

  // if (message.type === 'text') {
  //   return (
  //     <>
  //       <View
  //         key={`message-${index}`}
  //         style={{
  //           flexWrap: 'wrap',
  //           flexShrink: 1,
  //           flexDirection: 'row',
  //           marginEnd: theme.spacing.p1,
  //         }}>
  //         {message.content
  //           .toString()
  //           .split(/\s|,/)
  //           .map((word: string, index: number) => {
  //             if (word.match(/@\w+/)) {
  //               return (
  //                 <View
  //                   key={`${word}-${index}`}
  //                   style={{
  //                     padding: 20,
  //                     borderRadius: theme.BorderRadius.small,
  //                   }}>
  //                 <P
  //                   key={`${word}-${index}`}
  //                   style={{
  //                     marginEnd: 3,
  //                     color: '#c7baf1',
  //                     backgroundColor: '#c7baf134',
  //                   }}>
  //                   {`${word}`}
  //                 </P>
  //                 </View
  //               );
  //             } else {
  //               return (
  //                 <P
  //                   style={{
  //                     marginEnd: 3,
  //                     color: '#f4f4f4',
  //                     flexWrap: 'wrap',
  //                     flexShrink: 1,
  //                     borderRadius: theme.BorderRadius.small,
  //                   }}>
  //                   {`${word}`}
  //                 </P>
  //               );
  //             }
  //           })}
  //       </View>
  //     </>
  //   );
  // }
  if (message.type === 'text') {
    return (
      <P style={{color: '#f4f4f4', marginEnd: theme.spacing.p1}}>
        {message.content.toString()}
      </P>
    );
  } else if (message.type === 'image') {
    return (
      <Image
        source={message.content}
        style={{
          marginVertical: theme.spacing.p1,
          width: message.options.width || width - 100,
          height: message.options.width || width - 100,
          borderRadius: theme.BorderRadius.small,
        }}
      />
    );
  }
};

export default Message;
