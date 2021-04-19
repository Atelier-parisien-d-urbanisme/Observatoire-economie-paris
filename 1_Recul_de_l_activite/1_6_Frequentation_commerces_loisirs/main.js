Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#990041','#C29DAC'],
    lang: {
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

Highcharts.stockChart('graphique1', {
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
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/1_Recul_de_l_activite/1_6_Frequentation_commerces_loisirs/commerce_loisirs.csv',
        enablePolling: true
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
        gridLineWidth: 0,
        labels: {
          enabled: false
        }
      },
      series: {
        // type: 'areaspline',
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
    xAxis: {
      gapGridLineWidth: 0
    },
    legend: {
      enabled:true
    },
    yAxis: {
    // tickInterval: 25,
    // min: -100,
    opposite: false,
    gridLineColor: '#efefef',
    gridLineDashStyle: 'dash',
     title: {
        enabled: false,
      },
      labels: {
        style:{
          color: '#CFCFCF'
        }
      }
     },
     tooltip: {
         // pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
         valueDecimals: 2
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


Highcharts.stockChart('graphique2', {
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
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/1_Recul_de_l_activite/1_6_Frequentation_commerces_loisirs/transports_commun.csv',
        enablePolling: true
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
        gridLineWidth: 0,
        labels: {
          enabled: false
        }
      },
      series: {
        // type: 'areaspline',
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
    xAxis: {
          gapGridLineWidth: 0
    },
    legend: {
      enabled:true
    },
    yAxis: {
      gridLineColor: '#efefef',
      gridLineDashStyle: 'dash',
      opposite:false,
     title: {
        enabled: false,
      },
      labels: {
        style:{
          color: '#CFCFCF'
        }
      }
     },
     tooltip: {
         // pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
         valueDecimals: 2
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
