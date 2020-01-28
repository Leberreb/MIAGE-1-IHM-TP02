$(document).ready(function () {
    // DataTable features
    var table = $("#dataTable").DataTable({
        ordering: true,
        paging: false,
        search: false,
        info: false,
        bFilter: false,
        rowReorder: {
            selector: 'tr'
        },
        columnDefs: [{
            targets: 0,
            visible: true
        }]
    });

    // DataTable imported
    console.log('dataTable imported.');
});