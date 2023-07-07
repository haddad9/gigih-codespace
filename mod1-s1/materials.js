

// 1. OPTIONAL CHAINING
function optionalChaining() {
    const students = [{ name: "Alice", age: 20 }];
    students.forEach(student => {
    console.log("Age", student?.age);
    });
    console.log("Second Student Age", students[1]?.age);   
}

optionalChaining()
optionalChaining2()
optionalChaining3()


// 2. DESTRUCTURING
function studentsAgeReducer2(acc,{age}) {
    return acc+age;
}

function averageAge2(students){
    const totalAge = students.reduce(studentsAgeReducer2,0);
    return totalAge / students.length;
}

const students=[
    {name:"haddad", age:17},
    {name:"zahra", age:20},
    {name:"salim", age:21}
];


console.log(averageAge2(students))

const obj = {name: "Haddad", age:17};

const {name:nama ,age:umur} = obj
console.log(nama, umur)




// 3. PROPERTY NAME SHORTHAND
const name = "Alucard"
const age = 100
const newStudent = {name,age}
students.push(newStudent)

students.forEach((student) => {
    console.log(student.name)
}

    
)


// 4. SPREAD OPERATOR
const name2 = "Miya"
const age2 = 20
const newStudent2 = {name,age}
newStudents = [  ...students, newStudent2 ]    
console.log(newStudents)

// folder 1 = CV, resume
//folder 2 = ...folder1, ijazah => CV, resume, Ijazah