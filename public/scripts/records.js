let themeCl = localStorage.getItem("theme")
var ctx = document.getElementById('chart-6').getContext("2d")

var gradientStroke = ctx && ctx.createLinearGradient(500, 0, 0, 0);
gradientStroke.addColorStop(0, "#fd501c");
gradientStroke.addColorStop(1, "#ED3237");

var gradientStroke2 = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke2.addColorStop(0, "rgba(54, 246, 91,.4)");
gradientStroke2.addColorStop(1, "#36ad11");

var gradientStroke3 = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke3.addColorStop(0, "rgba(54, 91, 246,.4)");
gradientStroke3.addColorStop(1, "#f49080");

var gradientStroke4 = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke4.addColorStop(0, "rgba(124, 26, 191,.4)");
gradientStroke4.addColorStop(1, "#f49080");

// FILL BACKGROUND GRADIENT
var gradientFill = ctx.createLinearGradient(0, 0, 0, 450);
gradientFill.addColorStop(0, "rgba(246, 54, 91, 0.1)");
gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.02)");

var gradientFill2 = ctx.createLinearGradient(0, 0, 0, 450);
gradientFill2.addColorStop(0, "rgba(54, 246, 91, 0.1)");
gradientFill2.addColorStop(1, "rgba(255, 255, 255, 0.02)");

var gradientFill3 = ctx.createLinearGradient(0, 0, 0, 450);
gradientFill3.addColorStop(0, "rgba(54, 91, 246, 0.1)");
gradientFill3.addColorStop(1, "rgba(255, 255, 255, 0.02)");

var gradientFill4 = ctx.createLinearGradient(0, 0, 0, 450);
gradientFill4.addColorStop(0, "rgba(124, 26, 191, 0.1)");
gradientFill4.addColorStop(1, "rgba(255, 255, 255, 0.02)");

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [
                {
                label: "Registered",
                borderColor: gradientStroke,
                pointBorderColor: "rgba(246, 54, 91,.2)",
                pointBackgroundColor: gradientStroke,
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: gradientStroke,
                backgroundColor: gradientFill,
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 3,
                fill: true,
                borderWidth: 3,
                data: [100, 420, 350, 170, 480, 170, 160, 123, 12, 43, 126, 200]
            },
            {
                label: "IPD",
                borderColor: gradientStroke2,
                pointBorderColor: "rgba(246, 54, 91,.2)",
                pointBackgroundColor: gradientStroke2,
                pointHoverBackgroundColor: gradientStroke2,
                pointHoverBorderColor: gradientStroke2,
                backgroundColor: gradientFill2,
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 3,
                fill: true,
                borderWidth: 3,
                data: [120, 110, 280, 130, 400, 190, 400, 200, 124, 245, 321, 215]
            },
            {
                label: "OPD",
                borderColor: gradientStroke3,
                pointBorderColor: "rgba(246, 54, 91,.2)",
                pointBackgroundColor: gradientStroke3,
                pointHoverBackgroundColor: gradientStroke3,
                pointHoverBorderColor: gradientStroke3,
                backgroundColor: gradientFill3,
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 3,
                fill: true,
                borderWidth: 3,
                data: [100, 10, 120, 180, 110, 150, 120, 200, 344, 45, 78, 120]
            },
            {
                label: "Discharged",
                borderColor: gradientStroke4,
                pointBorderColor: "rgba(246, 54, 91,.2)",
                pointBackgroundColor: gradientStroke4,
                pointHoverBackgroundColor: gradientStroke4,
                pointHoverBorderColor: gradientStroke4,
                backgroundColor: gradientFill4,
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 3,
                fill: true,
                borderWidth: 3,
                data: [80, 140, 120, 180, 40, 200, 100, 20, 50, 200, 120, 20]
            }
    
    ]
    },
    options: {
        animation: {
            easing: "easeInOutBack"
        },
        // String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
        responsive: true,
        aspectRatio: 2.57,
        legend: {
            display:true, 
            position: "bottom",
            labels: {
                padding: 20,
                fontColor: themeCl === "enabled" ? "#eceef3" : "#4E4B4B",
            }
        },
        title: {
            display: false,
            // fontSize: 16,
            // fontColor: "#4E4B4B",
            // text: "Patients Statistic"
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    display: false
                },
                ticks: {
                    padding: 20,
                    fontColor: themeCl === "enabled" ? "#eceef3" : "#4E4B4B",
                    fontStyle: "bold"
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: themeCl === "enabled" ? "#eceef3" : "#4E4B4B",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                },
            }]
        }
    }
});

// -----------------BRITH & DEATH RATE
var ctx2 = document.getElementById('chart-7').getContext("2d")

// FILL BACKGROUND GRADIENT
var gradientFill = ctx2.createLinearGradient(0, 0, 0, 450);
gradientFill.addColorStop(0, "rgb(246, 20, 40)");
gradientFill.addColorStop(1, "#db4e12");

var gradientFill2 = ctx2.createLinearGradient(0, 0, 0, 450);
gradientFill2.addColorStop(0, "rgba(246, 54, 91,.4)");
gradientFill2.addColorStop(1, "rgba(255, 255, 255, 0.6)");


var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [
                {
                label: "Birth",
                // borderColor: gradientStroke,
                pointBorderColor: "rgba(246, 54, 91,.2)",
                pointBackgroundColor: gradientStroke,
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: gradientStroke,
                backgroundColor: gradientFill,
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 3,
                fill: true,
                // borderWidth: 2,
                data: [100, 420, 350, 170, 480, 170, 160, 123, 12, 43, 126, 200]
            },
            {
                label: "Death",
                // borderColor: gradientStroke2,
                pointBorderColor: "rgba(246, 54, 91,.2)",
                pointBackgroundColor: gradientStroke2,
                pointHoverBackgroundColor: gradientStroke2,
                pointHoverBorderColor: gradientStroke2,
                backgroundColor: gradientFill2,
                pointBorderWidth: 10,
                pointHoverRadius: 10,
                pointHoverBorderWidth: 1,
                pointRadius: 3,
                fill: true,
                // borderWidth: 2,
                data: [120, 110, 280, 130, 400, 190, 400, 200, 124, 245, 321, 215]
            },
    
    ]
    },
    options: {
        animation: {
            easing: "easeInOutBack"
        },
        // String - A legend template
        legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",
        responsive: true,
        aspectRatio: 2.57,
        legend: {
            display:true, 
            position: "bottom",
            labels: {
                padding: 20,
                fontColor: themeCl === "enabled" ? "#eceef3" : "#4E4B4B"
            }
        },
        title: {
            display: false,
        },
        scales: {
            xAxes: [{
                barPercentage: 0.6,
                gridLines: {
                    drawTicks: false,
                    display: false
                },
                ticks: {
                    padding: 20,
                    fontColor: themeCl === "enabled" ? "#eceef3" : "#4E4B4B",
                    fontStyle: "bold"
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: themeCl === "enabled" ? "#eceef3" : "#4E4B4B",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 20
                },
                gridLines: {
                    drawTicks: false,
                    display: false
                },
            }]
        }
    }
});
// -----------------INCOME VS EXPENSES FLOW
var ctx3 = document.getElementById('chart-8').getContext("2d")

var gradientStroke = ctx3.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "rgba(124, 26, 191,.4)");
gradientStroke.addColorStop(1, "#f49080");

var gradientFill = ctx3.createLinearGradient(0, 0, 0, 450);
gradientFill.addColorStop(0, "#fd501c");
gradientFill.addColorStop(1, "#ED3237");

var chart = new Chart(ctx3, {
    // The type of chart we want to create
    type: 'doughnut',
    // The data for our dataset
    data: {
        labels: ["Income", "Expenses"],
        datasets: [{
            pointBorderColor: "rgba(246, 54, 91,.2)",
            pointBackgroundColor: gradientStroke,
            pointHoverBackgroundColor: gradientStroke,
            pointHoverBorderColor: gradientStroke,
            backgroundColor: gradientFill,
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            borderWidth: 3,
            backgroundColor: [
                gradientFill, ["rgb(225,220,220)"]
            ],
            data: [54, 12],
        }]
    },

    // Configuration options go here
    options: {
        // elements: {
        //     // arc: {
        //     //     borderWidth: 0
        //     // }
        // },
        animation: {
            easing: "easeInOutBack"
        },
        responsive: true,
        aspectRatio: 2.57,
        legend: {
            display:true, 
            position: "bottom",
            labels: {
                padding: 20,
                fontColor: themeCl === "enabled" ? "#eceef3" : "#4E4B4B"
            }
        },
    }
});

// FILL BACKGROUND GRADIENT
// var gradientFill = ctx.createLinearGradient(0, 0, 0, 450);
// gradientFill.addColorStop(0, "rgb(246, 20, 40)");
// gradientFill.addColorStop(1, "#db4e12");

// var gradientFill2 = ctx.createLinearGradient(0, 0, 0, 450);
// gradientFill2.addColorStop(0, "rgba(246, 54, 91,.4)");
// gradientFill2.addColorStop(1, "rgba(255, 255, 255, 0.6)");


// var myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ["JAN", "FEB"],
//         datasets: [
//                 {
//                 label: "Birth",
//                 pointBorderColor: "rgba(246, 54, 91,.2)",
//                 pointBackgroundColor: gradientStroke,
//                 pointHoverBackgroundColor: gradientStroke,
//                 pointHoverBorderColor: gradientStroke,
//                 backgroundColor: gradientFill,
//                 pointBorderWidth: 10,
//                 pointHoverRadius: 10,
//                 pointHoverBorderWidth: 1,
//                 pointRadius: 3,
//                 fill: true,
//                 data: [100, 420]
//             },
//             {
//                 label: "Death",
//                 pointBackgroundColor: gradientStroke2,
//                 fill: true,
//                 data: [120, 110]
//             },
    
//     ]
//     },
//     options: {
//         animation: {
//             easing: "easeInOutBack"
//         },
//         responsive: true,
//         aspectRatio: 2.57,
//         legend: {
//             display:true, 
//             position: "bottom",
//             labels: {
//                 padding:10
//             }
//         },
//     }
// });