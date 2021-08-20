const validNumbers = [17,85,58,46,59,14]

const generateRandomNumber = () => {
  return Math.round(Math.random() * 100)
}

const result = (randomNumber, validNumbers) => {

  
  if (validNumbers.includes(randomNumber)) {
    return 'Você acertou um número'
  }
  
  return 'Você não acertou'
}

module.exports = {
  validNumbers,
  generateRandomNumber,
  result,
}