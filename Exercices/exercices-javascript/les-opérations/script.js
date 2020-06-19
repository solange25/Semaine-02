//Insérez ici les exercices 2.1 à 2.4
let firsNumber = 2;
let secoNumber = 4;
let thirNumber = 8;
let fourhNumber = 16;
function square(n) {
  return n * n;
}
console.log(square(firsNumber));
console.log(square(secoNumber));
console.log(square(thirNumber));
console.log(square(fourhNumber));
function divisionbyTwo(x) {
  return x % 2;
}

console.log(3 % 2, 178 % 2, 65 % 2, 98 % 2, 123 % 2);
console.log((79.99 * 19) / 100);

// Insérez ici les exercices 2.4 à 2.8 en utilisant les variables déjà créées à votre disposition
let firstNumber = 9;
let secondNumber = 8;
let thirdNumber = 4;
let fourthNumber = 12;
console.log(firstNumber / 3);
var myNum = 3;

console.log(firstNumber + secondNumber);
var myNum = secondNumber;

console.log(firstNumber * thirdNumber);
var myNum = thirdNumber;

console.log(firstNumber - fourthNumber);
var myNum = fourthNumber;

// Exercice incrémentation
function incrementOnClick() {
  document
    .getElementById('increment')
    .addEventListener('click', function decrement() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let incrementCounter = 0;
      incrementCounter++;
      console.log(incrementCounter);
    });
}
// Exercice incrémentation
function decrementOnClick() {
  document
    .getElementById('decrement')
    .addEventListener('click', function increment() {
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let decrementCounter = 100;
      decrementCounter--;
      console.log(decrementCounter);
    });
}
