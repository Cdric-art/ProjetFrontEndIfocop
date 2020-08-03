/* *** TRAITEMENT FORMULAIRE *** */

document.getElementById('btnContact').addEventListener('click', function (e) {
    let prenomVal = document.getElementById('prenom').value;
    let etoileVal = document.getElementById('inputSelect').value;
    let avisVal = document.getElementById('inputSelectCategorie').value;
    let msgVal = document.getElementById('message').value;
    if (prenomVal == undefined || prenomVal.length <= 1) {
        e.preventDefault();
    } else if (etoileVal == "Nombre d'étoiles *") {
        e.preventDefault();
    } else if (avisVal == "Avis général *") {
        e.preventDefault();
    } else if (msgVal == undefined || msgVal.length <= 1) {
        e.preventDefault();
    };
});
