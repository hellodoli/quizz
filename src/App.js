import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Quizz from './apis/quizz';

function App() {
  console.log('re-render App');
  const fish = useSelector((state) => state.fishReducer);
  const chain = useSelector((state) => state.chainReducer);
  const dispatch = useDispatch();

  const getQuizz = async () => {
    const quizzAPI = new Quizz();
    await quizzAPI.getQuizz();
    if (quizzAPI.quizzs) {
      console.log(quizzAPI.quizzs);
    }
  };

  useEffect(() => {
    // getQuizz();
    setTimeout(() => {
      dispatch({ type: 'START_FISHING' });
    }, 2000);
  }, [dispatch]);

  return (
    <div className="App">
      <div>{fish && fish.start && <div>Yes, start fishing!!!</div>}</div>
      <div>{chain && chain.start && <div>Yes, start chain!!!</div>}</div>
    </div>
  );
}

export default App;
