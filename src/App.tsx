import { useEffect, useState } from "react";

import FormInput from "./components/FormInput";
import ResultView from "./components/ResultView";
import CalculateSerie from "./components/CalculateSerie";

function App() {
  const mostraDataConsola = (data: any) => {
    setInputNumber(data);
  };

  const [inputNumber, setInputNumber] = useState(0);
  const [result, setResult] = useState(0);
  useEffect(() => {
    setResult(CalculateSerie(Number(inputNumber)));
  }, [inputNumber]);

  return (
    <>
      <FormInput enviarDataPadre={mostraDataConsola} />
      <ResultView finalResult={result} inputNumber={inputNumber} />
    </>
  );
}

export default App;
