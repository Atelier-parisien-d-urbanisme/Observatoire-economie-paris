Highcharts.setOptions({
    colors: ['#FCECD2', '#CE8C34','#E69818']
});

Highcharts.chart('graphique1', {
  chart: {
  },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_2_Tourisme/tourisme.csv',
        startColumn:0,
        endColumn:3,
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
     title: {
        enabled:false,
    },
    labels: {
    format: '{value}%',
    // align: 'left',
    //       x: 0,
    //       y: -2,
          style: {
              color: '#CFCFCF'
          }
  }
}]
,
series: [{
    type:'column',
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
    valueDecimals: 0
  },
  dataLabels: {
               enabled: true,
               format: '{y}%',
               style: {
                fontSize: '10px',
                fontFamily: 'Roboto',
                // color:'#38cae9',
            }
           },
},{
  type:'spline',
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
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
     },
     credits: {
       enabled:false
       },
});


Highcharts.chart('graphique2', {
    chart: {
        type: 'spline',
        style: {
         fontFamily: 'Roboto'
       }
    },
    title: {
        text: null
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_2_Tourisme/tourisme2.csv',
        enablePolling: true
    },

    credits: {
      enabled:false
    },

    plotOptions: {
        series: {
          color:'#CE8C34',
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
    xAxis: {
    labels: {
    step: 1,
    rotation: -45,
    style: {
      fontSize: '8px',
      }
    }
  },
    yAxis: {
      gridLineColor: '#efefef',
      gridLineDashStyle: 'dash',
      min:100000,
      max:180000,
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
     enabled: false
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
        valueDecimals: 0
    },
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
