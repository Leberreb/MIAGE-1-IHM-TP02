// Delete Row by id
function removeRowById(id) {
	var indexes = v_table
		.rows()
		.indexes()
		.filter(function (value, index) {
			return id === v_table.row(value).data()[0];
		});

	v_table.rows(indexes).remove().draw();
}

// Add new row in DataTable
function addRow(longitude, latitude) {
	v_table.row.add([
		String(new Date().getTime()),
		'',
		longitude,
		latitude,
	]).draw(false);
}

console.log("DataTable Functions imported");