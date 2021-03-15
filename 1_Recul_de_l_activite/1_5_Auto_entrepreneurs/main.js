Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#D3BD00','#D39500']
});

Highcharts.chart('graphique', {

    title: {
        text: 'Global temperature change'
    },

    subtitle: {
        text: 'Data module: Show only last 20 years by limiting start row.'
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/1_Recul_de_l_activite/1_5_Auto_entrepreneurs/auto_entrepreneurs.csv',
        endColumn: 2,
    },

    xAxis: {
        allowDecimals: false
    },
    tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} €</b><br/>',
     valueDecimals: 2
    },
    series: [{
        name: 'Annual mean'
    }]
});
// Highcharts.stockChart('graphique', {
//     chart: {
//         type: 'spline',
//          height: 600,
//     },
//     title: {
//         text: 'Evolution du chiffre d’affaires déclaré des auto-entrepreneurs en Ile-de-France 2019-2020 (données provisoires)'
//     },
//     scrollbar: {
//       enabled: false
//     },
//     data: {
//         csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/1_Recul_de_l_activite/1_5_Auto_entrepreneurs/auto_entrepreneurs.csv',
//         enablePolling: true,
//         endColumn: 2,
//     },
//     caption: {
//         text: 'Source : Urssaf, 2020'
//     },
//     navigator: {
//       outlineWidth: 0,
//       maskFill: 'rgba(0, 0, 0, 0.2)',
//       handles: {
//         symbols: ['o', 'o'],
//         backgroundColor: 'grey',
//         borderColor: 'grey',
//       },
//       xAxis: {
//         gridLineWidth: 0,
//         labels: {
//           enabled: false
//         }
//       },
//       series: {
//         // type: 'areaspline',
//         color: '#bbb'
//       }
//     },
//     plotOptions: {
//         series: {
//           showInNavigator: true,
//           marker: {
//             enabled: false,
//           },
//         }
//     },
//     rangeSelector:{
//       enabled:false
//     },
//     credits: {
//       enabled:false
//     },
//     xAxis: {
//           gapGridLineWidth: 0
//     },
//     legend: {
//       enabled:true
//     },
//     yAxis: {
//      title: {
//         enabled: false,
//       }
//      },
//      tooltip: {
//          // pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
//          valueDecimals: 2
//      },
//      exporting: {
//          buttons: {
//              contextButton: {
//                  menuItems: [
//                      'printChart',
//                      'separator',
//                      'downloadPNG',
//                      'downloadJPEG',
//                      'downloadPDF',
//                      'downloadSVG'
//                  ]
//              }
//          }
//      },
// });
