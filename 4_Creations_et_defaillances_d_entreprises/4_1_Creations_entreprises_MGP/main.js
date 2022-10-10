Highcharts.setOptions({
  // colors: ['#FADFD9','#f0836d'],
  colors: ['#f0836d','#7E1500','#FADFD9'],
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






Highcharts.chart('graphique', {
  chart: {
      type: 'spline',
      height:400,
      style: {
       fontFamily: 'Roboto'
     }
  },
  title: {
      text: null
  },

  data: {
      csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/4_Creations_et_defaillances_d_entreprises/4_1_Creations_entreprises_MGP/creations_tot.csv',
      enablePolling: true
  },

  credits: {
    enabled:false
  },
  tooltip: {
     shared: true,
 },
//   xAxis: {
//   labels: {
//   step: 1,
//   rotation: -45,
//   style: {
//     fontSize: '8px',
//     }
//   }
// },
  yAxis: {
    gridLineColor: '#efefef',
    gridLineDashStyle: 'dash',
    labels: {
      format: '{value}',
      formatter: function() {
        return Highcharts.numberFormat(this.value, 0, '.', ' ');
      },
        style: {
          color: '#CFCFCF'
          }
        },
   title: {
      enabled: false,
    }
   },
  legend: {
   enabled: true
  },
  plotOptions: {
      series: {
        lineWidth: 1,
        marker: {
          enabled: false,
          radius: 3,
          fillColor: '#FFFFFF',
          lineWidth: 2,
          lineColor: null // inherit from series,
        },
        dataLabels: {
           enabled: true,
           align: 'left',
           crop: false,
           useHTML: false,
           formatter: function() {
               if (this.point.x == this.series.data.length - 1) {
                 return '<span style="color: '+ this.color + '">' + Highcharts.numberFormat(this.y,0) + '</span>';
               } else {
                   return null;
               }
           },
       }
    }
},
responsive: {
    rules: [{
        condition: {
            maxWidth: 560
        },
        // Labels space on mobile
        chartOptions: {
            xAxis: {
                labels: {
                    step: 4,
                }
            },
        }
    }]
},
  exporting: {
    filename: 'Demandeur-d-emploi__Observatoire-economie-parisienne__Apur',
    chartOptions:{
      title: {
        text: "."
      },
      caption: {
        text: "Source : Pôle emploi-Dares, STMT ; données CVS-CJO. Un demandeur d’emploi est une personne inscrite sur les listes de Pôle emploi. L’inscription sur les listes de Pôle emploi est soumise à certaines conditions, mais les demandeurs d’emploi peuvent être ou non indemnisés, certains peuvent occuper un emploi. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
      },
        chart:{
         events:{
             load:function(){
                // add logo, titles, and sources update in in the html page
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
      }

});




// Highcharts.chart('graphiqueOld', {
//   chart: {
//       type: 'column',
//       height:400,
//       style: {
//        fontFamily: 'Roboto'
//      }
//   },
//   title: {
//       text: null
//   },

//   data: {
//       csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/4_Creations_et_defaillances_d_entreprises/4_1_Creations_entreprises_MGP/part_autoEnrepreneur.csv',
//       enablePolling: true
//   },

//   credits: {
//     enabled:false
//   },
//  tooltip: {
//   pointFormat: '<span style="color: grey">{series.name}</span>: <b>{point.y} %</b><br/>',
//   valueDecimals: 1,
//   color:'#f0836d',
//   shared: true,
// },
//   yAxis: {
//     gridLineColor: '#efefef',
//     gridLineDashStyle: 'dash',
//     labels: {
//       format: '{value} %',
//       // formatter: function() {
//       //   return Highcharts.numberFormat(this.value, 0, '.', ' ');
//       // },
//         style: {
//           color: '#CFCFCF'
//           }
//         },
//    title: {
//       enabled: false,
//     }
//    },
//    plotOptions: {
//     series: {
//       lineWidth: 1,
//       marker: {
//         // enabled: false,
//         Symbol:"circle",
//         radius: 3,
//         fillColor: '#FFFFFF',
//         lineWidth: 2,
//         lineColor: null // inherit from series,
        
//       },
//     //   dataLabels: {
//     //      enabled: true,
//     //      align: 'left',
//     //      crop: false,
//     //      useHTML: false,
//     //      formatter: function() {
//     //          if (this.point.x == this.series.data.length - 1) {
//     //            return '<span style="color: '+ this.color + '">' + Highcharts.numberFormat(this.y,0) + '</span>';
//     //          } else {
//     //              return null;
//     //          }
//     //      },
//     //  }
//   }
// },

//   legend: {
//    enabled: true
//   },
// //   plotOptions: {
// //       series: {
// //         lineWidth: 1,
// //         marker: {
// //           enabled: false,
// //           radius: 3,
// //           fillColor: '#FFFFFF',
// //           lineWidth: 2,
// //           lineColor: null // inherit from series,
// //         },
// //         dataLabels: {
// //            enabled: true,
// //            align: 'left',
// //            crop: false,
// //            useHTML: false,
// //            formatter: function() {
// //                if (this.point.x == this.series.data.length - 1) {
// //                  return '<span style="color: '+ this.color + '">' + Highcharts.numberFormat(this.y,0) + '</span>';
// //                } else {
// //                    return null;
// //                }
// //            },
// //        }
// //     }
// // },
// responsive: {
//     rules: [{
//         condition: {
//             maxWidth: 560
//         },
//         // Labels space on mobile
//         chartOptions: {
//             xAxis: {
//                 labels: {
//                     step: 4,
//                 }
//             },
//         }
//     }]
// },
//   exporting: {
//     filename: 'Demandeur-d-emploi__Observatoire-economie-parisienne__Apur',
//     chartOptions:{
//       title: {
//         text: "."
//       },
//       caption: {
//         text: "Source : Pôle emploi-Dares, STMT ; données CVS-CJO. Un demandeur d’emploi est une personne inscrite sur les listes de Pôle emploi. L’inscription sur les listes de Pôle emploi est soumise à certaines conditions, mais les demandeurs d’emploi peuvent être ou non indemnisés, certains peuvent occuper un emploi. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
//       },
//         chart:{
//          events:{
//              load:function(){
//                 // add logo, titles, and sources update in in the html page
//                  this.renderer.image('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/logo_apur.png', 0, 0, 50, 30).add();

//                  title = document.getElementById('title1').innerHTML;
//                  this.renderer.text(title, 70, 20)
//                   .css({
//                     color: 'black',
//                     fontFamily: 'Roboto',
//                     fontSize: 14,
//                     fontWeight: 'bold',
//                     width: 400
//                   }).add().toFront();
//              }
//          }
//      }
//    },
//           buttons: {
//               contextButton: {
//                   menuItems: [
//                       'printChart',
//                       'separator',
//                       'downloadPNG',
//                       'downloadJPEG',
//                       'downloadPDF',
//                       'downloadSVG'
//                   ]
//               }
//           }
//       }

// });



Highcharts.chart('graphiqueOld', {
  chart: {
    height:400
  },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/4_Creations_et_defaillances_d_entreprises/4_1_Creations_entreprises_MGP/creations_entreprises.csv'
    },
    credits: {
      enabled:false
    },
    tooltip: {
       shared: true,
   },
  yAxis: [{ //--- Primary yAxis
  className: 'highcharts-color-0',
   title: {
      text: null
  },
  gridLineColor: '#efefef',
  gridLineDashStyle: 'dash',
  max:100,
  min:0,
  labels: {
     format: '{value} %',
          style: {
          color: 'grey'
          }
      },
}, { //--- Secondary yAxis
  min:0,
  className: 'highcharts-color-1',
  gridLineColor: '#efefef',
  gridLineDashStyle: 'dash',
  title: {
      text: null,
  },
  labels: {
    format: '{value}',
    formatter: function() {
      return Highcharts.numberFormat(this.value, 0, '.', ' ');
    },
          style: {
            color: '#CECECE'
          }
      },
  opposite: true
}],
plotOptions: {
  series: {
    lineWidth: 1,
      marker: {
        symbol:'circle',
        radius: 2,
        fillColor: '#FFFFFF',
        lineWidth: 2,
        lineColor: null // inherit from series,
      }
  },
 
},
series: [
      {
        yAxis: 0,
        type: 'column',
        dashStyle: 'Dot',
        tooltip: {pointFormat: '<span style="color: grey">{series.name}</span>: <b>{point.y} %</b><br/>',
        valueDecimals: 0,
        // lineWidth:3,

        
      }
    },
  {
      yAxis: 0,
      type: 'column',
      dashStyle: 'Dot',
      tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
      valueDecimals: 0,
    },
    
  },
  {   
    yAxis: 1,
    type: 'spline',
    visible : false,
    lineWidth: 0.5,
    color: '#f0836d',
      marker: {
        enabled : false,
      },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
    valueDecimals: 0,

  },
  dataLabels: {
    enabled: true,
    align: 'left',
    crop: false,
    useHTML: false,
    formatter: function() {
        if (this.point.x == this.series.data.length - 1) {
          return '<span style="color: '+ this.color + '">' + Highcharts.numberFormat(this.y,0) + '</span>';
        } else {
            return null;
        }
    },
}
  
},
{
  yAxis: 1,
  type: 'spline',
  visible : false,
  color :'#7E1500',
    lineWidth: 0.5,
      marker: {
        enabled : false,
      }
,
  tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
  valueDecimals: 0,
},
dataLabels: {
  enabled: true,
  align: 'left',
  crop: false,
  useHTML: false,
  formatter: function() {
      if (this.point.x == this.series.data.length - 1) {
        return '<span style="color: '+ this.color + '">' + Highcharts.numberFormat(this.y,0) + '</span>';
      } else {
          return null;
      }
  },
}

}


],

  //   xAxis: {
  //   labels: {
  //   step: 1,
  //   rotation: -45,
  //   style: {
  //     fontSize: '8px',
  //     }
  //   }
  // },
    //
    // yAxis: {
    //   gridLineColor: '#efefef',
    //   gridLineDashStyle: 'dash',
    //   labels: {
    //     format:'{value}',
    //     // align: 'left',
    //     //       x: 0,
    //     //       y: -2,
    //           style: {
    //               color: '#CFCFCF'
    //           }
    //       },
    //  title: {
    //     enabled: false,
    //   }
    //  },
    exporting: {
      filename: 'Creation-entreprise__Observatoire-economie-parisienne__Apur',
      chartOptions:{
        // add logo, titles, and sources updated in in the html page
        title: {
          text: "."
        },
        caption: {
          text: "Source : Insee, Répertoire des entreprises et des établissements. Champ : activités marchandes hors agriculture. Données brutes. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
        }

});
