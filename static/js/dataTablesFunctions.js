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
	enableButton($('#reinitialiseChartButton'), v_table, 0);
	enableButton($('#generateChartButton'), v_table, 1);
	enableButton($('#reinitialiseChartButtonBtm'), v_table, 0);
	enableButton($('#generateChartButtonBtm'), v_table, 1);
}

// Add new row in DataTable
function addRow(longitude, latitude) {
	// Put values in the new row
	v_table.row.add([
		String(counter),
		'',
		longitude.toFixed(2),
		latitude.toFixed(2),
		currentElevation.toString()
	]).draw(false);

	// Check if the buttons should be enabled
	enableButton($('#reinitialiseChartButton'), v_table, 0);
	enableButton($('#generateChartButton'), v_table, 1);
	enableButton($('#reinitialiseChartButtonBtm'), v_table, 0);
	enableButton($('#generateChartButtonBtm'), v_table, 1);
}

// Enable of Disable the button depending on the number of rows
function enableButton(pButton, pTable, pMinCount) {
	if (pTable.rows().count() > pMinCount) {
		pButton.attr("disabled", false);
	} else {
		pButton.attr("disabled", true);
	}
}

console.log("DataTable Functions imported.");