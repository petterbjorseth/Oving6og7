$(document).ready(function(){
    var counter = 0;
    var background = "rgb(76, 174, 76)";
    var riktig = [];


    $('#nySpmTab').on('dblclick', 'li', function (e) {
        var farge = e.currentTarget.getAttribute("style");
        if(farge === background){
            e.currentTarget.setAttribute("style", "background-color: white;");
        }else{
            e.currentTarget.setAttribute("style", "background-color: #4cae4c;");
        }
    });



    function finnRiktig(){
        var elements = document.getElementsByTagName("li");
        var farge;
        for(var i = 0; i < elements.length; i++){
            farge = elements[i].style.backgroundColor;
            riktig[i] = farge === background;
        }
    }

    $('#myForm').submit(function (e) {
        e.preventDefault();
        finnRiktig();
        $.ajax({
            url: 'rest/services/' + $('#navn').val(),
            type: 'POST',
            data: JSON.stringify({
                navn: $('#navn').val(),
                dato: $('#dato').val(),
                startTid: $('#starttid').val(),
                sporsmal: [
                    {
                    sporsmal: $('#sporsmal0').val(),
                    tid: $('#tid0').val(),
                    bildeURL: $('#bilde0').val(),
                    svar: [
                        {
                        svar: $('#svar01').val(),
                        riktig: riktig[0]
                        },
                        {
                            svar: $('#svar02').val(),
                            riktig: riktig[1]
                        },
                        {
                            svar: $('#svar03').val(),
                            riktig: riktig[2]
                        },
                        {
                            svar: $('#svar04').val(),
                            riktig: riktig[3]
                        }
                    ]},
                    {
                        sporsmal: $('#sporsmal1').val(),
                        tid: $('#tid1').val(),
                        bildeURL: $('#bilde1').val(),
                        svar: [
                            {
                                svar: $('#svar11').val(),
                                riktig: riktig[4]
                            },
                            {
                                svar: $('#svar12').val(),
                                riktig: riktig[5]
                            },
                            {
                                svar: $('#svar13').val(),
                                riktig: riktig[6]
                            },
                            {
                                svar: $('#svar14').val(),
                                riktig: riktig[7]
                            }
                            ]},
                    {
                        sporsmal: $('#sporsmal2').val(),
                        tid: $('#tid2').val(),
                        bildeURL: $('#bilde2').val(),
                        svar: [
                            {
                                svar: $('#svar21').val(),
                                riktig: riktig[8]
                            },
                            {
                                svar: $('#svar22').val(),
                                riktig: riktig[9]
                            },
                            {
                                svar: $('#svar23').val(),
                                riktig: riktig[10]
                            },
                            {
                                svar: $('#svar24').val(),
                                riktig: riktig[11]
                            }
                        ]},
                    {
                        sporsmal: $('#sporsmal3').val(),
                        tid: $('#tid3').val(),
                        bildeURL: $('#bilde3').val(),
                        svar: [
                            {
                                svar: $('#svar31').val(),
                                riktig: riktig[12]
                            },
                            {
                                svar: $('#svar32').val(),
                                riktig: riktig[13]
                            },
                            {
                                svar: $('#svar33').val(),
                                riktig: riktig[14]
                            },
                            {
                                svar: $('#svar34').val(),
                                riktig: riktig[15]
                            }
                        ]},
                    {
                        sporsmal: $('#sporsmal4').val(),
                        tid: $('#tid4').val(),
                        bildeURL: $('#bilde4').val(),
                        svar: [
                            {
                                svar: $('#svar41').val(),
                                riktig: riktig[16]
                            },
                            {
                                svar: $('#svar42').val(),
                                riktig: riktig[17]
                            },
                            {
                                svar: $('#svar43').val(),
                                riktig: riktig[18]
                            },
                            {
                                svar: $('#svar44').val(),
                                riktig: riktig[19]
                            }
                        ]}
                ]
            }),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json'
        });
        window.location.href = "index.html";
    });

    $('#tilbake').click(function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    });
});
