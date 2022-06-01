import React, {useState, useEffect} from 'react';
import axios from 'axios';
import appStyles from './App.module.css'

import Placard from './components/placard/placard';

function App(props) {

  const [advice, setAdvice] = useState({ id: 117, advice: "it is easy to sit up and take notice, what's difficult is getting up and taking action." });

  // useEffect(() => {
  //   axios
  //   .get('https://api.adviceslip.com/advice')
  //   .then(res => setAdvice(res.data.slip))
  //   .catch(err => console.log(err))
  // }, []);

  return (
    <div className={appStyles.App}>
      <Placard id={advice.id} advice={advice.advice}/>
    </div>
  );
}

export default App;
