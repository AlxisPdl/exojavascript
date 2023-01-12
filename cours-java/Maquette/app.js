
// Récupération du formulaire grâce à son ID.
const contactForm = document.getElementById('contactForm');

// Ajout d'un écouteur d'évènement qui execute sa fonction quand le formulaire est envoyé (bouton submit pressé) : Evènement 'submit'.
contactForm.addEventListener('submit', (event) => {
    // On annule la fonction de base du formulaire qui actualise la page et envoi le formulaire.
    event.preventDefault();

    // On récupère chaque champs un à un grâce à leurs ids.
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const messageInput = document.getElementById("message");

    // On crée une liste de clés valeurs pour récupérer les valeurs des champs récupérés ci-dessus.
    const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value,
    }

    // On crée une liste d'erreurs avec comme valeur par défaut 'false', qui veut dire que l'élément n'est pas en erreur.
    // La liste sera remise sur false automatiquement à chaque renvoi du formulaire.
    const errors = {
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        message: false
    }

    // On récupère ici les messages d'erreur dans le html grâce à leurs ids.
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');

    // On redéfini nos label comme non visible.
    firstNameError.style.display = 'none';
    lastNameError.style.display = 'none';
    emailError.style.display = 'none';
    phoneError.style.display = 'none';
    messageError.style.display = 'none';

    // On vérifie si tous les champs sont rempli ou non, si ce n'est pas le cas, on entre dans la condition.
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {

        // On vérifie chaque champs l'un après l'autre pour savoir le(s)quel(s) est/sont vide ou non valide.
        if (!formData.firstName) {
            // Si le champs est invalide on défini l'erreur correspondante sur true.
            errors.firstName = true;
        }
        if (!formData.lastName) {
            errors.lastName = true;
        }
        if (!formData.email) {
            errors.email = true;
        }
        if (!formData.phone) {
            errors.phone = true;

        }
        if (!formData.message) {
            errors.message = true;
        }
    }


    // On vérifie si un élément est en erreur dans notre liste d'erreurs.
    if (Object.values(errors).includes(true)) {
        // On fait un forEach de notre liste d'erreur pour afficher les messages d'erreurs correspondants.
        Object.entries(errors).forEach((error) => {
            const key = error[0];
            const value = error[1];

            if (value) {
                if (key === 'firstName') {
                    firstNameError.style.display = 'block';
                } else if (key === 'lastName') {
                    lastNameError.style.display = 'block';
                } else if (key === 'email') {
                    emailError.style.display = 'block';
                } else if (key === 'phone') {
                    phoneError.style.display = 'block';
                } else if (key === 'message') {
                    messageError.style.display = 'block';
                }
            }
        })
    } else {
        // Si aucune erreur n'est déclarée alors on affiche les données du formulaire dans un console.log().
        console.log(formData)
    }




})