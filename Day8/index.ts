//Q22: Intentional error: Arrays are zero-indexed
let friends: string[] = ["Atiya", "Beena", "Sadaf", "Yasmeen" ];

console.log(friends[4])
// Correcting the error by accessing a valid index.
friends[4] = "Aliya"; 
console.log(friends); 

// Q23 Test whether an item is in a array
// let fruits = ["apple", "banana", "cherry"];
// console.log("Is 'apple' in fruits?");
let fruits: string[] = ["banana", "orange", "watermelon"];

console.log(fruits.indexOf("apple")); 



// Q24:Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True

