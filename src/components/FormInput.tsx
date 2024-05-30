import { ChangeEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ResultView({ enviarDataPadre }: any) {
  const [data, setData] = useState("");
  const enviarData = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(!isNaN(parseFloat(data)) && isFinite(Number(data)));
    if (!isNaN(parseFloat(data)) && isFinite(Number(data))) {
      if (Number(data) < 0) {
        toast.warn("El número ingresado tiene que ser positivo");
        return;
      }
      enviarDataPadre(data);
      return;
    }
    toast.warn("El dato ingresado no es un número");
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };

  return (
    <section className="nSerie__main">
      <div className="nSerie__container">
        <h1 className="">Calcular el término n de la serie:</h1>
        <form className="nSerie__form">
          <input
            type="text"
            name="nNumber"
            id=""
            value={data}
            onChange={handleInputChange}
          />
          <button type="submit" onClick={enviarData}>
            <b>Txt here</b>
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}
