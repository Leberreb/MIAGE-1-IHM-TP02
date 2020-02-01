// Datatable variable
var v_table;

$(document).ready(function () {
	// DataTable features
	v_table = $("#dataTable").DataTable({
		paging: false,
		search: false,
		info: false,
		bFilter: false,
		rowReorder: false,
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

	// Hide buttons when begining the new path
	enableButton($('#reinitialiseChartButton'), v_table);
	enableButton($('#generateChartButton'), v_table);

	// DataTable imported
	console.log("DataTable Parameters imported.");
});