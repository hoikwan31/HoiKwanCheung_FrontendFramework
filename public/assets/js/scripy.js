// Initialize the chart
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        // Labels for the x-axis
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22'],
        datasets: [{
            // Data for the first line
            data: [8, 9, 11, 12, 13, 13, 15, 16, 18, 20, 18, 16, 14, 11, 11, 11, 13, 14, 16, 18, 18, 18, 16],
            borderColor: '#3751FF',
            backgroundColor: 'rgba(55, 81, 255, 0.1)', 
            fill: true,
            lineTension: 0.5,
            pointRadius: 0,
            pointHoverRadius: 0,
        },
        {
            // Data for the second line
            data: [15, 14, 14, 11, 11, 11, 11, 12, 13, 13, 14, 14, 14, 13, 11, 10, 10, 10, 12, 16, 15, 15, 15],
            borderColor: '#9FA2B4',
            backgroundColor: 'rgba(159, 162, 180, 0.1)', 
            fill: true,
            lineTension: 0.5,
            pointRadius: 0,
            pointHoverRadius: 0,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    color: '#DFE0EB'
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: '#252733',
                titleFont: {
                    size: 16
                },
                bodyFont: {
                    size: 14
                },
                callbacks: {
                    label: function(context) {
                        return context.parsed.y;
                    }
                }
            }
        }
    }
});



// Toggle the sidebar when the burger menu icon is clicked
document.getElementById('burger-menu').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open');
});

// Close the sidebar when the close menu icon is clicked
document.getElementById('close-menu').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('open');
});



