class NSerie {
  constructor() {}

  public serieN(nNumber: number): number {
    return (
      this.fibonacciN(nNumber) -
      2 * this.numeroTriangularN(nNumber) +
      this.primoN(nNumber)
    );
  }

  public numeroTriangularN(nNumber: number): number {
    return (nNumber * (nNumber + 1)) / 2;
  }

  public fibonacciN(nNumber: number): number {
    return nNumber === 0
      ? 0
      : nNumber === 1
      ? 1
      : this.fibonacciN(nNumber - 1) + this.fibonacciN(nNumber - 2);
  }

  public primoN(nNumber: number): number {
    let accum = 0;
    let primoSeleccionado = 0;
    for (let i = 0; accum < nNumber; i++) {
      this.isprimeNumber(i) && accum++;
      if (accum == nNumber) primoSeleccionado = i;
    }
    return primoSeleccionado;
  }
  private isprimeNumber(n: number): boolean {
    if (n <= 1) return false;
    if (n == 2) return true;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}

export default NSerie;
