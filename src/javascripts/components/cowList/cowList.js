import './cowList.scss';
import cowData from '../../helpers/data/cows';

const buildCows = () => {
  cowData.getCows()
    .then((response) => {
      console.log('cow array from cowList', response);
    })
    .catch((error) => {
      console.error('broke', error);
    });
};

export default { buildCows };
