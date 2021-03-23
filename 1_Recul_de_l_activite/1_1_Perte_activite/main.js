var data = [
    ['T1', -10,],
    ['T2', -8],
    ['T3', -8],
    ['T4', -8],
    ['T5', -9],
    ['T6', -9],
    ['T7', -10],
    ['T8', -10],
    ['T9', -8],
    ['T10', -8],
    ['T11', -8],
    ['T12', -9,'myCustomClassName']
];


Highcharts.getJSON('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/1_Recul_de_l_activite/1_1_Perte_activite/mgp.geojson', function (geojson) {

    // Initiate the chart
    Highcharts.mapChart('container', {
        chart: {
            map: geojson,
            height:600
        },

        title: {
            text: "Perte d'activité au quatrième trimestre 2020 (en %)"
        },
        caption: {
          text:"Source : Insee - Point de conjoncture 15/12/2020,  recensement 2017, traitements Apur"
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            tickPixelInterval: 40,
            reversed: true,
            minColor: '#990041',
           maxColor: '#DBB3BA',
        },

        series: [{
            data: data,
            keys: ['EPT_NUM', 'value','className'],
            joinBy: 'EPT_NUM',
            name: "Perte d'activité au quatrième trimestre 2020",
            tooltip: {pointFormat: '<span style="color:#38cae9">{point.properties.L_EPT}</span>: <b>{point.value} %</b><br/>'
          },
            states: {
                hover: {
                    color: '#38cae9'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.properties.L_EPT}',
                style: {
                 fontSize: '9px',
                 fontFamily: 'Roboto'
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
