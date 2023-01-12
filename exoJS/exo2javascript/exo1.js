const allNames = prompt("Combien de noms désirez-vous ?");

const names = [];

for (let i = 0; i < allNames; i++) {
    names.push(prompt(`Saisissez un nouveau nom ${i+1}`));
}

if(names <= 3) {
    console.log(`Voici vos ${names.length} noms : ${names}`)
} 

else if(names > 3) {
    console.log(`Voici vos ${names.length} noms : ${names} C'est beaucoup de noms !`)
}


function showName(names) {
   for(const name of names) {
    console.log(name)
   }
} 
showName(names)
