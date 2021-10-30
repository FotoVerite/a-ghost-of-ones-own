import zolaAvatar from 'assets/images/avatars/zola.jpg';
const zolaGradient = ['#4c669f', '#3b5998', '#192f6a'];
import pantopiticon from 'components/Messanger/exchanges/images/pantopiticon.jpeg';
import moment, {Moment} from 'moment';
import rainLight from 'assets/sounds/notification/rain-light.mp3';

export const zola = {
  name: 'zola',
  avatar: zolaAvatar,
  exchanges: [
    {
      timeStamp: moment()
        .subtract(2, 'months')
        .set('hour', 13)
        .set('minute', 17),
    },
    {
      exchange: [
        'People misunderstanding what the panopticon was about infuriate to me.',
        `"The panopticon’s presence is low-key felt. It was notable how easy it was to go through customs: just a passport and face scan, and the door opened with a soft whir that felt like it was designed to emulate Star Trek. 
        
I could only guess what data was being traversed that substitutes for human surveillance and a round of questioning."`,
      ],
    },
    {
      exchange: ['Wha is a panopticon?'],
      avatar: zolaAvatar,
      color: zolaGradient,
    },
    {
      exchange: [
        'Do you want the wikipedia link, or do you want me to butcher the explination?',
      ],
    },
    {
      exchange: [
        "I just curled up on the windsill watching the rain. So give me the butcher explination. They're always more interesting",
      ],
      audio: rainLight,
      avatar: zolaAvatar,
      color: zolaGradient,
    },
    {
      exchange: [
        'So the panopticon is a thought expirement created by... by... Jeremy Beramy?',
        `That's not right one sec.`,
      ],
    },
    {
      exchange: [`You know it's no fun if you look up the answer.`],
      avatar: zolaAvatar,
      color: zolaGradient,
    },
    {
      timeStamp: moment()
        .subtract(2, 'months')
        .set('hour', 13)
        .set('minute', 37),
    },
    {
      exchange: ['Jeremy Bentham!', 'So the concept is...'],
    },
    {
      exchange: [`You totally cheat.`],
      avatar: zolaAvatar,
      color: zolaGradient,
    },
    {
      exchange: [
        'As I was saying, the concept is of a prison in a shape of a multiple pentagons with a tower in the center of each, around a centeral church. ',
        `In the tower there can be a warden looking in on the prisioners. But from the prisioners point of view there is no way to know if they are being watched or the tower is empty?.`,
        {image: pantopiticon},
      ],
    },
    {
      exchange: [`Okay, I'm not really getting... It's about control then.`],
      avatar: zolaAvatar,
      color: zolaGradient,
    },
    {
      exchange: [
        `So Bentham's main goal is how do you get a population to behave with limited man power. You can't watch them at all times. You can't punish them for their transgressions but if you build this sauron's eye that you can't actually be sure if it's on or not you will behave. The prisioners will regulate themselves.`,
      ],
    },
    {
      exchange: [
        'So, big brother. 1984 and all that shit? Fashies controlling the population.',
      ],
      avatar: zolaAvatar,
      color: zolaGradient,
    },
    {
      exchange: [
        "Kinda... I mean when we get to the criticism by Foucault, it leans towards that. But Bentham saw this as very helpful. Kinda like a manifestation of Freud's super ego. Though funnily enough Michael Radford created one for film 1984.",
      ],
    },
    {
      exchange: ['Why do you know this?'],
      avatar: zolaAvatar,
      color: zolaGradient,
    },
    {
      exchange: ['Liberal Arts Education?'],
    },
    {
      exchange: [
        "So I don't get how they're using it incorrectly. Seems like people mostly agree that surveillance is bad. What little I know of Foucault he seems to be against the idea of state controll and everything we are seeing happening.",
      ],
      avatar: zolaAvatar,
      color: zolaGradient,
    },
    {
      exchange: [
        "You misunderstand... It's not that I think the pantopiticon is good. It's just that the idea is you don't know that anyone is watching you with the pantopiticon, and we definetly know they are watching at all times.",
      ],
    },

    {
      timeStamp: moment()
        .subtract(2, 'months')
        .add(2, 'days')
        .set('h', 13)
        .set('minutes', 27),
    },
    {
      exchange: ['Hey...  need a favor'],
      avatar: zolaAvatar,
      color: zolaGradient,
    },
    {
      exchange: ["What's up"],
    },
    {
      exchange: ['Just Call'],
      avatar: zolaAvatar,
      color: zolaGradient,
    },
    {
      timeStamp: moment()
        .subtract(1, 'months')
        .add(2, 'days')
        .set('h', 12)
        .set('minutes', 0),
    },
    {
      exchange: ['Hey, Zola, we need to talk.'],
    },
  ],
};
