import { expect } from "chai";
import CalculateSerie from "../src/components/CalculateSerie";

describe("Calcular la N Serie para los primeros 10 números naturales", function () {
  describe("Número natural 1", function () {
    const result = CalculateSerie(1);
    it("Deberá retornar 1", function () {
      expect(result).to.equal(1);
    });
  });
  describe("Número natural 2", function () {
    it("Deberá retornar -2", function () {
      const result = CalculateSerie(2);
      expect(result).to.equal(-2);
    });
  });
  describe("Número natural 3", function () {
    const result = CalculateSerie(3);
    it("Deberá retornar -5", function () {
      expect(result).to.equal(-5);
    });
  });
  describe("Número natural 4", function () {
    const result = CalculateSerie(4);
    it("Deberá retornar -10", function () {
      expect(result).to.equal(-10);
    });
  });
  describe("Número natural 5", function () {
    const result = CalculateSerie(5);
    it("Deberá retornar -14", function () {
      expect(result).to.equal(-14);
    });
  });
  describe("Número natural 6", function () {
    const result = CalculateSerie(6);
    it("Deberá retornar -21", function () {
      expect(result).to.equal(-21);
    });
  });
  describe("Número natural 7", function () {
    const result = CalculateSerie(7);
    it("Deberá retornar -26", function () {
      expect(result).to.equal(-26);
    });
  });
  describe("Número natural 8", function () {
    const result = CalculateSerie(8);
    it("Deberá retornar -32", function () {
      expect(result).to.equal(-32);
    });
  });
  describe("Número natural 9", function () {
    const result = CalculateSerie(9);
    it("Deberá retornar -33", function () {
      expect(result).to.equal(-33);
    });
  });
  describe("Número natural 10", function () {
    const result = CalculateSerie(10);
    it("Deberá retornar -26", function () {
      expect(result).to.equal(-26);
    });
  });
});
