//An object person 
export const person = {
	name: "John",
	age: 34,
	isMarried: true,
};

export default person;


// Destructuring the object
const { name, age, isMarried } = person;

console.log(name); 
console.log(age); 
console.log(isMarried);

//  Copied object using spread operator.
const person2 = {...person, name: 'Jane'}
console.log(person2);