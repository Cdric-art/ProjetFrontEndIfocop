/* *** TRAITEMENT FORMULAIRE *** */
/* *** AJOUTER UN COMMENTAIRE *** */

document.getElementById('btnContact').addEventListener('click', function (e) {
    e.preventDefault();

    // Récupération des valeurs de chaques input
    let prenomVal = document.getElementById('prenom').value;
    let etoileVal = document.getElementById('inputSelect').value;
    let avisVal = document.getElementById('inputSelectCategorie').value;
    let msgVal = document.getElementById('message').value;
    
    // Sélection des divs dans lesquelles les paragraphes seront ajouté
    // Div pour Avis Généraux 
    const divSpeudo = document.getElementById('divSpeudo');
    const divEtoile = document.getElementById('divEtoile');
    const divCommentaire = document.getElementById('divCommentaire');
    // Div pour Avis Chambres
    const divSpeudoChambre = document.getElementById('divChambreSpeudo');
    const divEtoileChambre = document.getElementById('divChambreEtoile');
    const divCommentaireChambre = document.getElementById('divChambreCommentaire');
    // Div pour Avis Restaurant
    const divSpeudoRestaurant = document.getElementById('divRestaurantSpeudo');
    const divEtoileRestaurant = document.getElementById('divRestaurantEtoile');
    const divCommentaireRestaurant = document.getElementById('divRestaurantCommentaire');
    //Div pour Avis Spa
    const divSpeudoSpa = document.getElementById('divSpaSpeudo');
    const divEtoileSpa = document.getElementById('divSpaEtoile');
    const divCommentaireSpa = document.getElementById('divSpaCommentaire');

    // Création des paragraphes
    const paragraphSpeudo = document.createElement('p');
    const paragraphEtoile = document.createElement('p');
    const paragraphCommentaire = document.createElement('p');

    // Ajout des valeurs aux paragraphes
    paragraphSpeudo.innerHTML = prenomVal;
    
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

    paragraphCommentaire.innerHTML = msgVal;

    // Insert des parapgraphes dans les div correspondantes à la catégorie sélectionnée
    if (avisVal == 'Avis général *') {
        divSpeudo.appendChild(paragraphSpeudo);
        divEtoile.appendChild(paragraphEtoile);
        divCommentaire.appendChild(paragraphCommentaire);
    } else if (avisVal == 'Avis chambre') {
        divSpeudoChambre.appendChild(paragraphSpeudo);
        divEtoileChambre.appendChild(paragraphEtoile);
        divCommentaireChambre.appendChild(paragraphCommentaire);
    } else if (avisVal == 'Avis restaurant') {
        divSpeudoRestaurant.appendChild(paragraphSpeudo);
        divEtoileRestaurant.appendChild(paragraphEtoile);
        divCommentaireRestaurant.appendChild(paragraphCommentaire);
    } else {
        divSpeudoSpa.appendChild(paragraphSpeudo);
        divEtoileSpa.appendChild(paragraphEtoile);
        divCommentaireSpa.appendChild(paragraphCommentaire);
    };     
});
