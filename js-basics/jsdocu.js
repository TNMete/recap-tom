// const USERS = [
//   {
//     id: 1,
//     username: "mexx",
//     password: "test123",
//     firstName: "Max",
//     familyName: "Muster",
//   },
//   {
//     id: 2,
//     username: "anna",
//     password: "test1234",
//     firstName: "Anna",
//     familyName: "Musterfrau",
//   },
// ];

// function testingArrays() {
//   const currentUser = USERS.find((item) => {
//     return user.password === "test123";
//   });
// }

// Concat() fügt 2 Arrays zusammen

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);
// console.log("children", children)

// filter() checkt welche Zahlen/Alter über oder gleich 18 im Array sind

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//     return age >= 18;
// }
// console.log(result)

// find() ---------------------------------------------------------

// const ages = [3, 10, 18, 20];

// function checkAge(age) {
//     return age > 18;
// }

// function myFunction() {
//     document.getElementById("demo").innerHTML = ages.find(checkAge);
// }

// console.log(ages.find(checkAge))

// findIndex() ---------------------------------------------------------

// const ages = [3, 10, 18, 20];

// ages.findIndex(checkAge);

// function checkAge(age) {
//     return age > 18;
// }

// console.log(ages[ages.findIndex(checkAge)])

// findLast() ---------------------------------------------------------

const ages = [3, 10, 18, 20, 30, 40];

function checkAge(age) {
    return age > 18;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.findLast(checkAge);
}

console.log(ages.findLast(checkAge))