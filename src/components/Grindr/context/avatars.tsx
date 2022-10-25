export type UserDataType = {
  username: string;
  age: number;
  image: ImageURISource;
  tags: string[];
  description: string;
  fields: {[index: string]: string};
};

import {ImageURISource} from 'react-native';
import mAvatar from '../assets/avatars/mAvatar.png';

const UserData = [
  {
    username: 'M',
    age: 36,
    image: mAvatar,
    tags: ['Anime', 'FWB', 'SaferSex', 'Art', 'Dancing'],
    description: 'something witty',
    fields: {
      Height: '5\'7"',
      Weight: '155',
      Ethnicity: 'Mixed',
      BodyType: 'Built',
      Gender: 'Cis Man',
      Vaccinations: 'Covid',
      'Last Tested': 'Oct 2022',
      G: '5\'7"',
      sd: '155',
      fasf: 'Mixed',
      f: 'Built',
      sds: 'Cis Man',
      SharedArrayBuffer: 'Covid',
      'sd Tested': 'Oct 2022',
    },
  },
  {
    username: 'C',
    image: mAvatar,
    tags: ['Anime', 'FWB', 'SaferSex', 'Art', 'Dancing'],
    description: 'something witty',
    fields: {
      Height: '5\'7"',
      Weight: '155',
      Ethnicity: 'Mixed',
      BodyType: 'Built',
      Gender: 'Cis Man',
      Vaccinations: 'Covid',
      'Last Tested': 'Oct 2022',
    },
  },
  {
    username: '',
    image: mAvatar,
  },
  {
    username: 'M',
    image: mAvatar,
  },
  {
    username: 'C',
    image: mAvatar,
  },
  {
    username: '',
    image: mAvatar,
  },
  {
    username: 'M',
    image: mAvatar,
  },
  {
    username: 'C',
    image: mAvatar,
  },
  {
    username: '',
    image: mAvatar,
  },
  {
    username: 'M',
    image: mAvatar,
  },
  {
    username: 'C',
    image: mAvatar,
  },
  {
    username: '',
    image: mAvatar,
  },
  {
    username: 'M',
    image: mAvatar,
  },
  {
    username: 'C',
    image: mAvatar,
  },
  {
    username: '',
    image: mAvatar,
  },
];

export default UserData;
