import './cowList.scss';
import smash from '../../helpers/data/smash';

const buildCows = () => {
  smash.getCompleteCows()
    .then((response) => {
      console.log('cow array from cowList', response);
    })
    .catch((error) => {
      console.error('broke', error);
    });
};

export default { buildCows };
