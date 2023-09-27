"use strict"

const marvelHeroes = ["Ironman", "Thor", "Spiderman"]
const dcHeroes = ["Superman", "Batman", "Flash"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);

marvelHeroes.concat(dcHeroes)
console.log(marvelHeroes) // [ 'Ironman', 'Thor', 'Spiderman' ] --> only marvelHeroes[]

const newHeroes1 = marvelHeroes.concat(dcHeroes)
console.log(newHeroes1); // [ 'Ironman', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash' ]
console.log(newHeroes1.length); // 6

const newHeroes2 = [...marvelHeroes, ...dcHeroes]
console.log(newHeroes2); // [ 'Ironman', 'Thor', 'Spiderman', 'Superman', 'Batman', 'Flash' ]

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
console.log(anotherArray);
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3));