var frutas = ["Pera", "Banana", "Uva", "Melancia"];
console.log(frutas)
var pos = frutas.indexOf("Pera");
console.log("O índice da fruta 'Pera' é: " + pos + " Logo ela será removida.")
var removedItem = frutas.splice(pos, 1);
console.log(frutas)


