/**
 * Get Quizz Detail from zingnews.vn
 */

if (window.location.host === 'zingnews.vn') {
  const quizz = {
    title: '',
    author: '',
    public_time: '',
    content: '',
    questions: [],
    root_source: 'https://zingnews.vn/series/trac-nghiem-quizz.html',
    source: '',
  };
  const getDefaultValue = (string) => {
    if (!string || string === 'null') return '';
    return string.trim();
  };

  quizz.id = new Date().getTime();
  quizz.title = document.querySelector('.the-article-title').innerHTML.trim();
  quizz.author = document
    .querySelector('.the-article-author a')
    .innerHTML.trim();
  quizz.public_time = document
    .querySelector('.the-article-publish')
    .innerHTML.trim();
  quizz.source = getDefaultValue(window.location.href);

  const tableQuestions = document.querySelectorAll(
    '.the-article-body table.picture'
  );

  const removeElementString = (string) => {
    const s = string.trim();
    if (s.includes('<') && s.includes('>') && s.includes('/')) {
      const start = s.indexOf('>') + 1; // tag open
      const end = s.indexOf('/') - 1; // tag close
      let ss = s.substring(start, end);
      if (ss.includes('>')) {
        ss = ss.substring(ss.indexOf('>') + 1, ss.length);
      }
      if (ss.includes('<')) {
        ss = ss.substring(0, ss.indexOf('<'));
      }
      return getDefaultValue(ss);
    }
    return s;
  };

  const saveToLocalStorage = (newQuizz) => {
    const QUIZZS_SAVED_JSON = 'quizzs_saved_json';
    const quizzs = window.localStorage.getItem(QUIZZS_SAVED_JSON);
    if (!quizzs) {
      window.localStorage.setItem(
        QUIZZS_SAVED_JSON,
        JSON.stringify({ quizzs: { [newQuizz.id]: newQuizz } })
      );
    } else {
      try {
        const quizzsOb = JSON.parse(quizzs);
        const allQuizz = quizzsOb.quizzs;
        // check If exist quizz
        const isExist = Object.values(allQuizz).some((q) => {
          if (
            q.public_time === newQuizz.public_time &&
            q.title === newQuizz.title
          )
            return true;
          return false;
        });
        console.log('isExist: ', isExist);
        if (!isExist) {
          console.log('newQuizz: ', newQuizz);
          allQuizz[newQuizz.id] = newQuizz;
          window.localStorage.setItem(
            QUIZZS_SAVED_JSON,
            JSON.stringify({ quizzs: allQuizz })
          );
        }
      } catch (error) {
        console.error('parse to JSON fail');
      }
    }
  };

  for (let i = 0; i < tableQuestions.length; i++) {
    const newQuestion = {
      img: {
        url: '',
        alt: '',
        title: '',
      },
    };
    const tableQuestion = tableQuestions[i];
    const img = tableQuestion.querySelector('.pic img');
    const question = tableQuestion.querySelector('.caption > h3').innerHTML;

    const tableAnswers = tableQuestion.querySelectorAll('.caption > ul li');
    const correctAnswer = tableQuestion.querySelector(
      '.caption > ul li.correct'
    ).innerHTML;
    const explain = tableQuestion.querySelector('.caption > p').innerHTML;

    newQuestion.num = i + 1;
    if (img) {
      newQuestion.img.url = getDefaultValue(img.src);
      newQuestion.img.alt = getDefaultValue(img.alt);
      newQuestion.img.title = getDefaultValue(img.title);
    }
    newQuestion.question = getDefaultValue(question);
    newQuestion.correct_answer = removeElementString(correctAnswer) || '';
    newQuestion.explain = explain.trim() || '';
    newQuestion.answers = [];

    for (let y = 0; y < tableAnswers.length; y++) {
      const s = removeElementString(tableAnswers[y].innerHTML);
      newQuestion.answers.push(s || '');
    }

    quizz.questions.push(newQuestion);
  }
  saveToLocalStorage(quizz);
}
