const products = [
    {name:'Laptop',price:61000,brand:'Hp',color:'Silver'},
    {name:'airpods',price:2400,brand:'TWS23',color:'White'},
    {name:'Watch',price:3000,brand:'Apple',color:'Black'},
    {name:'Sunglass',price:350,brand:'Rebon',color:'Black'},
    {name:'phone',price:18000,brand:'Huawei',color:'Golden'},
];
// map 
const brands =products.map(product => product.brand);
const names =products.map(product => product.name);
console.log(brands)
console.log(names)
products.forEach(product => console.log(product.price))
products.forEach(product => console.log(product.color))
/* filter */
const cheap =products.filter(product => product.price <= 5000);
// console.log(cheap);
const specificName = products.filter(product => product.name.includes('ta'));
console.log(specificName);
// find 
const special =products.find(product => product.name.includes('a'));
console.log(special)