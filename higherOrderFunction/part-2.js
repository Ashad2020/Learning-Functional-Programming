/*
    Map

*/
var animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursuld", species: "cat" },
  { name: "Jimmy", species: "fish" },
];
/*
problem is : We want to get an array of all the names of all the animals
*/
/*
var names = [];
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
*/

/*var names = animals.map(function (animal) {
  return animal.name;
});*/
var names = animals.map((animal) => animal.name);
/*var names = animals.map(function (animal) {
  return `${animal.name} is a ${animal.species}`;
});*/
console.log(names);

/*map will include all items in the array but  instead it expects the callback function to ruturn a transformed object that 
 object it will put into the new array instead of the original animal in this case that will be the name
 */
