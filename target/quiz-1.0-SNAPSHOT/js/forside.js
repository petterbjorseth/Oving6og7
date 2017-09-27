$(document).ready(function () {
    $('#nyquiz').click(function () {
        window.location.href = "nyquiz.html";
    });

    $('#tab').DataTable({
        ajax: {
            url: 'rest/services',
            dataSrc: ''
        },
        columns: [
            {data: 'navn'},
            {data: 'dato'},
            {data: 'starttid'}
        ]
    });
});