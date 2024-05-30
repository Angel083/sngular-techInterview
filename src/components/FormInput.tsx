import { ChangeEvent, MouseEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResultView = ({ setCurrentInputNumber }: any) => {
  const [inputField, setInputField] = useState("");
  const getNumber = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isNaN(parseFloat(inputField)) && isFinite(Number(inputField))) {
      if (Number(inputField) < 0) {
        toast.warn("El número ingresado tiene que ser positivo");
        return;
      }
      setCurrentInputNumber(Number(inputField));
      return;
    }
    toast.warn("El dato ingresado no es un número");
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputField(event.target.value);
  };

  return (
    <section className="nSerie__main">
      <div className="nSerie__container">
        <h1 className="text-center">Calcular el término n de la serie:</h1>
        <form className="nSerie__form">
          <input
            type="text"
            name="nNumber"
            value={inputField}
            onChange={handleInputChange}
          />
          <button type="submit" onClick={getNumber}>
            <b>Calcular</b>
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ResultView;
