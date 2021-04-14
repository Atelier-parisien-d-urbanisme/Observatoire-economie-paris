Highcharts.setOptions({
    colors: ['#FCECD2', '#fcc365','#E69818']
});


Highcharts.chart('graphique', {
    chart: {
        type: 'pie'
    },
    title: {
        text: null
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_5_Start-ups/start-ups.csv',
        enablePolling: true
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
