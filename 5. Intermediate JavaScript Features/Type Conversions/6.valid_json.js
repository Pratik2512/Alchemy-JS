const personJSON = `
    {
        "name" : "Pratik",
        "age" : 21,
        "isReal" : true
    } 
`;
const person = JSON.parse(personJSON);
console.log(person.name);
console.log(person.age);
console.log(person.isReal);