
//List of my clothes
const clothes = ['shirt', 'jeans', 'pants'];

//Using spread operator to add more items in it/
const newClothes = ['shoes',...clothes, 'jacket'];
console.log(newClothes);

//Objects
const person = {
    name: "Simon",
    age: 34,
    isMarried: true,
    educated: true
}
//  Copied object using spread operator.
const person2 = {...person, name: 'Jules', educated: false}
console.log(person2);