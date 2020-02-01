// Delete Row by id
function removeRowById(id) {
	// Get the indexe of the row to delete
	var indexes = v_table
		.rows()
		.indexes()
		.filter(function (value, index) {
			return id === v_table.row(value).data()[0];
		});

	// Remove the row
	v_table.rows(indexes).remove().draw();

	// Check if the buttons should still be enabled
	enableButton($('#reinitialiseChartButton'), v_table);
	enableButton($('#generateChartButton'), v_table);
}

// Add new row in DataTable
function addRow(longitude, latitude) {
	// Put values in the new row
	v_table.row.add([
		String(new Date().getTime()),
		'',
		longitude,
		latitude,
		''
	]).draw(false);

	// Check if the buttons should be enabled
	enableButton($('#reinitialiseChartButton'), v_table);
	enableButton($('#generateChartButton'), v_table);
}

// Enable of Disable the button depending on the number of rows
function enableButton(pButton, pTable) {
	if (pTable.rows().count()) {
		pButton.attr("disabled", false);
	} else {
		pButton.attr("disabled", true);
	}
}

console.log("DataTable Functions imported.");