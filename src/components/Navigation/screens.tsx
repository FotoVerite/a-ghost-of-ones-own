import Desktop from 'components/Desktop';
import Messenger from 'components/Messanger/';
import Notes from 'components/Notes';

export const SCREENS = {
  Desktop: {
    title: '',
    component: Desktop,
  },
  Messages: {
    title: '',
    component: Messenger,
  },
  Notes: {
    title: 'Notes',
    component: Notes,
  },
};

export type screenParams = {
  Desktop: undefined;
  Messages: {
    id?: number;
  };
  Notes: {id: string};
};

export type NavigationParamList = {} & {
  [P in keyof typeof SCREENS]: screenParams[P];
};
