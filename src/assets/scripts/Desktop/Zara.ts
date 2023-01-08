import {ScriptType} from 'components/utility/SubtitleContainer/context/SubtitleContext';
import {ScriptConstants} from '../ScriptConstants';

const ZaraNotification: ScriptType = {
  name: 'What is this notification about Zara about?',
  style: {backgroundColor: 'black', marginTop: -5, padding: 5},
  subtitles: [
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`Okay, what's that about`],
      delay: 3000,
    },

    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [`I`],
      delay: 1000,
    },

    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [`I have no idea.`],
      delay: 1000,
    },
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`Sure you don't.`],
    },
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [
        `Mhmmmm, you know I can call the doorman whenever I want and say there's a strange man in this apartment.`,
      ],
    },
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`You wouldn't.`],
    },
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [`Just don't try me Scott. I'm fucking tired.`, `And worried.`],
    },
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`Me too.`],
    },
  ],
};

export default ZaraNotification;
