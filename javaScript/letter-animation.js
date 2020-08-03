/* *** ANIMATION LETTRE PAR LETTRE TITRE H1 INDEX.HTML *** */

/* ELEMENT H1 */
const element = document.getElementById('hello'); 

/* FUNCTION QUI SUPPRIME LE CONTENU HTML DU H1 */
function Title () {
    element.innerHTML = '';
};

/* FUNCTION QUI RECUPERE LA VALEUR DE L'ATTRIBUT NAME DU H1 */
function LetterByLetter () {
    let i = 0;
    let message = element.getAttribute('name');
    const interval = setInterval (() => {
        element.innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, 250);
};

/* EXECUTION DES FONCTIONS */
setTimeout(Title, 2500);
setTimeout(LetterByLetter, 3000);