/* *** DATEPICKER *** */

var dateArrive = flatpickr('#dateArrive');
var dateDepart = flatpickr('#dateDepart');

/* *** TRAITEMENT *** */

document.getElementById('btnContact').addEventListener('click', function (e) {
    let dateArriveVal = document.getElementById('dateArrive').value;
    let dateDepartVal = document.getElementById('dateDepart').value;
    let emailVal = document.getElementById('email').value;
    let adulteVal = document.getElementById('inputAdulte').value;
    let enfantVal = document.getElementById('inputEnfant').value;

    if (dateArriveVal.length <= 0) {
        e.preventDefault();
    } else if (dateDepartVal.length <= 0) {
        e.preventDefault();
    } else if (emailVal == undefined || emailVal.length <= 0) {
        e.preventDefault();
    } else if (adulteVal == undefined || adulteVal.length <= 0) {
        e.preventDefault();
    } else if (enfantVal == undefined || enfantVal.length <= 0) {
        e.preventDefault();
    };
});
