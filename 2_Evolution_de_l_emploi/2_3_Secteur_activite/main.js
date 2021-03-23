Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#D3BD00','#D39500']
});

Highcharts.stockChart('graphique', {
    chart: {
        type: 'spline',
         height: 600,
    },
    title: {
        text: 'Evolution de l’emploi salarié par secteur d’activité à Paris 2011-2020 (Indice base 100 : 1er trimestre 2011)'
    },
    scrollbar: {
      enabled: false
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/2_Evolution_de_l_emploi/2_3_Secteur_activite/secteur_activite.csv',
        enablePolling: true
    },
    caption: {
        text: 'Données CVS, en fin de trimestre. Les données du dernier trimestre affiché sont provisoires.Champ : emploi salarié total. Sources : Insee, estimations d’emploi ; estimations trimestrielles Acoss-Urssaf, Dares, Insee.					'
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
