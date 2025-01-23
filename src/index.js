"use strict";
// Capturar
const InputNumero1 = document.getElementById('InputNumero1');
const InputNumero2 = document.getElementById('InputNumero2');
const InputResultado = document.getElementById('InputResultado');
const BotonSuma = document.getElementById('BotonSuma');
const BotonResta = document.getElementById('BotonResta');
const BotonDivision = document.getElementById('BotonDivision');
const BotonMultiplicacion = document.getElementById('BotonMultiplicacion');
// Funcion
function RealizarOperacion(tipoOperacion) {
    const Valor1 = parseFloat(InputNumero1.value);
    const Valor2 = parseFloat(InputNumero2.value);
    // Validar entradas
    if (isNaN(Valor1) || isNaN(Valor2)) {
        InputResultado.value = 'Error: Por favor ingrese números válidos.';
        return;
    }
    let Resultado;
    // Op
    switch (tipoOperacion) {
        case 'SUMA':
            Resultado = Valor1 + Valor2;
            break;
        case 'RESTA':
            Resultado = Valor1 - Valor2;
            break;
        case 'DIVISION':
            if (Valor2 === 0) {
                InputResultado.value = 'Error: División entre cero no permitida.';
                return;
            }
            Resultado = Valor1 / Valor2;
            break;
        case 'MULTIPLICACION':
            Resultado = Valor1 * Valor2;
            break;
        default:
            InputResultado.value = 'Error: Operación no válida.';
            return;
    }
    InputResultado.value = Resultado.toString();
}
BotonSuma.addEventListener('click', () => RealizarOperacion('SUMA'));
BotonResta.addEventListener('click', () => RealizarOperacion('RESTA'));
BotonDivision.addEventListener('click', () => RealizarOperacion('DIVISION'));
BotonMultiplicacion.addEventListener('click', () => RealizarOperacion('MULTIPLICACION'));
