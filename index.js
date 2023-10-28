// CHAPTER NO 3
// Practice exercise 3.1

let shoppingList = ["Milk", "Bread", "Apples"];
console.log(shoppingList)
console.log(shoppingList.length)

shoppingList[1] = "Bananas";
console.log(shoppingList[1]);
console.log(shoppingList);

// Practice exercise 3.2

shoppingList = [];
console.log(shoppingList)
shoppingList = ["Milk", "Bread", "Apples"];
shoppingList.splice(2, 0, "Bananas" , "Eggs");
console.log(shoppingList);
shoppingList.splice(1);
shoppingList.pop();
console.log(shoppingList);
shoppingList.sort()
console.log(shoppingList);
shoppingList = shoppingList.indexOf("Milk");
console.log(shoppingList);
shoppingList = ["Bananas", "Eggs", "Milk"];
shoppingList.splice(1, 0, "Carrot" , "Lettuce");
console.log(shoppingList);
let newshoppingList = ["Juice", "Pop"];
console.log(newshoppingList);
shoppingList = shoppingList.concat(newshoppingList, newshoppingList);
console.log(newshoppingList, shoppingList);
const lastIndexPop = shoppingList.lastIndexOf("Pop");
console.log("Last index of Pop:", lastIndexPop);
console.log(shoppingList);


// Practice exercise 3.3

let myCar = {
    make: 'Tesla',
    model: 'Model 3',
    year: 2022,
    isElectric: true,
    color: 'red',
    mileage: 10000
};

let propertyName = 'color';
myCar[propertyName] = 'blue';

propertyName = 'forSale';

myCar[propertyName] = true;

console.log("Make:", myCar.make);
console.log("Model:", myCar.model);
console.log("For Sale:", myCar.forSale);

// Practice exercise 3.5

let people = {
    friends: []
};

let schoolFriend = {
    firstName: "Ayesha",
    lastName: "Zaidi",
    id: 12345
};

let collageFriend = {
    firstName: "Faiza",
    lastName: "Khan",
    id: 67890
};

let universityFriend = {
    firstName: "Maryam",
    lastName: "Ahmed",
    id: 54321
};

people.friends.push(schoolFriend);
people.friends.push(collageFriend);
people.friends.push(universityFriend);

console.log(people);

// Chapter projects
// Manipulating an array

const theList = ['Laurence', 'Svekis', true, 35, null, undefined,
{test: 'one', score: 55}, ['one', 'two']];

theList.shift();
theList.pop();
console.log(theList);

theList.unshift('FIRST');
console.log(theList);

theList[3] = 'hello World';
console.log(theList);

theList[2] = 'MIDDLE';
console.log(theList);

theList.push('LAST');
console.log(theList);




