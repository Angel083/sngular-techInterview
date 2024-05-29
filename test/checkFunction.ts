import { assert, expect } from "chai";
import NSerie from "../src/class/NSerie.ts";

const nSerie = new NSerie();

describe("N Serie para los primeros 10 números naturales", function () {
  describe("Número natural 1, para fibonacci", function () {
    const fibonacci = nSerie.fibonacciN(1);
    it("Deberá retornar 0", function () {
      expect(fibonacci).to.equal(1);
    });
  });
});

describe("N Serie para los primeros 10 números naturales", function () {
  describe("Número natural 1, para numero triangular", function () {
    const numeroTriangular = nSerie.numeroTriangularN(1);
    it("Deberá retornar 1", function () {
      expect(numeroTriangular).to.equal(1);
    });
  });
});

describe("N Serie para los primeros 10 números naturales", function () {
  describe("Número natural 1, para numero n primo", function () {
    const primo = nSerie.primoN(1);
    it("Deberá retornar 2", function () {
      expect(primo).to.equal(2);
    });
  });
});
