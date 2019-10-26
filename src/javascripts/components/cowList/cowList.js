import './cowList.scss';
import cows from '../../helpers/data/cows';

const buildCows = () => {
  cows.getCows()
    .then((response) => {
      console.error('it worked', response);
    })
    .catch((error) => {
      console.error('broke', error);
    });
};

export default { buildCows };
