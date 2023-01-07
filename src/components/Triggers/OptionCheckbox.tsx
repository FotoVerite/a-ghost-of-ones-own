import React, {FC, useContext, useEffect, useState} from 'react';
import {View} from 'react-native';

import {ApplicationContext} from 'contexts/app';
import {CheckBox} from 'react-native-elements';
import {P} from 'components/StyledText';
import {Row} from 'components/Grid';

const OptionCheckbox: FC<{optionName: string; checked: boolean}> = ({
  optionName,
  checked,
}) => {
  const appContext = useContext(ApplicationContext);
  const [isChecked, setChecked] = useState(checked);

  useEffect(() => {
    appContext.triggers.update(optionName, isChecked);
  }, [isChecked]);

  return (
    <Row style={{alignContent: 'center', alignItems: 'center'}}>
      <P>{optionName}</P>
      <CheckBox
        checked={checked}
        onPress={() => setChecked(checked => !!!checked)}
      />
    </Row>
  );
};

export default OptionCheckbox;
