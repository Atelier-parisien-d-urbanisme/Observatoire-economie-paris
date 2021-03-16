Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#D3BD00','#D39500']
});

Highcharts.stockChart('graphique', {
    chart: {
        type: 'spline',
         height: 600,
    },
    title: {
        text: 'Evolution du nombre de demandeurs d’emploi (catégorie A) à Paris par âge 2017 - 2020 (Indice base 100 : 1er trimestre 2017)	'
    },
    scrollbar: {
      enabled: false
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_3_Demandeur_emploi_age/demandeur_emploi_age.csv',
        enablePolling: true
    },
    caption: {
        text: 'Source : Pôle emploi-Dares, STMT ; données CVS-CJO'
    },
    navigator: {

      outlineWidth: 0,
      maskFill: 'rgba(0, 0, 0, 0.2)',
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
