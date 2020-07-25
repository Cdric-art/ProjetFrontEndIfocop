
/* *** FORMULAIRE CONTACT *** */

const prenom = document.getElementById('prenom');
var prenomVal = '';
prenom.addEventListener('keyup', function () {
    prenomVal = this.value;
    if (prenomVal.length <= 1 || prenomVal.length > 30) {
        prenom.style.backgroundColor = '#fab1a0';
    } else {
        prenom.style.backgroundColor = 'White';
    };
});

const nom = document.getElementById('nom');
var nomVal = '';
nom.addEventListener('keyup', function () {
    nomVal = this.value;
    if (nomVal.length <= 1 || nomVal.length > 50) {
        nom.style.backgroundColor = '#fab1a0';
    } else {
        nom.style.backgroundColor = 'White';
    };
});

const mail = document.getElementById('email');
var mailVal = '';
mail.addEventListener('keyup', function () {
    mailVal = this.value;
    if (mailVal.length < 10) {
        mail.style.backgroundColor = '#fab1a0';
    } else {
        mail.style.backgroundColor = 'White';
    };
});

const select = document.getElementById('inputSelect');
var selectVal = '';
select.addEventListener('change', function () {
    selectVal = this.value;
    if (selectVal == 'Selectionner une catégorie *') {
        select.style.color = '#fab1a0'
    } else {
        select.style.color = '#959BA3'
    };
});