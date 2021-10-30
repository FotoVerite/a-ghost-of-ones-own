import donnieDarko from 'assets/images/avatars/donnie-darko.jpg';
const defaultGradiant = ['#363636', '#2e2e2e', '#242323'];
const zolaGradient = ['#fc03d3', '#752368', '#000000'];
const chrisGradiant = ['pink', '#2e2e2e', '#242323'];

import moment from 'moment';
import zola from 'assets/images/avatars/zola.jpg';
import chris from 'assets/images/avatars/chris.jpg';

export const movieNight = {
  name: '🎥 🌌',
  avatar: donnieDarko,
  listDisplayText: 'Every Nightmare you forgotten.',
  exchanges: [
    {
      timeStamp: moment()
        .subtract(4, 'months')
        .set('hour', 20)
        .set('minute', 27),
    },
    {
      name: 'Zola',
      exchange: [
        `We need to do another movie night. I'm clawing the walls just for some type of stimulation.`,
      ],
      avatar: zola,
      color: zolaGradient,
    },
    {
      name: 'Chris',
      exchange: [`Sounds like a normal Saturday night for you.`],
      avatar: chris,
      color: chrisGradiant,
    },
    {
      name: 'Zola',
      exchange: [
        `No, normally I have more 🍷. And witty repitore to keep me amused`,
      ],
      avatar: zola,
      color: zolaGradient,
    },
    {
      exchange: [
        `Sorry, work has kept me busy gurl.`,
        `That and setting up the new office.`,
      ],
    },
    {
      name: 'Zola',
      exchange: [
        `You need to send photos of that soon. I'm pretty sure you haven't event started to decorate it properly.`,
      ],
      avatar: zola,
      color: zolaGradient,
    },
    {
      exchange: [`At least it's cable managed.`],
    },
    {
      name: 'Chris',
      exchange: [`I want to see a new horror film.`],
      avatar: chris,
      color: chrisGradiant,
    },
    {
      name: 'Zola',
      exchange: [
        `It's always horror with you. We've done six of them in a row.`,
      ],
      avatar: zola,
      color: defaultGradiant,
    },
    {
      name: 'Chris',
      exchange: [`We have not.`],
      avatar: chris,
      color: chrisGradiant,
    },
    {
      name: 'Zola',
      exchange: [
        `In the Earth.`,
        `A Field in England.`,
        `Mullholland Drive`,
        `Susperia Both Versions`,
        `A Dark Song`,
      ],
      avatar: zola,
      color: zolaGradient,
    },
    {
      name: 'Chris',
      exchange: [`I only count five.`],
      avatar: chris,
      color: chrisGradiant,
    },
    {
      name: 'Zola',
      exchange: [`The Tenet`],
      avatar: zola,
      color: zolaGradient,
    },
  ],
};
