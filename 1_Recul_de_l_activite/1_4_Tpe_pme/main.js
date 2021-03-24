Highcharts.getJSON('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/1_Recul_de_l_activite/1_4_Tpe_pme/dep_idf.geojson', function (geojson) {
    Highcharts.mapChart('graphique1', {
        chart: {
            map: geojson,
            height:600
        },
        title: {
            text: "Evolution du chiffre d'affaires des TPE/PME entre 2019 et 2020		"
        },
        caption: {
          text:"Source : Ordre des Experts-Comptables de Paris Ile-de-France, CROCIS"
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
            data: data_TPE,
            keys: ['C_DEP', 'value','className'],
            joinBy: 'C_DEP',
            name: "Evolution du chiffre d'affaires moyen<br> par entreprise (du 1er au 3e trimestre 2020 <br>par rapport à la meme période en 2019)	",
            tooltip: {pointFormat: '<span style="color:#38cae9">{point.properties.L_DEP}</span>: <b>{point.value} %</b><br/>'
          },
            states: {
                hover: {
                    color: '#38cae9'
                }
            },
            dataLabels: {
                enabled: true,
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
