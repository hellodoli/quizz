import axios from 'axios';
import { quizzDataJSON } from '../../../config/api';

function requestListQuizz() {
  return axios.get(quizzDataJSON);
}

export default requestListQuizz;
