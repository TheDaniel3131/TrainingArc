// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchange data between a server and a web application
//        JSON files {key: value} OR [value1, value2, value3] or [{key1: value1}, {key2: value2}]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object.


// 1. JSON.stringify()

// Convert a JS object into a JSON string
// const names = ["John", "Peter", "Sally", "Jane"];

// const person = {
//     "name": "Daniel",
//     "age": 23,
//     "isMale": true,
//     "hobbies": ["chess", "osu!", "programming"]
// };

// const people = [
//     {
//         "name": "Daniel",
//         "age": 23,
//         "isMale": true,
//         "hobbies": ["chess", "osu!", "programming"]
//     },
//     {
//         "name": "Billy",
//         "age": 21,
//         "isMale": true,
//         "hobbies": ["sleep", "gym", "insurance"]
//     },
//     {
//         "name": "Yong Hui",
//         "age": 25,
//         "isMale": true,
//         "hobbies": ["eat", "CTF", "wang zhe"]
//     },
//     {
//         "name": "Jackin",
//         "age": 23,
//         "isMale": true,
//         "hobbies": ["eat", "sleep", "play"]
//     },
//     {
//         "name": "Jia Kin",
//         "age": 21,
//         "isMale": true,
//         "hobbies": ["assignments", "gaming", "cat memes"]
//     }
// ];

// const jsonString = JSON.stringify(names);
// const jsonString2 = JSON.stringify(person);
// const jsonString3 = JSON.stringify(people);

// console.log(jsonString);
// console.log(jsonString2);
// console.log(jsonString3);


// 2. JSON.parse()

// Convert a JSON string into a JS object - add a backtick to the string
// const names = `["John", "Peter", "Sally", "Jane"]`;

// const person = `{
//     "name": "Daniel",
//     "age": 23,
//     "isMale": true,
//     "hobbies": ["chess", "osu!", "programming"]
// }`;

// const people = `[
//     {
//         "name": "Daniel",
//         "age": 23,
//         "isMale": true,
//         "hobbies": ["chess", "osu!", "programming"]
//     },
//     {
//         "name": "Billy",
//         "age": 21,
//         "isMale": true,
//         "hobbies": ["sleep", "gym", "insurance"]
//     },
//     {
//         "name": "Yong Hui",
//         "age": 25,
//         "isMale": true,
//         "hobbies": ["eat", "CTF", "wang zhe"]
//     },
//     {
//         "name": "Jackin",
//         "age": 23,
//         "isMale": true,
//         "hobbies": ["eat", "sleep", "play"]
//     },
//     {
//         "name": "Jia Kin",
//         "age": 21,
//         "isMale": true,
//         "hobbies": ["assignments", "gaming", "cat memes"]
//     }
// ]`;

// const parsedString1 = JSON.parse(names);
// const parsedString2 = JSON.parse(person);
// const parsedString3 = JSON.parse(people);

// console.log(parsedString1);
// console.log(parsedString2);
// console.log(parsedString3);


// Now I am trying to fetch the JSON files

// fetch("names.json")
//     .then((response) => response.json()
//     .then((data) => console.log(data)));

// fetch("person.json")
//     .then((response) => response.json()
//     .then((data) => console.log(data)));




// .then((values) => values.forEach(value => console.log(value))))

// fetch("people.json")
    // .then((response) => response.json()

    // .then((values) => values.forEach(value => console.log(value.name)))
    // .then((values) => values.forEach(value => console.log(value.age)))
    // .then((values) => values.forEach(value => console.log(value.isMale)))
    // .then((values) => values.forEach(value => console.log(value.hobbies)))
    
    // .catch((error) => console.log(error)));


// or
fetch("people.json")
    .then((response) => response.json())
    .then((values) => {
        values.forEach(value => console.log(value.name));
        values.forEach(value => console.log(value.age));
        values.forEach(value => console.log(value.isMale));
        values.forEach(value => console.log(value.hobbies));
    })
    .catch((error) => console.log(error));

