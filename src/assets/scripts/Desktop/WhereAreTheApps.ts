import {ScriptType} from 'components/utility/SubtitleContainer/context/SubtitleContext';
import {ScriptConstants} from '../ScriptConstants';

const ZaraOrZola: ScriptType = {
  name: `Zara or Zola`,
  subtitles: [
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`Okay, seriously what is this about?`],
    },
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [`What?`],
    },
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [
        `This is you right?`,
        `Why is the contact under Zola?`,
        `Halo I would understand but that is not a`,
      ],
    },
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [`It's an inside joke alright. Non of your business really.`],
    },
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`Zara`],
    },
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [
        `It has nothing to do with this.`,
        `And I don't want to talk about it. I don't`,
        `I don't even want you looking a this but I know that's not going to stop you.`,
      ],
    },
  ],
};

export default ZaraOrZola;
