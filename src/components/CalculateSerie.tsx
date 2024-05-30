import NSerie from "../class/NSerie";

export default function CalculateSerie(nNumber: number): number {
  const functionSeriesN = new NSerie();
  return (
    functionSeriesN.fibonacciN(nNumber) -
    2 * functionSeriesN.numeroTriangularN(nNumber) +
    functionSeriesN.primoN(nNumber)
  );
}
