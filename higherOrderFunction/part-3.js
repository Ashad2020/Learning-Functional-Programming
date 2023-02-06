/* 
map: transform a list into something else map will take an array and transform
 that into an array of the same length but with each individual item transform

filter: transform an array into a smaller array
find: which does the same thing as filter but only returns the first item so that transforms 
 an array into a single item
What is reduce
it is can be use to express any list transformation in fact
you can use reduce to implement like map filter find
*/
var orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];
/*
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}
*/

var totalAmount = orders.reduce(function (sum, order) {
  console.log(`Hello ${sum} ${order}`);
  return (sum += order.amount);
}, 0);
console.log(totalAmount);
