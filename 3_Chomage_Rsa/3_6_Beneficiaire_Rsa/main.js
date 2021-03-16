Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#D3BD00','#D39500']
});

Highcharts.chart('graphique', {
    chart: {
        type: 'spline',
        height:400
    },
    title: {
        text: 'Evolution du nombre de bénéficiaires du RSA à Paris 2017-2020'
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_6_Beneficiaire_Rsa/beneficiare_rsa.csv',
        enablePolling: true
    },
    caption: {
        text: 'Source : Caf de Paris – données mensuelles semi-définitives'
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
