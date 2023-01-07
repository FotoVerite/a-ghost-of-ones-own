import React, {FC, useContext, useEffect, useState} from 'react';
import {View} from 'react-native';

import {ApplicationContext} from 'contexts/app';
import {P} from 'components/StyledText';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Slider} from 'react-native-elements';

const OptionSlider: FC<{optionName: string; optionValue: number}> = ({
  optionName,
  optionValue,
}) => {
  const appContext = useContext(ApplicationContext);
  const [value, setValue] = useState(optionValue);

  useEffect(() => {
    appContext.settings.update(optionName, value);
  }, [value]);

  return (
    <View>
      <P>{optionName}</P>
      <Slider
        value={optionValue}
        onValueChange={setValue}
        maximumValue={100}
        minimumValue={0}
        step={1}
        trackStyle={{height: 10, backgroundColor: 'transparent'}}
        thumbStyle={{height: 20, width: 20, backgroundColor: 'transparent'}}
        thumbProps={{
          children: <Icon name="heartbeat" size={20} color="#f50" />,
        }}
      />
      <P>Value: {value}</P>
    </View>
  );
};

export default OptionSlider;
