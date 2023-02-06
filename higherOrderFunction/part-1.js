/*Higher order funtions
Why functional programming?
Less bugs: Easier to reason about
Less time: Re-use more code



*/
// function triple(x) {
//   return x * 3;
// }

// Functions are values
var triple = function (x) {
  return x * 3;
};
var waffle = triple;
waffle(30);
// Functions can assign to variables or pass other function

/* What are higher order functions good for?
-Composition : composition the fact that we can take one function and put it into another function allows us to compose a lot of small functions into bigger functions
*/
// let's look at how to actually use of these things

// filter is a function on the array that accepts another function as its argument which it will use to return a new filtered version of the array.

var animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursuld", species: "cat" },
  { name: "Jimmy", species: "fish" },
];

// normal for loop solution
/*var dogs = [];
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === "dog") dogs.push(animals[i]);
}
console.log(dogs);
*/

// using filer
/*var dogs = animals.filter(function (animal) {
  return animal.species === "dog";
});
*/
var isDog = function (animal) {
  return animal.species === "dog";
};
var dogs = animals.filter(isDog);
// inverse of filter
function noDogs(animal) {
  return animal.species !== "dog";
}

var otherAnimals = animals.filter(noDogs);
console.log(otherAnimals);
/*filter returns a true or false value that derermine whether or not the item should be included*/
