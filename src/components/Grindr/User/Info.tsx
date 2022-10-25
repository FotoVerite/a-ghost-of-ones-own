import React, {FC} from 'react';
import {View} from 'react-native';

import {P} from 'components/StyledText';
import theme from 'themes';
import Tag from './tag';
import {Row} from 'components/Grid';
import Field from './field';
import {UserDataType} from '../context/avatars';

const Info: FC<{user: UserDataType}> = ({user}) => {
  return (
    <>
      <Row
        style={{
          flexGrow: 0,
          marginHorizontal: theme.spacing.p2,
        }}>
        <P size={'ml'} style={{color: 'white'}}>
          {user.username} {user.age}
        </P>
      </Row>
      <Row
        style={{
          flexGrow: 0,
          marginHorizontal: theme.spacing.p1,
        }}>
        {user.tags &&
          user.tags.map((tag, index) => (
            <Tag tag={tag} key={`${tag}-${index}`} />
          ))}
      </Row>
      <P
        style={{
          paddingVertical: theme.spacing.p1,
          paddingHorizontal: theme.spacing.p2,
          color: 'white',
        }}>
        {user.description}
      </P>
      <View
        style={{
          marginHorizontal: theme.spacing.p2,
        }}>
        {user.fields &&
          Object.keys(user.fields).map(name => (
            <Field
              name={name}
              value={user.fields[name]}
              key={`${name}-field`}
            />
          ))}
      </View>
    </>
  );
};

export default Info;
