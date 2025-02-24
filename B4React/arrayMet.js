
// An array containing ages of people in a work station
let ages = [22, 25, 54, 60, 33, 55, 49, 29];

// Map to find the ages each one was when the station started considering it began 4 years ago
let modifiedAgesMap = ages.map(age => age - 4);
console.log(modifiedAgesMap);

// Reduce
let totalAgesReduce = ages.reduce((total, age) => total + (age - 4), 0);
console.log(totalAgesReduce);

// Filter
let filteredAges = ages.filter(age => age > 30);
console.log(filteredAges);
