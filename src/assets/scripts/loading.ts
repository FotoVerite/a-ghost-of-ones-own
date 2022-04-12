import {ScriptType} from 'components/utility/Subtitle';
import sound1 from 'components/Phone/assets/2.mp3';
import bassA from 'assets/sounds/notification/door-bell.wav';

const script: ScriptType[] = [
  {
    name: 'Orange',
    color: 'orange',
    text: ['What the hell is this?', 'I never seen this before.'],
    sounds: [{uri: bassA, volume: 200}],
  },
  {
    name: 'White',
    color: 'white',
    text: [`I don't know; It looks custom.`, `Weird Logo.`],
    sounds: [{uri: bassA, volume: 200}],
  },
  {
    name: 'Orange',
    color: 'orange',
    text: ['You going to be able to hack it?'],
    sounds: [{uri: bassA, volume: 200}],
  },
  {
    name: 'White',
    color: 'white',
    text: [`We'll have to see.`, `But hopefully, I can smell money.`],
    sounds: [{uri: bassA, volume: 200}],
  },
];

export default script;
