import {ScriptType} from 'components/utility/SubtitleContainer/context/SubtitleContext';

const ZaraNotification: ScriptType = {
  name: 'Is it Zara or Zola?',
  style: {backgroundColor: 'black', marginTop: -5, padding: 5},
  subtitles: [
    {
      name: 'Matt',
      color: '#0076FF',
      text: [`Okay, what's that about`],
      delay: 3000,
    },

    {
      name: 'Zara',
      color: '#FF00C6',
      text: [`I`],
      delay: 1000,
    },

    {
      name: 'Zara',
      color: '#FF00C6',
      text: [`I have no idea.`],
      delay: 1000,
    },
    {
      name: 'Matt',
      color: '#0076FF',
      text: [`Sure you don't`],
    },
  ],
};

export default ZaraNotification;
