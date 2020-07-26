
/* *** FORMULAIRE CONTACT *** */

const prenom = document.getElementById('prenom');
var prenomVal;
prenom.addEventListener('keyup', function () {
    prenomVal = this.value;
    if (prenomVal.length <= 1 || prenomVal.length > 30) {
        prenom.style.backgroundColor = '#fab1a0';
    } else {
        prenom.style.backgroundColor = 'White';
    };
});

const nom = document.getElementById('nom');
var nomVal;
nom.addEventListener('keyup', function () {
    nomVal = this.value;
    if (nomVal.length <= 1 || nomVal.length > 50) {
        nom.style.backgroundColor = '#fab1a0';
    } else {
        nom.style.backgroundColor = 'White';
    };
});

const mail = document.getElementById('email');
var mailVal;
mail.addEventListener('keyup', function () {
    mailVal = this.value;
    if (mailVal.length < 10) {
        mail.style.backgroundColor = '#fab1a0';
    } else {
        mail.style.backgroundColor = 'White';
    };
});

const select = document.getElementById('inputSelect');
var selectVal;
select.addEventListener('change', function () {
    selectVal = this.value;
    if (selectVal == 'Selectionner une catégorie *') {
        select.style.color = '#fab1a0'
    } else {
        select.style.color = '#959BA3'
    };
});

const sujet = document.getElementById('sujet');
var sujetVal;
sujet.addEventListener('keyup', function () {
    sujetVal = this.value;
    if (sujetVal.length <= 1) {
        sujet.style.backgroundColor = '#fab1a0';
    } else {
        sujet.style.backgroundColor = 'White';
    };
});

const message = document.getElementById('message');
var messageVal;
message.addEventListener('keyup', function () {
    messageVal = this.value;
    if (messageVal.length <= 1) {
        message.style.backgroundColor = '#fab1a0';
    } else {
        message.style.backgroundColor = 'White';
    }
});

document.getElementById('btnContact').addEventListener('click', function (e) {
    const error = document.getElementById('error');
    if (prenomVal == undefined || prenomVal.length <= 0) {
        e.preventDefault();
        error.innerHTML = "Vous n'avez pas renseigné votre prénom."
    } else if (nomVal == undefined || nomVal.length <= 0) {
        e.preventDefault();
        error.innerHTML = "Vous n'avez pas renseigné votre nom."
    } else if (mailVal == undefined || mailVal.length <= 0) {
        e.preventDefault();
        error.innerHTML = "Vous n'avez pas renseigné votre email."
    } else if (selectVal ==  undefined || selectVal.length <= 0) {
        e.preventDefault();
        error.innerHTML = "Vous n'avez pas sélectionné de catégorie."
    } else if (sujetVal == undefined || sujetVal.length <= 0) {
        e.preventDefault();
        error.innerHTML = "Vous n'avez pas renseigné de sujet."
    } else if (messageVal == undefined || messageVal.length <= 0) {
        e.preventDefault();
        error.innerHTML = "Vous n'avez pas exprimé votre message."
    };
});


/* *** FORMULAIRE RECRUTEMENT *** */

var prenomValRecrut;
document.getElementById('prenomRecrut').addEventListener('keyup', function () {
    prenomValRecrut = this.value;
    if (prenomValRecrut.length <= 1 || prenomValRecrut.length > 30) {
        this.style.backgroundColor = '#fab1a0';
    } else {
        this.style.backgroundColor = 'White';
    };
})

var nomValRecrut;
document.getElementById('nomRecrut').addEventListener('keyup', function () {
    nomValRecrut = this.value;
    if (nomValRecrut.length <= 1 || nomValRecrut.length > 50) {
        this.style.backgroundColor = '#fab1a0';
    } else {
        this.style.backgroundColor = 'White';
    };
})

var emailValRecrut;
document.getElementById('emailRecrut').addEventListener('keyup', function () {
    emailValRecrut = this.value;
    if (emailValRecrut.length <= 10) {
        this.style.backgroundColor = '#fab1a0';
    } else {
        this.style.backgroundColor = 'White';
    };
})

var messageValRecrut;
document.getElementById('messageRecrut').addEventListener('keyup', function () {
    messageValRecrut = this.value;
    if (messageValRecrut.length <= 1) {
        this.style.backgroundColor = '#fab1a0';
    } else {
        this.style.backgroundColor = 'White';
    };
})

document.getElementById('btnContactRecrut').addEventListener('click', function (e) {
    const errorRecrut = document.getElementById('errorRecrut');
    if (prenomValRecrut == undefined || prenomValRecrut.length <= 0) {
        e.preventDefault();
        errorRecrut.innerHTML = "Vous n'avez pas renseigné votre prénom."
    } else if (nomValRecrut == undefined || nomValRecrut.length <= 0) {
        e.preventDefault();
        errorRecrut.innerHTML = "Vous n'avez pas renseigné votre nom."
    } else if (emailValRecrut == undefined || mailValRecrut.length <= 0) {
        e.preventDefault();
        errorRecrut.innerHTML = "Vous n'avez pas renseigné votre email."
    } else if (messageValRecrut == undefined || messageValRecrut.length <= 0) {
        e.preventDefault();
        errorRecrut.innerHTML = "Vous n'avez pas exprimé votre message."
    };
});