Highcharts.setOptions({
    colors: ['#38cae9']
});


Highcharts.chart('graphique', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Evolution du nombre d’offres durables d’emploi à Paris 2015-2020 (offres diffusées par Pôle emploi)'
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/2_Evolution_de_l_emploi/2_4_Offres_durables/offres_durables.csv',
        enablePolling: true
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
