
let [firstName, lastName] = ["John", "Doe"];
/* It's a function that returns the type of the variable */
typeof(firstName)

let complete = `Bienvenue ${firstName} ${lastName} !`;

let x = 5;
let y = 1;

if (x == y) {
    console.log('x est égal à y')
} else {
    console.log('x n\'est pas égal à y')
}

// const userData = {
//     firstName: "John",
//     lastName: "Doe"
// }

// if (!userData || Object.keys(userData) <= 0) {
//     return 'L\'utilisateur est introuvable'
// }


let age = 15;

if (parseInt(age) && typeof (parseInt(age)) === 'number' && (age > 0 && age < 18)) {
    console.log('Tu n\'es pas majeur');
} else if (age >= 18) {
    console.log('Tu es majeur');
} else {
    console.log("Tu n'as pas un age correct")
}


/*
    Je suis un commentaire
    sur plusieurs lignes
*/