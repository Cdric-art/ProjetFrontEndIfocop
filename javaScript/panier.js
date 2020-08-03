/* *** TRAITEMENT CHECKBOX *** */

const check = document.getElementById('checkbox');

document.getElementById('btnPanier').addEventListener('click', function (e) {
    var checkVal = check.checked;
    if (checkVal === false) {
        e.preventDefault();
    }
});