// Delete Row Handler
$("#dataTable tbody").on("click", ".btn-delete", function () {
	// Remove the row
	v_table
		.row($(this).parents("tr"))
		.remove()
		.draw();

	// Import requiered features
	var features = map.queryRenderedFeatures(e.point, {
		layers: ['measure-points']
	});

	// Delete the point on the map
	var id = features[0].properties.id;
	geojson.features = geojson.features.filter(function (point) {
		return point.properties.id !== id;
	});

	console.log("row removed");
});

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
		'<button type="button" class="btn-dark btn-delete">X</button>'
	]).draw(false);
}

console.log("DataTable Functions imported");