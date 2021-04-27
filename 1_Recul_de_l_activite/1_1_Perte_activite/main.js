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
            reversed: true,
            minColor: '#990041',
           maxColor: '#E7C7D4',
        //    stops: [
        //     [0, '#3060cf'],
        //     [0.8, '#fffbbc'],
        //     [0.95, '#c4463a']
        // ]
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
            data: data_T4_2020,
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
                text: "Source : Insee, recensement 2017, traitements Apur. Prévision de la perte d'activité en écart au niveau d'avant crise (quatrième trimeste 2019)"
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
            tickPixelInterval: 50,
            reversed: true,
            minColor: '#990041',
           maxColor: '#E7C7D4',
        //    stops: [
        //     [0, '#3060cf'],
        //     [0.8, '#fffbbc'],
        //     [0.95, '#c4463a']
        // ]
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
            data: data_T1_2021,
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
                text: "Source : Insee, recensement 2017, traitements Apur. Prévision de la perte d'activité en écart au niveau d'avant crise (quatrième trimeste 2019)"
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
