import img1 from '../../images/img-1.jpg';
import img2 from '../../images/img-2.jpg';
import img3 from '../../images/img-3.jpg';

const browseData = [
  {
    id: '1',
    bgImg: './images/bg-1.jpg',
    cardImg: img1,
    title: 'Research Facility',
    content: 'The research labs at pur study sites use state-of-the-art equipment operated by highly qualified technicians.',
    cardPosition: 'right',
  },
  {
    id: '2',
    bgImg: './images/bg-3.jpg',
    cardImg: img2,
    title: 'Monthly Check-ups',
    content: "The stusy conducts patient check-up every third weekend of the month to keep track of patient's health and recovery.",
    cardPosition: 'left',
  },
  {
    id: '3',
    bgImg: './images/bg-4.jpg',
    cardImg: img3,
    title: 'In-home Checkups',
    content: 'Eligible candidates can choose for in-home consulation every month from our trained study professionals.',
    cardPosition: 'right',
  },
];

export default browseData;
