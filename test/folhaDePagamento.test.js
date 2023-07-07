/* eslint-disable no-undef */
import { somaHorasExtras, calculaDescontos } from '../index';

describe('Testes dos cálculos de folhas', () => {
  it('Deve retornar a soma das horas extras', () => {
    const esperado = 2500;
    const retornado = somaHorasExtras(2000, 500);

    expect(retornado).toBe(esperado);
  });

  it('Deve descontar o valor do salario', () => {
    const esperado = 2200;
    const retornado = calculaDescontos(2500, 300);

    expect(retornado).toBe(esperado);
  });
});
