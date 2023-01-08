import {ScriptType} from 'components/utility/SubtitleContainer/context/SubtitleContext';
import {ScriptConstants} from '../ScriptConstants';

const IDontLikeThis: ScriptType = {
  name: `I Don't like this`,
  subtitles: [
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [`This feels wrong going through his stuff like this.`],
    },

    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`You have a better suggestion.`],
    },
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [
        `I mean no, I've been looking around while you tool around this and nothing.`,
      ],
      delay: 500,
    },
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`Did you check his computer?`],
    },
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [
        `I don't want to till we go through this. I don't even know what to look for.`,
        `But this feels like a betrayal.`,
      ],
    },
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [
        `There's a lot of that.`,
        `I'm just hoping to find something to clue us in what the fuck happened to cause him to disappear without a word to you.`,
      ],
    },
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [
        `Even with that...`,
        `Could you imagine him going through your phone, your personal effects.`,
      ],
    },
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`...`, `[Under Breath] Betrayal, Betrayed me.`],
      delay: 100,
    },
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [`What?`],
    },
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`Nothing.`],
    },
  ],
};

export default IDontLikeThis;
