import { useEffect, useState } from "react";
import NSerie from "./class/NSerie";

function App() {
  const [nSerie, setnSerie] = useState(0);
  useEffect(() => {
    const result = new NSerie();
    setnSerie(result.serieN(6));
  }, []);
  return (
    <>
      <h1>Hola mundo!</h1>
      {nSerie}
    </>
  );
}

export default App;
