Highcharts.setOptions({
    colors: ['#FADFD9','#f0836d'],
    style: {
     fontFamily: 'Roboto'
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
