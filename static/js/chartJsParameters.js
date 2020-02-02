function createChart(p_labels, p_data) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: p_labels,
            datasets: [{
                label: 'Elevation (en mètres)',
                data: p_data,
                backgroundColor: [
                    'rgb(255, 165, 0)'
                ],
                borderColor: [
                    'rgb(53, 58, 64)'
                ],
                borderWidth: 2
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    document.getElementById('myChart').scrollIntoView();

    console.log("Chart created.");
}

console.log('ChartJS Parameters imported.');