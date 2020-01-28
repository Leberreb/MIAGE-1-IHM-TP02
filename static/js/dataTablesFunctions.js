// Delete Row Handler
$("#dataTable tbody").on("click", ".btn-delete", function() {
  v_table
    .row($(this).parents("tr"))
    .remove()
    .draw();
  console.log("row removed");
});

console.log("DataTable Functions imported");