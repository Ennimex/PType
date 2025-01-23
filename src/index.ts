"use strict";

// Capturar
const InputNumero1 = document.getElementById('InputNumero1') as HTMLInputElement;

const InputNumero2 = document.getElementById('InputNumero2') as HTMLInputElement;
const InputResultado = document.getElementById('InputResultado') as HTMLInputElement;
const BotonSuma = document.getElementById('BotonSuma') as HTMLButtonElement;

const BotonResta = document.getElementById('BotonResta') as HTMLButtonElement;
const BotonDivision = document.getElementById('BotonDivision') as HTMLButtonElement;

const BotonMultiplicacion = document.getElementById('BotonMultiplicacion') as HTMLButtonElement;

// Funcion
function RealizarOperacion(tipoOperacion: string): void {

    const Valor1 = parseFloat(InputNumero1.value);
    const Valor2 = parseFloat(InputNumero2.value);

    // Validar entradas
    if (isNaN(Valor1) || isNaN(Valor2)) {
        InputResultado.value = 'Error: Por favor ingrese números válidos.';
        return;
    }

    let Resultado: number;

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
