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
        text: "Source :  Pôle emploi, Fichier des offres d'emploi, Données brutes"
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
