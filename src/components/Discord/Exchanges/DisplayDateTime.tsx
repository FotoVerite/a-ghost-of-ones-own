import React, {FC} from 'react';
import {P} from 'components/StyledText';
import {Moment} from 'moment';
import theme from 'themes';

type Props = {
  datetime: Moment;
};

const DisplayDateTime: FC<Props> = ({datetime}) => {
  return (
    <P
      style={{
        color: '#9b9696',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
      }}>
      {datetime.format('MMMM DD, YYYY')}
    </P>
  );
};

export default DisplayDateTime;
