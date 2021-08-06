//1. Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
function oneThroughTwenty() {
  let meuRetorno = []
  let i = 0
  while(i < 20){
    meuRetorno[i] = i + 1
    i = i + 1
  }
  return meuRetorno
}
console.log(oneThroughTwenty())

//2. Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
function evensToTwenty() {
  let evens = []
  let i = 1
  while(i <= 20){
    if((i % 2) === 0){
      evens[evens.length] = i
      i = i + 1
    } else{
      i = i + 1
    }
  }
  return evens
}
console.log(evensToTwenty())

//3. Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
function oddsToTwenty() {
  let odds = []
  let i = 1
  while(i <= 20){
    if((i % 2) !== 0){
      odds[odds.length] = i
      i = i + 1
    } else{
      i = i + 1
    }
  }
  return odds
}
console.log(oddsToTwenty())

//4. Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
function multiplesOfFive() {
  let ofFive = []
  let i = 1
  while(i <= 100){
    if((i % 5) === 0){
      ofFive[ofFive.length] = i
      i = i + 1
    } else{
      i = i + 1
    }
  }
  return ofFive
}  
console.log(multiplesOfFive())

//5. Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
function squareNumbers() {
  let square = []
  let i = 1
  while(i <= 100){
    let raiz = (i ** (1/2))
    if(i % raiz === 0){
      square[square.length] = i
      i = i + 1
    } else{
      i = i + 1
    }
  }
  return square
}
console.log(squareNumbers())

//6. Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
function countingBackwards() {
  let backwards = []
  let i = 20
  while(i > 0){
    backwards[20 - i] = i
    i = i - 1
  }
  return backwards
}
console.log(countingBackwards())

//7. Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
function evenNumbersBackwards() {
  let evensBackwards = []
  let i = 20
  while(i > 0){
    if((i % 2) === 0){
      evensBackwards[evensBackwards.length] = i
      i = i - 1
    } else{
      i = i - 1
    }
  }
  return evensBackwards
}
console.log(evenNumbersBackwards())

//8. Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
function oddNumbersBackwards() {
  let oddBackwards = []
  let i = 20
  while(i > 0){
    if((i % 2) !== 0){
      oddBackwards[oddBackwards.length] = i
      i = i - 1
    } else{
      i = i - 1
    }
  }
  return oddBackwards
}
console.log(oddNumbersBackwards())

//9. Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
function multiplesOfFiveBackwards() {
  let ofFiveBackwards = []
  let i = 100
  while(i > 0){
    if((i % 5) === 0){
      ofFiveBackwards[ofFiveBackwards.length] = i
      i = i - 1
    } else{
      i = i - 1
    }
  }
  return ofFiveBackwards
}  
console.log(multiplesOfFiveBackwards())

//10. Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
function squareNumbersBackwards() {
  let squareBackwards = []
  let i = 100
  while(i > 0){
    let raiz = (i ** (1/2))
    if(i % raiz === 0){
      squareBackwards[squareBackwards.length] = i
      i = i - 1
    } else{
      i = i - 1
    }
  }
  return squareBackwards
}
console.log(squareNumbersBackwards())