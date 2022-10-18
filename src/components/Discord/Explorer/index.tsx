import React, {FC, useContext, useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {Layout, Row} from 'components/Grid';
import Servers from './Servers';
import Dms from './Dms';
import {DiscordContext} from '../context';
import ServerGroups from './ServerGroups';
import {discordTheme} from 'themes';

const Explorer: FC = () => {
  const context = useContext(DiscordContext);

  return (
    <Layout
      style={{
        backgroundColor: discordTheme.colors.gray50,
        flex: 1,
        margin: 0,
        width: '90%',
      }}>
      <Row>
        <Servers />
        {context.dmsSelected.state && <Dms />}
        {!context.dmsSelected.state && context.server.state && <ServerGroups />}
      </Row>
    </Layout>
  );
};

export default Explorer;
