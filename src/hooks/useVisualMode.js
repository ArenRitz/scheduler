import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  let historyT = [...history];
  let historyB = [...history];

  const transition = (newMode, replace = false) => {

    if (replace) {
      setMode(newMode);
    } else {
      setMode(newMode);
      historyT.push(newMode);
      setHistory(historyT);
    }
  };

  const back = () => {
    historyB.pop();
    setHistory(historyB);
    if (history.length > 1) {
      setMode(historyB[(historyB.length - 1)]);
    }
  };

  return { mode, transition, back }
}


