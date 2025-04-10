"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    static somar(a, b) {
        return a + b;
    }
    static subtrair(a, b) {
        return a - b;
    }
    static multiplicar(a, b) {
        return a * b;
    }
    static dividir(a, b) {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return a / b;
    }
}
exports.Calculadora = Calculadora;
