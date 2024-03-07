const student={
    name:'Mehebul Alif',
    dept:'Computer Technology',
    session:'20-21',
    skill:['html css tailwind javascript and react'],
    moves:['tere mere khani','kus kus hota he']
};
const studentJson = JSON.stringify(student);
console.log(student);
console.log(studentJson);
const studentObj = JSON.parse(studentJson);
console.log(studentObj)

// fetch 
// fetch('uel')
// .then(res => res.json())
// .then(data => console.log(data));

// keys values 
const keys =Object.keys(student);
const values =Object.values(student);
console.log(keys);
console.log(values);

// for 
const numbers = [22,3,56,7,84,3];
numbers.forEach(num => console.log(num));
numbers.map(num => num*2);
// add or remove from an array 
const products = [
    {name:'Laptop',price:61000,brand:'Hp',color:'Silver'},
    {name:'airpods',price:2400,brand:'TWS23',color:'White'},
    {name:'Watch',price:3000,brand:'Apple',color:'Black'},
    {name:'Sunglass',price:350,brand:'Rebon',color:'Black'},
    {name:'phone',price:18000,brand:'Huawei',color:'Golden'},
];
const newProduct ={name:'mouse',price:400,brand:'A4 tech',color:'Black'};
// copy products array and than add newProduct
const newProducts =[...products,newProduct];
console.log(newProducts);
// Array product remove 
const remaining =products.filter(p => p.name !=='phone');
console.log(remaining)