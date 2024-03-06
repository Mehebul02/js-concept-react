const numbers =[23,4,5,44];
const student={
    name:'Mehebul Alif',
    dept:'Computer Technology',
    session:'20-21',
    skill:['html css tailwind javascript and react']
};
// Template String 
const about =`My name is ${student.name} department of  ${student.dept} my roll is ${numbers[3]} session ${student.session} my skill ${student.skill}`;
console.log(about);
// Arrow Function 
const five =()=> 5;
const addSixtyFive =num => num+65
const isEven=x => x%2===0;
const addThree = (x,y,z) => x+y+z;
const sum=addThree(3,4,6);
console.log(sum)

const doMath =(num1,num2)=>{
    const sum=num1+num2;
    return sum;
};
const total =doMath(33,4,5);
console.log(total)

// spread operator 
const newNumber =[...numbers];
numbers.push(66);
numbers.push(33);
numbers.push(70);
console.log(newNumber);
console.log(numbers);

const studentName =['mehebul Alif','Md Somrat Islam','Razwan Khan'];
const newStudentAdd = [...studentName];
studentName.push('Neam Sarkar','Lemon Khan');
console.log(newStudentAdd);
console.log(studentName)
