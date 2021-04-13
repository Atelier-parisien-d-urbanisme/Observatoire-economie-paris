Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#3333cc']
});

Highcharts.chart('graphique', {
    chart: {
        type: 'spline',
        height:500
    },
    title: {
        text: null
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_1_Taux_chomage/taux_chomage.csv',
        enablePolling: true
    },
    credits: {
      enabled:false
    },
    yAxis: {
      gridLineColor: '#efefef',
      gridLineDashStyle: 'dash',
      labels: {
          format:'{value} ',
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
     },
    legend: {
     enabled: true
    },
    plotOptions: {
        series: {
          showInNavigator: true,
          lineWidth: 1,
          marker: {
            enabled: false,
          },
        }
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
