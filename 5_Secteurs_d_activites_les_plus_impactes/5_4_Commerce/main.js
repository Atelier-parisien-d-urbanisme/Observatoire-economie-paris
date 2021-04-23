Highcharts.setOptions({
    colors: ['#CE8C34','#F1BB63'],
    style: {
     fontFamily: 'Roboto'
   }
});

Highcharts.chart('graphique1', {
    chart: {
        type: 'column'
    },
    title: {
        text: null
    },
    credits: {
      enabled:false
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_4_Commerce/commerce.csv',
        enablePolling: true,
        endcolumn:2,
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        minPointLength: 3,
        dataLabels: {
          enabled: true,
            style: {
            textOutline: 0,
            fontWeight: 'light',
            color: 'black',
           }
        }
      },
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
      //--- Primary yAxis
      // className: 'highcharts-color-0',
      gridLineColor: '#efefef',
      gridLineDashStyle: 'dash',
        min: 0,
          title: {
           enabled: false,
          },
          labels: {
            format: '{value}',
            formatter: function() {
              return Highcharts.numberFormat(this.value, 0, '.', ' ');
            },
                style: {
                    color: '#CFCFCF'
                }
        },
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'light',
                  color: '#C8C8C8',
                  textOutline: 0
              }
          },

      }, { //--- Secondary yAxis
        className: 'highcharts-color-1',
        min: 0,
        title: {
        enabled: false,
        style: {
            color: '#38cae9'
          }
        },
        labels: {
          format: '{value} %',
                style: {
                    color: 'black'
                }
            },
        opposite: true
      }],


    series: [
      {
         yAxis: 0,
         name: 'locaux en travaux',
         tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>Total: {point.stackTotal}'
       },
     },{
        yAxis: 0,
        name: 'locaux vacants',
        tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>Total: {point.stackTotal}'
      },
    },
      {
        type:'spline',
        yAxis: 1,
        data: {
        },
        tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>'
      },
        dashStyle: 'dotted',
        color: 'black'
    },

  ],
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
        type: 'spline',
        style: {
         fontFamily: 'Roboto'
       }
    },
    title: {
        text: null
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_4_Commerce/commerce2.csv',
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
