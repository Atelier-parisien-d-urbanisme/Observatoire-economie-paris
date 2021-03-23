var data = [
    ['T1', -10],
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

Highcharts.getJSON('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/1_Recul_de_l_activite/1_2_Perte_activite/Territoires_MGP.json', function (geojson) {

    // Initiate the chart
    Highcharts.mapChart('container', {
        chart: {
            map: geojson
        },
        // data: {
        //     csvURL: 'https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/1_Recul_de_l_activite/1_2_Perte_activite/perte_activite_map.csv',
        //     enablePolling: true
        // },

        title: {
            text: 'GeoJSON in Highmaps'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            tickPixelInterval: 50
        },

        series: [{
            data: data,
            keys: ['EPT_NUM', 'value','className'],
            joinBy: 'EPT_NUM',
            name: 'Random data',
            states: {
                hover: {
                    color: 'black'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.properties.L_EPT}'
            }
        }]
    });
});
