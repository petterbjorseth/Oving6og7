$(document).ready(function(){
    var counter = 0;
    var background = "background-color: #4cae4c;";
    $('#nyttSpm').click(function () {
        console.log('clicked');
        $('#nySpmTab tr:last').after('<tr> <td> <h3>Spørsmål ' + (++counter + 1) + '</h3><div class="form-group"> <label class="control-label col-sm-4" for="sporsmal' + counter + '">Spørsmål: </label> <div class="col-sm-8"> <input type="text" class="form-control" id="sporsmal' + counter + '" placeholder="Heihei"> </div> </div> <div class="form-group"> <label class="control-label col-sm-4" for="tid' + counter + '">Tid i sekunder: </label> <div class="col-sm-8"> <input type="text" class="form-control" id="tid' + counter + '"> </div> </div> <div class="form-group"> <label class="control-label col-sm-4" for="bilde' + counter + '">Bilde-url (valgfri): </label> <div class="col-sm-8"> <input type="text" class="form-control" id="bilde' + counter + '"> </div> </div> <ul class="list-group"> <li id="spm' + counter + '1" class="list-group-item"> <div class="form-group"> <label class="control-label col-sm-4" for="svar' + counter + '1">Svar: </label> <div class="col-sm-8"> <input type="text" class="form-control" id="svar' + counter + '1"> </div> </div> </li> <li id="spm' + counter + '2" class="list-group-item"> <div class="form-group"> <label class="control-label col-sm-4" for="svar' + counter + '2">Svar: </label> <div class="col-sm-8"> <input type="text" class="form-control" id="svar' + counter + '2"> </div> </div> </li> <li id="spm' + counter + '3" class="list-group-item"> <div class="form-group"> <label class="control-label col-sm-4" for="svar' + counter + '3">Svar: </label> <div class="col-sm-8"> <input type="text" class="form-control" id="svar' + counter + '3"> </div> </div> </li> <li id="spm' + counter + '4" class="list-group-item"> <div class="form-group"> <label class="control-label col-sm-4" for="svar' + counter + '4">Svar: </label> <div class="col-sm-8"> <input type="text" class="form-control" id="svar' + counter + '4"> </div> </div> </li> </ul> </td> </tr>');
    });

    $('#nySpmTab').on('dblclick', 'li', function (e) {
        var farge = e.currentTarget.getAttribute("style");
        console.log("Farge: " + farge);
        if(farge === background){
            e.currentTarget.setAttribute("style", "background-color: white;");
        }else{
            e.currentTarget.setAttribute("style", "background-color: #4cae4c;");
        }
    });

    $('#myForm').submit(function (e) {
        e.preventDefault();
        var formData = new FormData($('#myForm'));
        console.log(formData);
        $.ajax({
            url: 'rest/services',
            type: 'POST',
            data: JSON.stringify({
                navn: $('#navn').val(),
                dato: $('#dato').val(),
                startTid: $('#starttid').val(),
                sporsmal: {
                    sporsmal: $('#sporsmal0').val(),
                    tid: $('#tid0').val(),
                    bildeURL: $('#bilde0').val(),
                    svar1: $('#svar01').val(),
                    svar2: $('#svar02').val(),
                    svar3: $('#svar03').val(),
                    svar4: $('#svar04').val(),
                }
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            success: function(result) {
                console.log(result);
            }
        });
    });
});
