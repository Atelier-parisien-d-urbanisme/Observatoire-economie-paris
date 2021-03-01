Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#cb7f07','#fdd03b']
});

Highcharts.stockChart('graphique', {
    chart: {
        type: 'spline',
        marginBottom: 100,
    },
    title: {
        text: 'Evolution de l’emploi salarié à Paris 2011-2020'
    },
    scrollbar: {
      enabled: false
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/2_Evolution_de_l_emploi/2_3_Secteur_activite/secteur_activite.csv',
        enablePolling: true
    },
    caption: {
        text: 'Données CVS, en fin de trimestre, mises à jour le 11/02/2021. Les données du dernier trimestre affiché sont provisoires. Sources: Insee, estimations d’emploi ; estimations trimestrielles Acoss-Urssaf, Dares, Insee.'
    },
    navigator: {
      margin: 100,
      outlineWidth: 0,
      maskFill: 'rgba(0, 0, 0, 0.2)',
      handles: {
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
     title: {
        enabled: false,
      }
     },
     tooltip: {
         pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
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
