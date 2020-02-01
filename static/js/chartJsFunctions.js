function generateChartValues() {
    var numberOfRows = [];
    var altitudes = [];

    for (var i = 1; i <= v_table.rows().count(); i++) {
        numberOfRows.push(i);
        altitudes.push(v_table.rows(i-1).data()[0][2]);
    }

    createChart(numberOfRows, altitudes)
}

console.log('ChartJS Functions imported.');