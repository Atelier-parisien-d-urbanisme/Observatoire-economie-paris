Highcharts.setOptions({
    colors: ['#FADFD9','#f0836d'],
    style: {
     fontFamily: 'Roboto'
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
    }],
    exporting: {
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
        endColumn:3,
    },

    yAxis: [{ //--- Primary yAxis
    className: 'highcharts-color-0',
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
}, { //--- Secondary yAxis
    className: 'highcharts-color-1',
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
    color: '#f0836d'
}],
     exporting: {
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
