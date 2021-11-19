import zola from 'components/Photos/albums/recent/zola.jpg';
import chris from 'components/Photos/albums/recent/chris.jpg';
import donnieDarko from 'components/Photos/albums/recent/donnie-darko.jpg';
import matthew from 'components/Photos/albums/recent/matthew.jpg';
import moment from 'moment';

const dateFormat = 'dddd \u00B7 ll \u00B7 hh:mm a';
const date = moment('2021-11-11T20:09:21').format(dateFormat);

export const recent = {
  title: 'Recent',
  photos: [
    {
      source: zola,
      notes: 'blah blah blah',
      title: 'Zola Headshot',
      date: date,
    },
    {
      source: chris,
      title: 'Chris Headshot',
      date: date,
    },
    {
      source: donnieDarko,
      title: 'Our Mascot',
      date: date,
    },
    {
      source: matthew,
      title: 'Zola Headshot',
      date: date,
    },
    {
      source: zola,
      notes: 'blah blah blah',
      date: date,
    },
    {
      source: chris,
      date: date,
    },
    {
      source: donnieDarko,
      date: date,
    },
    {
      source: matthew,
      date: date,
    },
  ],
};
