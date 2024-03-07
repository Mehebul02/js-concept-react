/*truthy,falsy
truthy---'alif',4,true,{},[];
falsy--'',undefined,false,null
*/

const myAge =12 ;
if(myAge ===20){
    const total =20+4;
    console.log(total)
}
else{
    console.log('No Age Enter')

};
const myMony =50;
if(!myMony){
    console.log('44')
};

const money =160;
let food;
if(money > 145) {
    food ='Biryani'
    console.log(food)
}
else{
    food='Cha Biscut kha'
    console.log(food)
}
// ternary operator
let food1 = money>100?'briyani':'cha buscuit';
console.log(food1); 
let drinks =(money >100 && myMony >100)?'coke':'fruit';
console.log(drinks)

// number to string conversion
const num =44;
console.log(num)
const numString =num +'' ;
console.log(numString);

// string to number conversion 
const input ='34';
const inputNumber = +input;
console.log(inputNumber);

const isActive =true;
const showUsers = () => console.log('Display Show');
const hideUser = () => console.log('Hide users');
isActive?showUsers():hideUser();