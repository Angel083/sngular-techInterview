export class NSerie {
  // Declaron las variables
  nNumber: number;

  // Asignación de parámetros
  constructor(nNumber: number) {
    this.nNumber = nNumber;
  }

  numeroTriangularN(nNumber: number): number {
    return (nNumber * (nNumber - 1)) / 2;
  }

  fibonacciN(nNumber: number): number {
    return nNumber === 0
      ? 0
      : nNumber === 1
      ? 1
      : this.fibonacciN(nNumber - 1) + this.fibonacciN(nNumber - 2);
  }
}
