function prepareChai(type) {
  if (type === "Masala Chai") {
    console.log("Adding spices to the chai");
  } else {
    console.log("Preparing regular chai");
  }
}

prepareChai("Masala Chai");
prepareChai("Ginger Chai");

/*
Ek online store mein, agar customer ka total bill amount 1000 se zyada hai, toh 10% discount milta hai. Nahi toh, full amount pay karna padta hai.

*/

function calculateTotal(amount) {
  // convert to number
//   if (amount > 1000) {
//     return amount * 0.9;
//   }
//   return amount;

    return amount > 100 ? amount * 0.9 : amount
}



let finalBill = calculateTotal(1200);
// console.log(finalBill);
// console.log(calculateTotal(1300));

/*
Ek traffic light system mein, agar light "red" hai, toh "Stop" print karo. Agar "yellow" hai, toh "Slow down" print karo. Agar "green" hai, toh "Go" print karo.


*/

function trafficLight(color) {
  switch (color) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Slow down");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Chalan kaat do");
  }
}

trafficLight("yellow");

function checktruthyValue(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

checktruthyValue(1)
checktruthyValue(0)
checktruthyValue("hitesh")
checktruthyValue("")
checktruthyValue([])
checktruthyValue([1, 2, 3])


function login(username, password){
    if(username === 'admin' && (password === "1234" || loginIp == "127")){
        console.log("Login successful");
        
    } else {
        console.log("Invalid credentials");
        
    }
}
let salesData = [
  { product: "Laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];

let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
// console.log(totalSales);

// Items less than 50
let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowStockItems = inventory.filter((item) => {
  return item.stock < 50;
});
// console.log(lowStockItems);

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 12 },
  { user: "Charlie", activityCount: 33 },
];
// find most active user

let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);
console.log(mostActiveUser);

let name = "hitesh";
const pi = 3.14;

let number = 42.4; // Number
let text = "Hello"; //String
let isTrue = true; // Boolean
let nothing = null; // Object
let undefinedVar = undefined; // undefined
let symbolVar = Symbol(); // Symbol

let person = {
  name: "hitesh",
  age: 19,
  isStudent: true,
};

let num = "42";
// let convertedNum = Number(num);
// let convertedNum = +num;
let convertedNum = parseInt(num);

let str = 123;
let convertedString = String(str);

let a = 10;
let b = 3;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;

let x = 10;
let y = 10;

// console.log(x == y); // Equal to
// console.log(x != y); // Not Equal to
// console.log(x > y);
// console.log(x < y);
// console.log(x <= y);

// console.log(Math.max(5, 10));
// console.log(Math.min(5, 10));

console.log(Math.random() * 10);


let firstName = "hitesh"
let lastName = "Choudhary"

let fullName = firstName + " " + lastName //hiteshchoudhary

let message = "Hello World"

console.log(message.toUpperCase());
console.log(message.indexOf("W"));
console.log(message.slice(0, 5));

let myName = "Hitesh"

let greeting = `Hello ${myName}, from chaicode`
let chaiTypes = ["Masala Chai", "Ginger chai", "Green Tea", "Lemon Tea"];

// console.log(chaiTypes[2]);

// console.log(`Total chai Types: ${chaiTypes.length}`);

chaiTypes.push("Herbal Tea");
const data = chaiTypes.pop();
console.log(data); //

let index = chaiTypes.indexOf("Green-Tea");
console.log(index);

if (index !== -1) {
  chaiTypes.splice(index, 1);
}

// console.log(chaiTypes); //

chaiTypes.forEach((chai, index) => {
  console.log(`${index + 1}: ${chai}`);
});

let moreChaiTypes = ["Oolong Tea", "White Tea"];

let allChaiTypes = chaiTypes.concat(moreChaiTypes);

let newChaiTypes = [...chaiTypes, "Chamolina Tea"];
// console.log(newChaiTypes);

let chaiRecipe = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream Milk",
    sugar: "Brown sugar",
    spices: ["Daalchini", "Ginger"],
  },
  instruction: "Boil water, add tea leaves, milk, sugar and spices",
};

// console.log(chaiRecipe.ingredients.spices[1]);

let updatedChaiRecepie = {
  ...chaiRecipe,
  instruction: "Boil water, add tea leaves, mil, sugar, spices with some love",
};

let { name, myingredients } = chaiRecipe;
let [firstChai, secondChai] = chaiTypes;

console.log(myingredients);
console.log(secondChai);
