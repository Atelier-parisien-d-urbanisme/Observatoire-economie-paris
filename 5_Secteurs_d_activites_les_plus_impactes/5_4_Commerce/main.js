Highcharts.setOptions({
    colors: ['#38cae9']
});


Highcharts.chart('graphique', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Nombre et part des locaux vacants à Paris'
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/2_Evolution_de_l_emploi/2_1_Emploi_salarie/emploi_salarie.csv',
        enablePolling: true
    },

    caption: {
        text: "Source : Apur, BDCom. Note : Depuis 2014, l'enquête distingue les locaux strictement vacants des locaux en travaux."
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
