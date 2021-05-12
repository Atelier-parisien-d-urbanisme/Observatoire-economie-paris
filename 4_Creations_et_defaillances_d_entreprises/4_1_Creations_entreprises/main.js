Highcharts.setOptions({
  colors: ['#FADFD9','#f0836d'],
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
    height:400
  },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/4_Creations_et_defaillances_d_entreprises/4_1_Creations_entreprises/creations_entreprises.csv'
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
      text: null
  },
  labels: {
    format: '{value}',
    formatter: function() {
      return Highcharts.numberFormat(this.value, 0, '.', ' ');
    },
          style: {
            color: '#f0836d'
          }
      },
  opposite: true
}],
series: [
  {
    yAxis: 0,
    type: 'column',
    lineWidth:0,
    marker: {
      enabled:false,

    },
    data: {
    },
    tooltip: {pointFormat: '<span style="color: grey">{series.name}</span>: <b>{point.y} %</b><br/>',
    valueDecimals: 0,
    color:'#f0836d'
   }
},
  {
      yAxis: 1,
      type: 'spline',
      data: {
      },
      lineWidth: 1,
        marker: {
          symbol:'circle',
          enabledThreshold: 2,
          radius: 3,
          fillColor: '#FFFFFF',
          lineWidth: 2,
          lineColor: null // inherit from series,
        }
    ,
      tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
      valueDecimals: 0,
      color: '#F3D9D4'
    },
  }],

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
