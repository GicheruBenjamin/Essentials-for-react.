// A normal if else 

let checkQuality = (quality) => {
    if (quality > 50) {
        console.log("This is a good quality");
    } else {
        console.log("This is a bad quality");
    }
}
checkQuality(70)

//Using a ternary operator
let ifStudentAttended = (student, attendance) =>{
return  attendance = true ? console.log(`${student} attended the class`) : console.log(`${student} did not attend the class`);
}
ifStudentAttended("James", true)