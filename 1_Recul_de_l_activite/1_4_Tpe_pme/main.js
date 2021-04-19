Highcharts.getJSON('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/1_Recul_de_l_activite/1_4_Tpe_pme/dep_idf.geojson', function (geojson) {
    Highcharts.mapChart('graphique1', {
        chart: {
            map: geojson,
            height:600
        },
        title: {
            text: null
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        colorAxis: {
            tickPixelInterval: 100,
            reversed: true,
            stops: [
              [0, '#990041'],
              [0.65, '#C75E8B'],
              [0.9, '#F1DCE2']
        ]
        },
        series: [{
            data: data_TPE,
            keys: ['C_DEP', 'value','className'],
            joinBy: 'C_DEP',
            name: "Evolution du chiffre d'affaires moyen par entreprise",
            borderColor: 'white',
            borderWidth: 0.5,
            tooltip: {pointFormat: '<span style="color:#38cae9">{point.properties.L_DEP}</span>: <b>{point.value} %</b><br/>'
          },
            states: {
                hover: {
                    color: '#38cae9'
                }
            },
            dataLabels: {
                enabled: true,
                allowOverlap: true,
                format: '{point.properties.L_DEP}',
                style: {
                 // fontSize: '9px',
                 fontFamily: 'Roboto',
                 fontWeight: 'light',
                 color: 'white',
                 textOutline: 0
             }
            },
        }],
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
        },
        credits: {
          enabled:false
          },
    });

});
