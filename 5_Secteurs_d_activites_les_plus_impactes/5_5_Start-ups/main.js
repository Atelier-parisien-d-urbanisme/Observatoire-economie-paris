Highcharts.setOptions({
    colors: ['#FCECD2', '#CE8C34','#E69818']
});


Highcharts.chart('graphique', {
    chart: {
        type: 'pie',
        height: 250,
        style: {
         fontFamily: 'Roboto'
       }
    },
    title: {
        text: null
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
      valueDecimals: 0
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
