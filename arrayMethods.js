const students = [
  { id: 1, name: "Ali", age: 20, marks: 85 },
  { id: 2, name: "Sara", age: 22, marks: 92 },
  { id: 3, name: "Ahmed", age: 19, marks: 70 },
  { id: 4, name: "Ayesha", age: 21, marks: 60 },
];

// const student=students.map((s)=>{
//     s.marks
// })
// console.log(student)

const passStudents = students
  .filter((s) => s.marks <= 70)
  .map((s) => s.name);
console.log(passStudents);

// const numbers=[1,2,3,4,5,6]

// const double=(x)=>{
//    return  x*2
// }

// const result=numbers.map((x)=>{
//     const avg=x*3
//     return avg
// })
// console.log(result)
