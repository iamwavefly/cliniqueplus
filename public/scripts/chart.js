let themeColor = localStorage.getItem("theme")
var ctx = document.getElementById('chart-1').getContext("2d")

var gradientStroke = ctx.createLinearGradient(500, 0, 0, 0);
gradientStroke.addColorStop(0, "#ec0000");
gradientStroke.addColorStop(1, "#ec8600");

var gradientStroke2 = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke2.addColorStop(0, "rgb(0, 96, 251)");
gradientStroke2.addColorStop(1, "#0066c5");

// FILL BACKGROUND GRADIENT
var gradientFill = ctx.createLinearGradient(0, 0, 0, 450);
gradientFill.addColorStop(0, "rgba(246, 54, 91, 0.1)");
gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.02)");

var gradientFill2 = ctx.createLinearGradient(0, 0, 0, 170);
gradientFill2.addColorStop(0, "rgba(0, 7, 19, 0.061)");
gradientFill2.addColorStop(1, "rgba(0, 7, 19, 0.061)");

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        datasets: [
                {
                label: "Outpatient",
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
                data: [400, 420, 650, 670, 480, 270, 160, 423, 402, 663, 126, 600]
            },
            {
                label: "Inpatient",
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
                data: [200, 300, 120, 180, 110, 150, 120, 200, 344, 45, 78, 40]
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
                fontColor: themeColor === "enabled" ? "#eceef3" : "#4E4B4B",
            }
        },
        title: {
            display: false,
        },
        scales: {
            xAxes: [{
                gridLines: {
                    drawTicks: false,
                    display: false
                },
                ticks: {
                    padding: 20,
                    fontColor: themeColor === "enabled" ? "#eceef3" : "#4E4B4B",
                    fontStyle: "bold"
                }
            }],
            yAxes: [{
                ticks: {
                    fontColor: themeColor === "enabled" ? "#eceef3" : "#4E4B4B",
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

// gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');
// new Chart(document.getElementById("myChart"), {
//     type: 'bar',
//     data: {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//         datasets: [{
//           // -------------------LINE OUTPATIENT------------------
//           label: "Outpatient",
//           type: "line",
//           borderColor: "rgba(240, 200, 200, 0.6)",
//             pointBackgroundColor: 'rgba(240, 200, 200, 0.6)',
//           data: [408,547,675,734,200,212,233,500,233,900,200,400],
//           fill: false
//         }, 
//         {
//           // -------------------LINE INPATIENT------------------
//           label: "Inpatient",
//           type: "line",
//           borderColor: "#F6365B",
//             pointBackgroundColor: '#F6365B',
//           data: [133,221,783,2478,300,400,600,200,200,300,400,425],
//           fill: false
//         }, 
//         {
//           // -------------------BAR OUTPATIENT------------------
//           label: "Outpatient",
//           type: "bar",
//           backgroundColor: "rgba(240, 200, 200, 0.6)",
//           data: [408,547,675,734,200,212,233,500,233,900,200,400],
//         }, 
//         {
//           // -------------------BAR INPATIENT------------------
//           label: "Inpatient",
//           type: "bar",
//           backgroundColor: "#ED3237",
//           backgroundColorHover: "#3e95cd",
//           data: [133,221,783,2478,300,400,600,200,200,300,400,425]
//         }
//       ]
//     },
//     options: {
//         animation: {
//             easing: 'easeInOutQuad',
//             duration: 520
//         },
//         scales: {
//             // xAxes: [{
//             //     stacked: true
//             // }],
//             // yAxes: [{
//             //     stacked: true
//             // }]
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true,
//                     },
//                     gridLines: {
//                         display: false,
//                     }
//                 }],
//                 xAxes: [{
//                     // Change here
//                     barPercentage: 0.5,
//                     gridLines: {
//                         display: false,
//                     } 
//                 }]
//         },
//         title: {
//             display: false,
//             text: 'Population growth (millions): Europe & Africa'
//         },
//         legend: { display: false },
//         responsive: true,
//         maintainAspectRatio: false
//     }
// });
// ---------------------------------------------------
//----------------FINANCIAL---------------------------
//----------------------------------------------------
new Chart(document.getElementById("chart__finance"), {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [ 
        {
          // -------------------BAR OUTPATIENT------------------
          label: "Income",
          type: "bar",
          backgroundColor: "rgba(240, 200, 200, 0.6)",
          data: [408,547,675,534,400,212,133,800,233,900,200,400],
        }, 
        {
          // -------------------BAR INPATIENT------------------
          label: "Expenses",
          type: "bar",
          backgroundColor: "#ED3237",
          backgroundColorHover: "#3e95cd",
          data: [33,121,183,278,100,200,200,200,200,300,100,25]
        }
      ]
    },
    options: {
        animation: {
            easing: 'easeInOutQuad',
            duration: 520
        },
        scales: {
            // xAxes: [{
            //     stacked: true
            // }],
            // yAxes: [{
            //     stacked: true
            // }]
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                    gridLines: {
                        display: false,
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 0.8,
                    gridLines: {
                        display: false,
                    } 
                }]
        },
        title: {
            display: false,
        },
        legend: { display: false },
        responsive: true,
        maintainAspectRatio: false
    }
});
// ---------------------------------------------------
//----------------BY MONTH---------------------------
//----------------------------------------------------
new Chart(document.getElementById("chart-5"), {
    type: 'line',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
          // -------------------LINE OUTPATIENT------------------
          label: "Patient",
          type: "line",
          borderColor: "#147AD6",
            pointBackgroundColor: '#147AD6',
          data: [408,547,675,734,200,212, 24],
        //   fill: false
        },
      ]
    },
    options: {
        animation: {
            easing: 'easeInOutQuad',
            duration: 520
        },
        scales: {
            // xAxes: [{
            //     stacked: true
            // }],
            // yAxes: [{
            //     stacked: true
            // }]
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                    },
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        fontColor: "#f1f1f1"
                    }
                }],
                xAxes: [{
                    // Change here
                    barPercentage: 0.5,
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        fontColor: "#f1f1f1"
                    }
                }]
        },
        legend: { 
            display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});