// // Do loop: 
// let text1 = "";
// let i = 0;

// do {
//   text1 = text1 + " "+ i;
//   i++;
// }
// while (i < 10);
// console.log(text1);


// // While loop:
// let fruits = ["apple", "banana", "orange", "grape"]
// let text2 = "";
// let item = 0;

// while (fruits[item]){
//   text2 = text2 + " " + fruits[item];
//   item++;
// }

// console.log(text2);

// // For loop: 
// let veggies = ["tomato", "cucumber", "potato"];
// let text3 = "";
// let a = 0;
// for (;veggies[a];){
//   text3 = text3 + " " + veggies[a];
//   a++;
// }
// console.log(text3);


// // ========================================================
// // FOR LOOP EXAMPLES: 
// // print every number from 1 to 100
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// // print everyone's age and subtract 2 from their age: 
// let ages = [20, 30, 25, 22, 31];
// for (let i = 0; i < ages.length; i++) {
//   console.log(ages[i] - 2);
// }
// //“-2” instructs the loop to print out the value of the 0 index (20) but only after subtracting 2. 


// ========================================================
// TASK

// 1. create a for loop that iterates over each item in pokemonList array. 
// Use document.write inside the loop's code to write the pokemon name on your website's DOM. 

// 2. Use what you’ve learned about adding strings in JavaScript to write the Pokémon’s height next to its name, for example, “Bulbasaur (height: 7)”.

// 3. add code to highlight special Pokémon in your list. Be sure to keep adding comments to explain and document what your code does. Within the loop, add a conditional. The conditional should check if the height is above a certain value (you’re free to pick whatever value you want). If it is, add the note “Wow, that’s big!” to the output. Make sure you set up the conditional so that only one Pokémon has the label “Wow, that’s big!” 


// SOLUTION:

let pokemonList = [
  {
    name: 'bulbasaur', 
    height: 0.7, 
    types: ['grass', 'poison'],
  }, 
  {
    name: 'charizard', 
    height: 1.7, 
    types: ['fire', 'flying'],
  }, 
  {
    name: 'squirtle', 
    height: 1, 
    types: ['water'],
  }
];

for (let i = 0; i <= pokemonList.length; i++) {
  if (pokemonList[i].height > 1) {  //check condition of each pokemon height 
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ')' + ' - wow, that\'s a big Pokemon!' + '<br>'); // loops over each pokemon and if true, prints name, height, and message. with line break
  } else {  
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ')' + '<br>'); // loops over each pokemon and prints name and heigh. with line break
  }
};