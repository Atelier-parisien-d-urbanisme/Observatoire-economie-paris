Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#9fce9c','#4D9F46']
});

Highcharts.stockChart('graphique', {
    chart: {
        type: 'spline',
        height: 600,
    },
    title: {
        text: null
    },
    scrollbar: {
      enabled: false
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/2_Evolution_de_l_emploi/2_3_Secteur_activite/secteur_activite.csv',
        enablePolling: true
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
    opposite:false,
    gridLineColor: '#efefef',
    gridLineDashStyle: 'dash',
     title: {
        enabled: false,
      },
      labels: {
        format: '{value} %',
        // align: 'left',
        //       x: 0,
        //       y: -2,
              style: {
                  color: '#CFCFCF'
              }
          },
     },
    navigator: {
      outlineWidth: 0,
      maskFill: 'rgba(0, 0, 0, 0.1)',
      handles: {
        symbols: ['o', 'o'],
        backgroundColor: 'grey',
        borderColor: 'grey',
      },
      xAxis: {
        labels: {
          enabled: false
        }
      },
      series: {
        color: '#bbb'
      }
    },
    plotOptions: {
      series: {
        lineWidth: 1,
          showInNavigator: true,
          marker: {
            enabled: false,
          },
        }
    },
    rangeSelector:{
      enabled:false
    },
    credits: {
      enabled:false
    },
    legend: {
      enabled:true
    },

     tooltip: {
         pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
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
     },
});
