// // Récupération d'élément via son ID
// const pageHeader = document.getElementById("header");

// // Récupération d'élément via sa classe
// const pageMain = document.getElementsByClassName('main'); 

// // Récupération d'élément via une recherche spécifique
// // const pageFooter = document.querySelector('.main')
// const pageFooter = document.querySelectorAll('.main')

// console.log(pageFooter)

// const imageChat = document.getElementById('imageChat');

// console.log(imageChat);

const text2input = document.getElementById('text2')


// setTimeout(() => {
//     text2input.removeAttribute('disabled');
// }, 5000);


    
//     imageChat.setAttribute('src', 'https://i.notretemps.com/1400x787/smart/2021/05/03/trois-facons-de-distraire-votre-chat-a-la-maison.jpeg')


// const p = document.getElementById('paragraph');

// const username = 'John';

// p.textContent = `Bonjour, je m'appelle ${username}`

// p.innerHTML = `Bonjour, je m'appelle <strong>${username}</strong>`
// p.textContent = `Bonjour, je m'appelle <strong>${username}</strong>`


// const boxElements = document.getElementsByClassName('box');

// for (let i = 0; i < boxElements.length; i++) {
//     const element = boxElements[i];
//     const childElement = element.firstChild;
//     if (!childElement) {
//         element.classList.remove('blue')
//         element.classList.add('orange')
//     }
// }

// const mainDiv = document.getElementsByClassName('mainDiv');
// const mainDiv = document.createElement('div');
// mainDiv.style.width = '150px';
// mainDiv.style.height = '150px';
// mainDiv.style.backgroundColor = 'red';

// const paragraph = document.createElement('p');
// paragraph.style.fontFamily = 'sans-serif';
// paragraph.style.color = 'white';
// paragraph.textContent = 'Je suis un paragraphe'

// const paragraph2 = document.createElement('p');
// paragraph2.style.fontFamily = 'sans-serif';
// paragraph2.style.color = 'white';
// paragraph2.textContent = 'Je suis un paragraphe 2'
// paragraph2.setAttribute('id', "paragraph2")

// const paragraph3 = document.createElement('p');
// paragraph3.style.fontFamily = 'sans-serif';
// paragraph3.style.color = 'white';
// paragraph3.textContent = 'Je suis un paragraphe 3'

// // document.body.appendChild(mainDiv);
// mainDiv[0].appendChild(paragraph)
// mainDiv[0].appendChild(paragraph2)
// mainDiv[0].appendChild(paragraph3)

// const p2 = document.getElementById('paragraph2')

// console.log(p2)

const mainBox = document.getElementById('mainBox');
const button = document.getElementById('changeColorButton');

button.addEventListener('click', function() {
    // mainBox.classList.toggle('blue') // default = 1 : Si = 1 alors => 0
    // mainBox.classList.toggle('orange') // default = 0 : Si = 0 alors => 1

    // if (mainBox.classList.contains("orange")) {
    //     mainBox.classList.remove('orange');
    //     mainBox.classList.add('blue')
    // } else {
    //     mainBox.classList.add('orange');
    //     mainBox.classList.remove('blue')        
    // }
})