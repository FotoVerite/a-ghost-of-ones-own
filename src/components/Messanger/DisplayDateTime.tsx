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
        textAlign: 'center',
        fontSize: 10,
        marginBottom: theme.spacing.p1,
      }}>
      {datetime.format('ddd, MMM DD - hh:mm a')}
    </P>
  );
};

export default DisplayDateTime;
