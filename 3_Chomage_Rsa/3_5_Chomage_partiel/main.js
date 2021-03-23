Highcharts.setOptions({
    colors: ['#38cae9']
});


Highcharts.chart('graphique', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Evolution du nombre de salariés indemnisés à Paris - mars-octobre 2020'
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_5_Chomage_partiel/chomage_partiel.csv',
        enablePolling: true
    },
    caption: {
        text: 'Source : ASP-DGEFP-Dares – Extraction du SI APART du 25 novembre 2020, s’arrêtant aux données du 24 novembre 2020.'
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
