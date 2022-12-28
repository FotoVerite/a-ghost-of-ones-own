import React, {FC, useContext, useEffect} from 'react';
import {FlatList, ListRenderItem, StatusBar, View} from 'react-native';
import {Layout} from 'components/Grid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  ApplicationContext,
  DEFAULT_SETTINGS_OPTIONS,
  optionValueType,
} from 'contexts/app';
import OptionCheckbox from './OptionCheckbox';
import OptionSelect from './OptionSelect';
import OptionSlider from './OptionSlider';
import {P} from 'components/StyledText';
import theme from 'themes';
import Header from './Header';

const Settings: FC = () => {
  const insets = useSafeAreaInsets();
  const appContext = useContext(ApplicationContext);
  const settings = appContext.settings.state;

  const renderOption: ListRenderItem<{
    name: string;
    value: optionValueType;
  }> = ({item, index}) => {
    const optionName = item.name;
    const optionType = DEFAULT_SETTINGS_OPTIONS[optionName]?.type;
    if (optionType != null) {
      if (optionType === 'checkbox') {
        return (
          <OptionCheckbox
            optionName={optionName}
            checked={settings.get(optionName) as boolean}
          />
        );
      } else if (optionType === 'select') {
        return (
          <OptionSelect
            optionName={optionName}
            optionValue={settings.get(optionName) as string}
          />
        );
      } else if (optionType === 'range') {
        return (
          <OptionSlider
            optionName={optionName}
            optionValue={settings.get(optionName) as number}
          />
        );
      } else {
        return <></>;
      }
    } else {
      return <></>;
    }
  };
  return (
    <Layout style={{backgroundColor: 'black', flex: 1}}>
      <StatusBar hidden={false} barStyle={'light-content'} />
      <View
        style={[
          {
            justifyContent: 'center',
            backgroundColor: '#e5e2e2',
            width: '100%',
            paddingTop: insets.top,
            height: '100%',
            padding: theme.spacing.p2,
          },
        ]}>
        <Header />
        <FlatList
          style={{
            paddingBottom: 0,
            flexGrow: 1,
          }}
          initialNumToRender={25}
          // onViewableItemsChanged={onViewRef.current}
          data={Array.from(settings, ([name, value]) => ({name, value}))}
          renderItem={renderOption}
          keyExtractor={(item: any, index) => index + ''}
          ItemSeparatorComponent={props => {
            return (
              <View
                style={{
                  height: 1,
                  marginVertical: 5,
                  backgroundColor: 'red',
                }}
              />
            );
          }}
        />
      </View>
    </Layout>
  );
};

export default Settings;
