Highcharts.getJSON('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/3_Chomage_Rsa/3_4_Demandeur_emploi_arrondissement/1234_arr.geojson', function (geojson) {
    Highcharts.mapChart('map1', {
        chart: {
            map: geojson,
            height:300
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        title: {
              text: undefined
          },
        colorAxis: {
            tickPixelInterval: 80,
            reversed: false,
            minColor: '#D3D3EA',
           maxColor: '#3660C0',
        //    stops: [
        //     [0, '#3060cf'],
        //     [0.8, '#fffbbc'],
        //     [0.95, '#c4463a']
        // ]
        },
        series: [{
            data: map1_data,
            keys: ['c_cainsee', 'value','className'],
            joinBy: 'c_cainsee',
            borderColor: 'white',
            borderWidth: 0.5,
            name: "Evolution du chiffre d'affaires moyen par entreprise",
            tooltip: {pointFormat: '<span style="color:#38cae9">{point.properties.l_cab}</span>: <b>{point.value} %</b><br/>'
          },
            states: {
                hover: {
                    color: '#38cae9'
                }
            },

            dataLabels: {
                enabled: true,
                format: '{point.properties.l_cab}',
                style: {
                 // fontSize: '9px',
                 fontFamily: 'Roboto',
                 fontWeight: 'light',
                 color: 'white',
                 textOutline: 0
             }
            },
        }],
        legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        title: {
           text: '%',
           style: {
               fontStyle: 'italic'
           }
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
        },
        credits: {
          enabled:false
          },
    });

    Highcharts.mapChart('map2', {
        chart: {
            map: geojson,
            height:300
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        title: {
              text: undefined
          },
        colorAxis: {
            tickPixelInterval: 40,
            reversed: false,
            minColor: '#D3D3EA',
           maxColor: '#3660C0',
        //    stops: [
        //     [0, '#3060cf'],
        //     [0.8, '#fffbbc'],
        //     [0.95, '#c4463a']
        // ]
        },
        series: [{
            data: map2_data,
            keys: ['c_cainsee', 'value','className'],
            joinBy: 'c_cainsee',
            borderColor: 'white',
            borderWidth: 0.5,
            name: "Evolution du chiffre d'affaires moyen<br> par entreprise",
            tooltip: {pointFormat: '<span style="color:#38cae9">{point.properties.l_cab}</span>: <b>{point.value} %</b><br/>'
          },
            states: {
                hover: {
                    color: '#38cae9'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.properties.l_cab}',
                style: {
                 // fontSize: '9px',
                 fontFamily: 'Roboto',
                 fontWeight: 'light',
                 color: 'white',
                 textOutline: 0
             }
            },
        }],
        legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        title: {
           text: '%',
           style: {
               fontStyle: 'italic'
           }
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
        },
        credits: {
          enabled:false
          },
    });

});
