import CountUp from "react-countup";

interface Props {
  finalResult: number;
  inputNumber: number;
}
const ResultView = (props: Props) => {
  return (
    <section className="nSerie__main">
      <div className="nSerie__result text-center">
        {props.inputNumber > 0 ? (
          <>
            <span>fibonacci({props.inputNumber}) - </span>
            <span>2 * numeroTriangular({props.inputNumber}) + </span>
            <span>primoN({props.inputNumber}) = </span>
            <CountUp duration={3} end={props.finalResult}></CountUp>
          </>
        ) : (
          <span>Ingresa un número</span>
        )}
      </div>
    </section>
  );
};

export default ResultView;
