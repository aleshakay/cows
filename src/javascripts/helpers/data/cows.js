import axios from 'axios';

const getCows = () => axios.get('https://teamtreehouse.com/aleshareed.json');

export default { getCows };
