const source = require('./script.js')

describe('Testa a função result', () => {
  test('quando da certo', () => {
    source.generateRandomNumber = jest.fn().mockReturnValue(58)

    const randomNumber = source.generateRandomNumber();
    const result = source.result(randomNumber, source.validNumbers)


    expect(result).toBe('Você acertou um número')
  })

  test('quando da errado', () => {
    source.generateRandomNumber = jest.fn().mockReturnValue(45)

    const randomNumber = source.generateRandomNumber();
    const result = source.result(randomNumber, source.validNumbers)

    expect(result).toBe('Você não acertou')
  })
});


