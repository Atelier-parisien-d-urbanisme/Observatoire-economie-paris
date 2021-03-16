Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#D3BD00','#D39500']
});

Highcharts.chart('graphique', {
    chart: {
        type: 'spline',
        height:500
    },
    title: {
        text: 'Evolution du taux de chômage (au sens du BIT) 2011-2020		'
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_1_Taux_chomage/taux_chomage.csv',
        enablePolling: true
    },

    caption: {
        text: 'Notes : données trimestrielles CVS. Les données du dernier trimestre affiché sont provisoires. Source : Insee, taux de chômage au sens du BIT et taux de chômage. '
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
          showInNavigator: true,
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
