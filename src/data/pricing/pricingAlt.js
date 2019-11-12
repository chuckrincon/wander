import paperPlane from '../../assets/img/illustrations/paper-plane.svg';
import startup from '../../assets/img/illustrations/startup.svg';

export default [
  {
    type: 'Free',
    price: 0,
    image: paperPlane,
    features: [
      { title: 'A single scenario' },
      { title: 'Pick between a single DER' },
      { title: 'Other stuff', isDisable: true }
    ],
    button: {
      text: 'Start free trial',
      color: 'outline-primary'
    }
  },
  {
    type: 'Per Utility',
    price: '2.5k',
    image: startup,
    features: [
      { title: 'Unlimited scenarios' },
      { title: 'Unlimited DER combinations' },
      {
        title:
          'Detailed Revenue Requirement: differentiate between Generation, Transmission, Distribution, and/or Customer cost functions'
      }
    ],
    button: {
      text: 'Purchase Now',
      color: 'primary'
    }
  }
];
