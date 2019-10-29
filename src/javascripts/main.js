import 'bootstrap';
import '../styles/main.scss';
import cowList from './components/cowList/cowList';
import farmerList from './components/farmerList/farmerList';

const init = () => {
  cowList.buildCows();
  console.error('hi');
  farmerList.buildFarmers();
};

init();
