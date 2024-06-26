Highcharts.setOptions({
    style: {
     fontFamily: 'Roboto'
   },
    lang: {
      downloadPNG: "Télécharger  en image PNG",
      downloadJPEG: "Télécharger en image JPEG",
      downloadPDF: "Télécharger  en document PDF",
      downloadSVG: "Télécharger  en document Vectoriel SVG",
      printChart: "Imprimer le graphique",
      months: [
          'Janvier', 'Février', 'Mars', 'Avril',
          'Mai', 'Juin', 'Juillet', 'Août',
          'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ],
      shortMonths:['Janvier', 'Février', 'Mars', 'Avril',
      'Mai', 'Juin', 'Juillet', 'Août',
      'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      weekdays: [
          'Dimanche', 'Lundi', 'Mardi', 'Mercredi',
          'Jeudi', 'Vendredi', 'Samedi'
      ]
  }
});


Highcharts.getJSON('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/1_Recul_de_l_activite/1_1_Perte_activite/mgp.geojson', function (geojson) {
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
            tickPixelInterval: 50,
            // reversed: true,
           //  minColor: '#990041',
           // maxColor: '#E7C7D4',
           stops: [
            [0, '#B7CFF5'],
           [0.4, '#E7C7D4'],
            [0.99, '#990041']
        ]
        },
        plotOptions: {
           series: {
             dataLabels: {
               allowOverlap: true,
               useHTML: true,
               style: {
                 width: 70,
                 fontSize:'12px',
                 textAlign: 'center',
                  color:'white'
               }
             }
           }
         },

        series: [{
            data: data_map1,
            keys: ['EPT_NUM', 'value','className'],
            joinBy: 'EPT_NUM',
            name: "Perte d'activité",
            borderColor: 'white',
            borderWidth: 0.5,
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
            filename: 'perte-activite-carte1__Observatoire-economie-parisienne__Apur',
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
                text: "Source : Insee, recensement 2017, traitements Apur. Prévision de la perte d'activité en écart au niveau d'avant crise (quatrième trimeste 2019). https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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

    Highcharts.mapChart('graphique2', {
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
            tickPixelInterval: 60,
            // reversed: true,
           //  minColor: '#990041',
           // maxColor: '#E7C7D4',
           stops: [
            [0, '#81ABEC'],
           [0.4, '#E7C7D4'],
            [0.99, '#990041']
        ]
        },
        plotOptions: {
           series: {
             dataLabels: {
               allowOverlap: true,
               useHTML: true,
               style: {
                 width: 70,
                 fontSize:'12px',
                 textAlign: 'center',

               }
             }
           }
         },
        series: [{
            data: data_map2,
            keys: ['EPT_NUM', 'value','className'],
            joinBy: 'EPT_NUM',
            name: "Perte d'activité",
            borderColor: 'white',
            borderWidth: 0.5,
            tooltip: {pointFormat: '<span style="color:#38cae9">{point.properties.L_EPT}</span>: <b>{point.value} %</b><br/>'
          },
            states: {
                hover: {
                    color: '#38cae9'
                }
            },
            dataLabels: {
              overflowValue: "justify",
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
          filename: 'perte-activite-carte2__Observatoire-economie-parisienne__Apur',
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
                text: "Source : Insee, recensement 2017, traitements Apur. Prévision de la perte d'activité en écart au niveau d'avant crise (quatrième trimeste 2019).https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
              },
                chart:{
                 events:{
                     load:function(){
                        // add logo, titles, and sources update in in the html page
                         this.renderer.image('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/logo_apur.png', 0, 0, 50, 30).add();

                         title = document.getElementById('title2').innerHTML;
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
