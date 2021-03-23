Highcharts.getJSON('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/1_Recul_de_l_activite/1_1_Perte_activite/mgp.geojson', function (geojson) {
    Highcharts.mapChart('graphique1', {
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
        //    stops: [
        //     [0, '#3060cf'],
        //     [0.8, '#fffbbc'],
        //     [0.95, '#c4463a']
        // ]
        },
        series: [{
            data: data_T4_2020,
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
                 // fontSize: '9px',
                 fontFamily: 'Roboto',
                 fontWeight: 'light',
                 color: 'black',
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

    Highcharts.mapChart('graphique2', {
        chart: {
            map: geojson,
            height:600
        },
        title: {
            text: "Perte d'activité au premier trimestre 2021 (en %)"
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
        //    stops: [
        //     [0, '#3060cf'],
        //     [0.8, '#fffbbc'],
        //     [0.95, '#c4463a']
        // ]
        },
        series: [{
            data: data_T1_2021,
            keys: ['EPT_NUM', 'value','className'],
            joinBy: 'EPT_NUM',
            name: "Perte d'activité au premier trimestre 2021",
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
                 // fontSize: '9px',
                 fontFamily: 'Roboto',
                 fontWeight: 'light',
                 color: 'black',
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
