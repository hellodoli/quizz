import axios from 'axios';

class Quizz {
  constructor() {
    this.quizzs = {};
  }

  async getQuizz() {
    try {
      const quizzJsonUrl = '/data/quizz.json';
      const response = await axios.get(quizzJsonUrl);
      if (response.status === 200) this.quizzs = response.data;
      else this.quizzs = {};
    } catch (error) {
      this.quizzs = {};
      console.log(error);
    }
  }
}

export default Quizz;
