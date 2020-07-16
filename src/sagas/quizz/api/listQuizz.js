import axios from 'axios';
import { staticDataPath } from '../../../config/api';

function requestListQuizz() {
  return axios.get(`${staticDataPath}/quizz.json`);
}

export default requestListQuizz;
