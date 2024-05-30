import { useEffect, useState } from "react";

import FormInput from "./components/FormInput";
import ResultView from "./components/ResultView";
import CalculateSerie from "./components/CalculateSerie";

function App() {
  const [currentInputNumber, setCurrentInputNumber] = useState(0);
  const [result, setResult] = useState(0);
  useEffect(() => {
    setResult(CalculateSerie(currentInputNumber));
  }, [currentInputNumber]);

  return (
    <>
      <FormInput setCurrentInputNumber={setCurrentInputNumber} />
      <ResultView finalResult={result} inputNumber={currentInputNumber} />
    </>
  );
}

export default App;
