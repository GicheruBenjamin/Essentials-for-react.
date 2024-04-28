//An object person 
const person = {
	name: "John",
	age: 34,
	isMarried: true,
};



// Destructuring the object
const { name, age, isMarried } = person;

console.log(name); 
console.log(age); 
console.log(isMarried);

//  Copied object using spread operator.
const person2 = {...person, name: 'Jane'}
console.log(person2);