Highcharts.setOptions({
    colors: ['#F5AA9C','#CE8C34','#7E1500','#3D71EA'],
    style: {
     fontFamily: 'Roboto'
   },
    lang: {
      downloadPNG: "Télécharger  en image PNG",
      downloadJPEG: "Télécharger en image JPEG",
      downloadPDF: "Télécharger  en document PDF",
      downloadSVG: "Télécharger  en document Vectoriel SVG",
      printChart: "Imprimer le graphique",
      months: [
          'Janvier', 'Février', 'Mars', 'Avril',
          'Mai', 'Juin', 'Juillet', 'Août',
          'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ],
      shortMonths:['Janvier', 'Février', 'Mars', 'Avril',
      'Mai', 'Juin', 'Juillet', 'Août',
      'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      weekdays: [
          'Dimanche', 'Lundi', 'Mardi', 'Mercredi',
          'Jeudi', 'Vendredi', 'Samedi'
      ]
  }
});

let urlParis = 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/4_Creations_et_defaillances_d_entreprises/4_3_Ouvertures_procedures_collectives_MGP/ouverture_procedures_collectives.csv'

let urlMGP = 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/4_Creations_et_defaillances_d_entreprises/4_3_Ouvertures_procedures_collectives_MGP/ouverture_procedures_collectives_MGP.csv'

let url = urlParis;


// Highcharts.chart('graphique', {
//   chart: {
//     type:'line',
//   },
//     title: {
//         text: null
//     },
//     data: {
//         csvURL: url,
//         startColumn:0,
//         endColumn:4,
//     },
//     plotOptions: {
//         series: {
//           lineWidth: 1,
//             marker: {
//               enabledThreshold: 2,
//               radius: 3,
//               sumbols:'circle',
//               fillColor: '#FFFFFF',
//               lineWidth: 2,
//               lineColor: null // inherit from series,
//             }
//         }
//     },

//     yAxis: [{
//       gridLineColor: '#efefef',
//       gridLineDashStyle: 'dash',
//       labels: {
//         format:'{value}',
//         // align: 'left',
//         //       x: 0,
//         //       y: -2,
//               style: {
//                   color: '#CFCFCF'
//               }
//           },
//      title: {
//         enabled: false,
//       }
//       }]
// ,
// series: [{
//     type:'column',
//     yAxis: 0,
//     data: {
//     },
//     tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
//     valueDecimals: 0
//    }
// },{
//   type:'spline',
//     yAxis: 0,
//     data: {
//     },
//     tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
//     valueDecimals: 0
//    }
// }],
//      exporting: {
//        filename: 'Ouverture_procedures_collectives__Observatoire-economie-parisienne__Apur',
//        chartOptions:{
//          // add logo, titles, and sources updated in in the html page
//          title: {
//            text: "."
//          },
//          caption: {
//            text: "Source : Greffe du tribunal de commerce. La procédure collective est une procédure de redressement ou de liquidation judiciaire organisant le règlement du paiement des créances d'une entreprise en cessation de paiement. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
//          },
//            chart:{
//             events:{
//                 load:function(){
//                     this.renderer.image('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/logo_apur.png', 0, 0, 50, 30).add();

//                     title = document.getElementById('title1').innerHTML;
//                     this.renderer.text(title, 70, 20)
//                      .css({
//                        color: 'black',
//                        fontFamily: 'Roboto',
//                        fontSize: 14,
//                        fontWeight: 'bold',
//                        width: 400
//                      }).add().toFront();
//                 }
//             }
//         }
//       },

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
//      credits: {
//        enabled:false
//        },
// });




function getGraphique() {
  graphChart = new 
  Highcharts.chart('graphique', {
    chart: {
      type:'line',
    },
      title: {
          text: null
      },
      data: {
          csvURL: url,
          startColumn:0,
          endColumn:4,
      },
      plotOptions: {
          series: {
            lineWidth: 1,
              marker: {
                enabledThreshold: 2,
                radius: 3,
                sumbols:'circle',
                fillColor: '#FFFFFF',
                lineWidth: 2,
                lineColor: null // inherit from series,
              }
          }
      },
  
      yAxis: [{
        gridLineColor: '#efefef',
        gridLineDashStyle: 'dash',
        labels: {
          format:'{value}',
          // align: 'left',
          //       x: 0,
          //       y: -2,
                style: {
                    color: '#CFCFCF'
                }
            },
       title: {
          enabled: false,
        }
        }]
  ,
  series: [{
      type:'column',
      yAxis: 0,
      data: {
      },
      tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
      valueDecimals: 0
     }
  },{
    type:'spline',
      yAxis: 0,
      data: {
      },
      tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
      valueDecimals: 0
     }
  }],
       exporting: {
         filename: 'Ouverture_procedures_collectives__Observatoire-economie-parisienne__Apur',
         chartOptions:{
           // add logo, titles, and sources updated in in the html page
           title: {
             text: "."
           },
           caption: {
             text: "Source : Greffe du tribunal de commerce. La procédure collective est une procédure de redressement ou de liquidation judiciaire organisant le règlement du paiement des créances d'une entreprise en cessation de paiement. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
           },
             chart:{
              events:{
                  load:function(){
                      this.renderer.image('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/logo_apur.png', 0, 0, 50, 30).add();
  
                      title = document.getElementById('title1').innerHTML;
                      this.renderer.text(title, 70, 20)
                       .css({
                         color: 'black',
                         fontFamily: 'Roboto',
                         fontSize: 14,
                         fontWeight: 'bold',
                         width: 400
                       }).add().toFront();
                  }
              }
          }
        },
  
           buttons: {
               contextButton: {
                   menuItems: [
                       'printChart',
                       'separator',
                       'downloadPNG',
                       'downloadJPEG',
                       'downloadPDF',
                       'downloadSVG'
                   ]
               }
           }
       },
       credits: {
         enabled:false
         },
  });
  
}
getGraphique();


// var btnmgp = document.querySelector('#btn-mgp');

// // This will run when the .click-me element is clicked
// btnmgp.addEventListener('click', function (event) {
//   console.log('hey')
//   url = urlMGP ;
//   // var chart =  document.querySelector("graphique").highcharts.stockChart();
//   graphChart.redraw();
//   btnmgp.addClass('active');
//   // $(this).siblings().removeClass('active');
// });

// document.getElementById('btn-mgp').addEventListener('click', function () {
//   // Using an if statement to check the class
//   if (this.classList.contains('active')) {
//     // The box that we clicked has a class of bad so let's remove it and add the good class
//    this.classList.remove('active');
//   //  this.classList.add('good');
//   } else {
//     // The user obviously can't follow instructions so let's alert them of what is supposed to happen next
//     this.classList.add('active');
//     url = urlMGP ;
//     // var chart =  document.querySelector("graphique").highcharts.stockChart();
//     graphChart.redraw();
//   }
// });

mgpBtn = document.getElementById('btn-mgp');

mgpBtn.addEventListener('click', function () {
  url = urlMGP;
  graphChart.destroy();
  getGraphique();
  this.classList.add('active');
  parisBtn.classList.remove('active');
});


parisBtn = document.getElementById('btn-paris');

parisBtn.addEventListener('click', function () {
  url = urlParis;
  graphChart.destroy();
  getGraphique();
  this.classList.add('active');
  mgpBtn.classList.remove('active');
});
