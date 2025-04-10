export class Calculadora {
    static somar(a: number, b: number): number {
      return a + b;
    }
  static subtrair(a: number, b: number): number {
      return a - b;
    }
  static multiplicar(a: number, b: number): number {
      return a * b;
    }
  
    static dividir(a: number, b: number): number {
      if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
      }
      return a / b;
    }
  }
  