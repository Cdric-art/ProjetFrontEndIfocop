/* *** TRAITEMENT FORMULAIRE *** */
/* *** AJOUTER UN COMMENTAIRE *** */

document.getElementById('btnContact').addEventListener('click', function (e) {
    e.preventDefault();

    let prenomVal = document.getElementById('prenom').value;
    let etoileVal = document.getElementById('inputSelect').value;
    let avisVal = document.getElementById('inputSelectCategorie').value;
    let msgVal = document.getElementById('message').value;
    console.log(etoileVal);
    // if (prenomVal == undefined || prenomVal.length <= 1) {
    //     e.preventDefault();
    // } else if (etoileVal == "Nombre d'étoiles *") {
    //     e.preventDefault();
    // } else if (msgVal == undefined || msgVal.length <= 1) {
    //     e.preventDefault();
    // };

    const divSpeudo = document.getElementById('speudo');
    const paragraphSpeudo = document.createElement('p');
    paragraphSpeudo.innerHTML = prenomVal;
    divSpeudo.appendChild(paragraphSpeudo);

    const divEtoile = document.getElementById('etoile');
    const paragraphEtoile = document.createElement('p');
    if (etoileVal == 'Cinq étoiles') {
        paragraphEtoile.innerHTML = '*****';
    } else if (etoileVal == 'Quatre étoiles') {
        paragraphEtoile.innerHTML = '****';
    } else if (etoileVal == 'Trois étoiles') {
        paragraphEtoile.innerHTML = '***';
    } else if (etoileVal == 'Deux étoiles') {
        paragraphEtoile.innerHTML = '**';
    } else {
        paragraphEtoile.innerHTML = '*';
    };
    divEtoile.appendChild(paragraphEtoile);
    const divCommentaire = document.getElementById('commentaire');
    const paragraphCommentaire = document.createElement('p');
    paragraphCommentaire.innerHTML = msgVal;
    divCommentaire.appendChild(paragraphCommentaire); 
});
