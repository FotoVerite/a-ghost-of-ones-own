import React, {FC, useContext, useEffect, useState} from 'react';
import {View} from 'react-native';

import {
  ApplicationContext,
  DEFAULT_SETTINGS_OPTIONS,
  optionValueType,
  SelectOptionType,
} from 'contexts/app';
import {P} from 'components/StyledText';
import {Picker} from '@react-native-picker/picker';

const OptionSelect: FC<{optionName: string; optionValue: optionValueType}> = ({
  optionName,
  optionValue,
}) => {
  const appContext = useContext(ApplicationContext);
  const [value, setValue] = useState(optionValue);

  useEffect(() => {
    appContext.settings.update(optionName, value);
  }, [value]);

  const items = (items: Array<SelectOptionType>) => {};

  return (
    <View>
      <P>{optionName}</P>
      <Picker
        selectedValue={value}
        onValueChange={(itemValue, itemIndex) => setValue(itemValue)}>
        {DEFAULT_SETTINGS_OPTIONS[optionName].options?.map(item => (
          <Picker.Item
            key={`optionName-${optionValue}`}
            label={item.name}
            value={item.value}
          />
        ))}
      </Picker>
    </View>
  );
};

export default OptionSelect;
