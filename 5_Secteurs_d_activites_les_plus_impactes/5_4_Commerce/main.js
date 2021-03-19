Highcharts.setOptions({
    colors: ['#38cae9']
});


Highcharts.chart('graphique', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Evolution de l’emploi salarié à Paris 2011-2020'
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_4_Commerce/commerce.csv',
        enablePolling: true,
        endcolumn:2
    },

    caption: {
        text: 'Données CVS, en fin de trimestre, mises à jour le 11/02/2021. Sources: Insee, estimations d emploi d estimations trimestrielles Acoss-Urssaf, Dares, Insee.'
    },

    credits: {
      enabled:false
    },
    plotOptions: {
        series: {
            marker: {
                lineColor: '#00c3ff'
            }
        }
    },
    yAxis: {
     title: {
        enabled: false,
      }
     },
    legend: {
     enabled: false
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
