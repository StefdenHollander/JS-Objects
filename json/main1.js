// //opdracht 1a
// const jsonPerson = `
//  {
//     "Firstname": "judeska",
//     "email": "judeska@example.com"
// }
// `;
// const objectperson = JSON.Parse(jsonPerson);

// console.log("Voornaam is:", objectPerson.firstname);
// console.log("email is:", objectPerson.email);

//opdracht 1b
const jsonWell = `
{
    "id": 1,
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "birthDate": "1973-01-22",
    "phone": "(555) 555-1234",
    "website": "www.johndoe.com"
}
`;
const ObjectWell = JSON.Parse(jsonWell);
console.log (jsonWell.id);
