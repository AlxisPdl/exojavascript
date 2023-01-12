//  Récupérer le bouton collapse
const collapseButton = document.querySelector('.nav__collapse-button');

//  Récupérer le nav__links
const navLinksContainer = document.querySelector('.nav__links');

const collapseIcon = document.querySelector('.nav__collapse-icon');

//  Lorsque je clique sur le bouton collapse, nav__links => display = flex;
collapseButton.addEventListener('click', function() {
    if (navLinksContainer.style.display !== 'flex') {
        navLinksContainer.style.display = 'flex';
        collapseIcon.classList.remove('fa-bars');
        collapseIcon.classList.add('fa-xmark');
    } else {
        navLinksContainer.style.display = 'none';
        collapseIcon.classList.add('fa-bars');
        collapseIcon.classList.remove('fa-xmark');
    }
})