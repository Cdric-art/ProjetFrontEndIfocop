/* *** SIMULATION DE CHARGEMENT DE PAGE *** */

const header = document.getElementsByTagName('header');
const main = document.getElementsByTagName('main');
const footer = document.getElementsByTagName('footer');

const loader = document.getElementsByClassName('loader');

function Hide () {
    header[0].style.display = 'none';
    main[0].style.display = 'none';
    footer[0].style.display = 'none';
}

function Show () {
    header[0].style.display = 'block';
    main[0].style.display = 'block';
    footer[0].style.display = 'block';
    loader[0].style.display = 'none';
}

setTimeout(Hide, 0);
setTimeout(Show, 1200);