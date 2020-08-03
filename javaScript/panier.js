/* *** TRAITEMENT CHECKBOX *** */

document.getElementById('btnPanier').addEventListener('click', function (e) {
    var checkVal = document.getElementById('checkbox').checked;
    if (checkVal === false) {
        e.preventDefault();
    }
});