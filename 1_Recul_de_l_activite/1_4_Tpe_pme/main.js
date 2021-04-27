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
            },
            chartOptions:{
              title: {
                text: "."
              },
              caption: {
                text: "Source : Ordre des Experts-Comptables de Paris Ile-de-France, CROCIS. Evolution du chiffre d'affaires moyen par entreprise (par rapport à la meme période en 2019). https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
              },
                chart:{
                 events:{
                     load:function(){
                        // add logo, titles, and sources update in in the html page
                         this.renderer.image('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/logo_apur.png', 0, 0, 50, 30).add();

                         title = document.getElementById('title1').innerHTML;
                         this.renderer.text(title, 70, 20)
                          .css({
                            color: 'black',
                            fontFamily: 'Roboto',
                            fontSize: 14,
                            fontWeight: 'bold',
                            width: 400
                          }).add().toFront();

                          // ref = document.getElementById('ref1').innerHTML;
                          // this.renderer.text(ref, 10, 600)
                          //  .css({
                          //    color: 'black',
                          //    fontFamily: 'Roboto',
                          //    fontSize: 14,
                          //    fontWeight: 'light',
                          //    width: 400
                          //  }).add().toFront();
                     }
                 }
             }
         }

        },
        credits: {
          enabled:false
          },
    });

});
