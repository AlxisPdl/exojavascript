const monBouton = document.getElementById('monBouton');

monBouton.addEventListener('click', () => {
    alert("Attention t'a cliquer bb")
})

monBouton.addEventListener('click', () => {
    document.getElementById('monParagraphe').textContent = "Je suis un paragraphe modifié."
})

monParagraphe.addEventListener('mouseover', () => {
    document.getElementById('monParagraphe').style.color = "red"
    document.getElementById('monParagraphe').style.fontSize = "24px"

})

document.getElementById('monBouton').addEventListener('click', () => {
    let nouvelElement = document.createElement("li");
    nouvelElement.textContent = "Nouvel element";
    document.getElementById("maListe").appendChild(nouvelElement);
})
