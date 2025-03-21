Highcharts.setOptions({
  colors: ['#f0836d','#7E1500',],
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
      ],
      thousandsSep:' ',
  }
});

Highcharts.chart('graphique1', {
    chart: {
    },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/4_Creations_et_defaillances_d_entreprises/4_4_Emplois_menaces/liquidations_judiciaires.csv',
        enablePolling: true
    },
    credits: {
      enabled:false
    },
    plotOptions: {
        series: {
          pointWidth: 35,
          lineWidth: 1,
            marker: {
              enabledThreshold: 2,
              radius: 3,
              fillColor: '#FFFFFF',
              lineWidth: 2,
              lineColor: null // inherit from series,
            }
        }
    },
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
    series: [{
        type:'column',
        name: '2019',
        data: {
        },
        tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
        valueDecimals: 0
       }
    },{
        type:'column',
        name: '2020',
        data: {
        },
        tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
        valueDecimals: 0
       }
    },{
      type:'column',
      name: '2021',
      data: {
      },
      tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
      valueDecimals: 0
     }
  },{
    type:'column',
    name: '2022',
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
    valueDecimals: 0
   }
},{
  type:'column',
  name: '2023',
  data: {
  },
  tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
  valueDecimals: 0
 }
}],
    exporting: {
      filename: 'Liquidations_judiciaires__Observatoire-economie-parisienne__Apur',
      chartOptions:{
        // add logo, titles, and sources updated in in the html page
        title: {
          text: "."
        },
        caption: {
          text: "Source : Greffe du tribunal de commerce. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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


Highcharts.chart('graphique2', {
  chart: {
  },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/4_Creations_et_defaillances_d_entreprises/4_4_Emplois_menaces/procedures_observations.csv',
        startColumn:0,
        // endColumn:3,
    },
    plotOptions: {
        series: {
          pointWidth: 35,
          lineWidth: 2,
            marker: {
              enabledThreshold: 2,
              radius: 3,
              fillColor: '#FFFFFF',
              lineWidth: 2,
              lineColor: null // inherit from series,
            }
        }
    },
    yAxis: [{ //--- Primary yAxis
    className: 'highcharts-color-0',
    gridLineColor: '#efefef',
    gridLineDashStyle: 'dash',
    labels: {
      format: '{value}',
      formatter: function() {
        return Highcharts.numberFormat(this.value, 0, '.', ' ');
      },
            style: {
                color: '#7E1500'
            }
        },
    title: {
       enabled: false,
     }
}, { //--- Secondary yAxis
    className: 'highcharts-color-1',
    gridLineColor: '#efefef',
    gridLineDashStyle: 'dash',
    labels: {
      style: {
        color: '#f0836d',
      }
    },
    plotOptions: {
        series: {
          lineWidth: 1,
            marker: {
              enabledThreshold: 2,
              radius: 3,
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
        align: 'left',
              x: 0,
              y: -2,
              style: {
                  color: '#CFCFCF'
              }
          },
     title: {
        enabled: false,
      }
    }]
,
    title: {
      enabled: false,
        style: {
            color: '#D3BD00'
        }
    },
    opposite: true
}]
,
series: [{
    type:'column',
    yAxis: 1,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
    valueDecimals: 0
  },
},
  {
    type:'spline',
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
    valueDecimals: 0
  },
    dashStyle: 'Dot',
    color: '#7E1500',
}],
     exporting: {
       filename: 'Procedures_observations__Observatoire-economie-parisienne__Apur',
       chartOptions:{
         // add logo, titles, and sources updated in in the html page
         title: {
           text: "."
         },
         caption: {
           text: "Source : Greffe du tribunal de commerce. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
         },
           chart:{
            events:{
                load:function(){
                    this.renderer.image('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/logo_apur.png', 0, 0, 50, 30).add();

                    title = document.getElementById('title2').innerHTML;
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
