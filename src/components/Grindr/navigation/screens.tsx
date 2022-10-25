import Exchanges from '../Exchanges';
import Grid from '../Grid';
import Messages from '../Messages';
import User from '../User';

// export const SCREENS = {
//   Grid: {
//     title: 'Fresh Meat',
//     component: Grid,
//   },
//   Exchanges: {
//     title: 'Exchanges',
//     component: Exchanges,
//   },
//   Messages: {
//     title: '',
//     component: Grid,
//     transitionSpec: {
//       open: {animation: 'timing', config: {duration: 200}},
//       close: {animation: 'timing', config: {duration: 200}},
//     },
//     shared: (route, otherRoute, showing) => {
//       const {id} = route.params;
//       return [
//         {
//           id: `user.${id}`,
//           resize: 'clip',
//           // align: ''left-top'
//         },
//       ];
//     },
//   },
//   User: {
//     title: '',
//     component: Grid,
//     transitionSpec: {
//       open: {animation: 'timing', config: {duration: 200}},
//       close: {animation: 'timing', config: {duration: 200}},
//     },
//     shared: (route, otherRoute, showing) => {
//       const {id} = route.params;
//       return [
//         {
//           id: `user.${id}`,
//           resize: 'clip',
//           // align: ''left-top'
//         },
//       ];
//     },
//   },
// };

export const GRIDSCREENS = {
  Grid: {
    title: 'Fresh Meat',
    component: Grid,
  },
  Exchanges: {
    title: 'Exchanges',
    component: Exchanges,
  },
  User: {
    title: '',
    component: User,
    transitionSpec: {
      open: {animation: 'timing', config: {duration: 200}},
      close: {animation: 'timing', config: {duration: 200}},
    },
    shared: (route, otherRoute, showing) => {
      const {id} = route.params;
      return [
        {
          id: `user.${id}`,
          resize: 'clip',
          align: 'left-top',
        },
      ];
    },
  },
};

export const MESSAGES_SCREENS = {
  Messages: {
    title: 'Messages',
    component: Messages,
  },
  Exchanges: {
    title: 'Exchanges',
    component: Exchanges,
  },
  // User: {
  //   title: '',
  //   component: Grid,
  //   transitionSpec: {
  //     open: {animation: 'timing', config: {duration: 200}},
  //     close: {animation: 'timing', config: {duration: 200}},
  //   },
  //   shared: (route, otherRoute, showing) => {
  //     const {id} = route.params;
  //     return [
  //       {
  //         id: `user.${id}`,
  //         resize: 'clip',
  //         // align: ''left-top'
  //       },
  //     ];
  //   },
  // },
};

export type screenParams = {
  Grid: undefined;
  Messages: undefined;
  User: {id: number};
  Exchanges: {id: number};
};

export type PhotoAppRoute = keyof typeof SCREENS;

export type PhotoAppNavigationParamList = {} & {
  [P in keyof typeof SCREENS]: screenParams[P];
};
