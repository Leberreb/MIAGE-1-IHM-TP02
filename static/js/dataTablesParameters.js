// Datatable variable
var v_table;

$(document).ready(function () {
  // DataTable features
  v_table = $("#dataTable").DataTable({
    paging: false,
    search: false,
    info: false,
    bFilter: false,
    rowReorder: true,
    columnDefs: [{
        targets: 0,
        visible: false
      },
      {
        orderable: false,
        targets: "_all"
      },
    ]
  });

  // DataTable imported
  console.log("DataTable Parameters imported.");
});