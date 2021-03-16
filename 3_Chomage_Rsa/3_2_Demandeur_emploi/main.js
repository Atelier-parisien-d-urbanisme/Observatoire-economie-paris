Highcharts.setOptions({
    colors: ['#38cae9','#D3BD00']
});

Highcharts.chart('graphique', {
    chart: {
        type: 'spline',
        height:400
    },
    title: {
        text: 'Evolution du nombre de demandeurs d’emploi à Paris 2011-2020'
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_2_Demandeur_emploi/demandeur_emploi.csv',
        enablePolling: true
    },

    caption: {
        text: 'Source : Pôle emploi-Dares, STMT ; données CVS-CJO'
    },

    credits: {
      enabled:false
    },
    yAxis: {
     title: {
        enabled: false,
      }
     },
    legend: {
     enabled: true
    },
    plotOptions: {
        series: {
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
