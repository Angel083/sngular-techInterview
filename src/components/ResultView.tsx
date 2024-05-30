import CountUp from "react-countup";

type Props = {
  finalResult: number;
  inputNumber: number;
};
export default function ResultView(props: Props) {
  return (
    <section className="nSerie__main">
      {props.inputNumber > 0 && (
        <div className="nSerie__result">
          <span>fibonacci({props.inputNumber}) - </span>
          <span>2 * numeroTriangular({props.inputNumber}) + </span>
          <span>primoN({props.inputNumber}) = </span>
          <CountUp duration={3} end={props.finalResult}></CountUp>
        </div>
      )}
    </section>
  );
}
