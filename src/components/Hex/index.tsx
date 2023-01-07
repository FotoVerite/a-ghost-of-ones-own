import React, {FC, useContext, useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Layout} from 'components/Grid';

import {answers} from './context/answers';
import Game from './Game';
import HexContextProvider from './context/hexContext';
import Header from './Header';
import Info from './Info';
import HexNotification from './HexNotification';
import {ApplicationContext} from 'contexts/app';
import HexFirstOpen from 'assets/scripts/Hex/HexFirstOpen';

const Hex: FC = () => {
  const context = useContext(ApplicationContext);

  useEffect(() => {
    if (context.triggers.state.get('HEXES_FIRST_OPEN') === false) {
      context.script.set(HexFirstOpen);
      context.triggers.update('HEXES_FIRST_OPEN', true);
    }
  }, []);
  return (
    <Layout style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar hidden={false} barStyle={'light-content'} />
      <HexContextProvider
        answers={answers}
        answered={[]}
        letters={['N', 'D', 'E', 'C', 'O', 'T', 'U']}
        points={0}>
        <Header />
        <Game />
        <Info />
        <HexNotification />
      </HexContextProvider>
    </Layout>
  );
};

export default Hex;
