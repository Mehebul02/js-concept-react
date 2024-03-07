// const numbers =[33,44];
// const [x,y]=numbers;
// console.log(x,y);
// // console.log(numbers)

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}
const [first, second] = [33, 55];
console.log(boxify(first, second));

const student = {
  name: "Mehebul Alif",
  dept: "Computer Technology",
  session: "20-21",
  skill: ["html css tailwind javascript and react"],
  moves: ["tere mere khani", "kus kus hota he"],
};
const [first1, second1] = student.moves;
console.log(first1, second1);

// object destructing
const employee = {
  id: "VS Code",
  designation: "Developer",
  machine: "hp",
  language: ["html", "css", "js"],
  specification: {
    height: 66,
    weight: "56kg",
    address: [
      {
        village: "Kazihata",
        post: "Satbaria",
        upazila: "Bheramara",
        district: "Kushtia",
      },
    ],
  },
};
const {id,designation} =employee.language;
console.log(designation,id);
