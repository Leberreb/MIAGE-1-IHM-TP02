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

    console.log("Chart created.");
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Altitude (en mètres)',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgb(255, 165, 0)'
            ],
            borderColor: [
                'rgb(53, 58, 64)'
            ],
            borderWidth: 1
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

console.log('ChartJS Parameters imported.');