import {ScriptType} from 'components/utility/SubtitleContainer/context/SubtitleContext';

const Loading: ScriptType = {
  name: 'Why is there a a ghost?',
  subtitles: [
    {
      name: 'Scott',
      color: '#0076FF',
      text: ['What the FUCK?!'],
      specialAnimation: new Map([['grow', [2]]]),
      delay: 1000,
    },
    {
      name: 'Scott',
      color: '#0076FF',
      text: ['This is an Iphone right.'],
    },
    {
      name: 'Zara',
      color: '#FF00C6',
      text: ['Yessssss', 'Why is there a ghost?'],
    },
    {
      name: 'Scott',
      color: '#0076FF',
      text: [
        `I mean he could have jailbreaked it. But he wouldn't know how. Nor care too.`,
      ],
    },
    {
      name: 'Zara',
      color: '#FF00C6',
      text: ['Could it not be his phone?'],
    },
    {
      name: 'Scott',
      color: '#0076FF',
      text: [
        `That would be even weirder.`,
        `Grrrr, it been 72 hours, no word, nothing right?`,
      ],
    },
    {
      name: 'Zara',
      color: '#FF00C6',
      text: [
        'He missed our coffee date.',
        `I don't know, I don't understand any of it. He disappeared into thin air`,
      ],
    },
  ],
};

export default Loading;
