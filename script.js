// P1
const eachRecursive = (obj) => {
  for (const i in obj) {
    if (typeof obj[i] == "object" && obj[i] !== null) {
      Object.freeze(obj[i]);
      eachRecursive(obj[i]);
    } else {
      // console.log(`${obj[i]} its not object`);
    }
  }
  Object.freeze(obj);
};

const myObj = {
  foo: "Foo",
  bar: "Bar",
  baz: {
    doe: "Jane Doe",
    john: {
      relatives: {
        spouse: "Jane Doe",
      },
      age: 43,
      isAlive: true,
    },
  },
};

console.log("initial object", myObj);
// Object.freeze(myObj);
eachRecursive(myObj);
console.log("after freeze");
myObj.baz.john.relatives.salary = 1200;
myObj.baz.salary = 1200;
myObj.baz.john.salary = 1200;
myObj.baz.john.relatives.salary = 1200;
console.log(myObj);
// P1 END

// P2
console.log("P2 START");
const peopleWhoBelongToTheIlluminati = (arr) => {
  // your code here
  const members = arr.map((person) => {
    if (person.member) {
      return person;
    } else {
      return "";
    }
  });

  return members.filter((person) => person != "");
};
console.log(
  peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true },
  ])
);
console.log("P2 END");
// P2 END

// P3

// Filter exercises:
console.log("P3 START");
function peopleWhoBelongToTheIlluminatiFilter(arr) {
  return arr.filter(function (people) {
    if (people.member) {
      return people;
    }
  });
}
// test
console.log(
  peopleWhoBelongToTheIlluminatiFilter([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true },
  ])
);
// =>
// [ { name: 'Angelina Jolie', member: true },
//  { name: 'Paris Hilton', member: true },
//  { name: 'Bob Ziroll', member: true } ]
console.log("P3 END");
// P3 END

// P4 START
// Reduce exercises:
console.log("P4 START");
const shoppingSpree = (arr) => {
//   v1
//   return arr
//             .map((prices) => {
//             return prices.price;
//             })
//             .reduce((previous, current) => {
//             return previous + current;
//             });


// v2
    return arr.reduce((total, wishlist) => 
        total + wishlist.price
    , 0);
};

let wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005
// P4 END
console.log("P4 END");


console.log("P5 START");
const flatten = (arr) => {
  //   v1
  //   arr = arr.reduce((a, b) => a.concat(b), []);
  //   return arr;

  // v2
  let flattenArray = [];
  arr.forEach((item) => {
    item.forEach((itx) => {
      flattenArray = [...flattenArray, itx];
    });
  });

  return flattenArray;
};

let arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

console.log("P5 END");
