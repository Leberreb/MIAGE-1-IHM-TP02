// Counter
var counter = 1;

// Delete Row Handler
$("#dataTable tbody").on("click", ".btn-delete", function () {
	v_table
		.row($(this).parents("tr"))
		.remove()
		.draw();
	console.log("row removed");
});

function addRow(longitude, latitude) {
	v_table.row.add([
		counter,
		'<div class="bg-orange grabbable"></div>',
		longitude,
		latitude,
		'<button type="button" class="btn-dark btn-delete">X</button>'
	]).draw(false);

	// Increments the counter by 1
	++counter;
}

console.log("DataTable Functions imported");