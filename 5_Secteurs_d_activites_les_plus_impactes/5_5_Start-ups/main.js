Highcharts.setOptions({
    colors: ['#9CE1F0','#38cae9','#128EA8']
});


Highcharts.chart('graphique', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Répartition des startups accompagnées par Paris&Co selon le risque encouru (octobre 2020)'
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_5_Les_start-ups/start-ups.csv',
        enablePolling: true
    },

    caption: {
        text: 'Source: Paris&Co'
    },

    credits: {
      enabled:false
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
