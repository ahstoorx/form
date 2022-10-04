let submit = document.getElementById('submit');
let formulaire = document.getElementById('submit');

const resultat = 0;



submit.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        
       

        if (response) {

            submit.removeAttribute('disabled');
        }
        else {
            submit.setAttribute('disabled', 'disabled');
        }

    } catch (error) {

    }

})