Highcharts.setOptions({
      colors: ['#38cae9', '#3D71EA','#DAB464','#CA8F13'],
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

Highcharts.getJSON('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/3_Chomage_Rsa/3_1_Taux_chomage_MGP/dep_idf.geojson', function (geojson) {
    Highcharts.mapChart('carte', {
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
            // reversed: true,
            // Manually change colored steps of the map
        //     stops: [
        //      [0,'#81ABEC' ],
        //     [0.5, '#E7C7D4'],
        //      [0.95, '#990041'],
        //  ],
        //  minColor: '#D3D3EA',
        //  maxColor: '#3660C0',

         stops: [
          [0, '#CCA661'],
          [0.4, '#D3D3EA'],
          [0.95, '#3660C0']
      ]

            // stops: [
            //   [0, '#990041'],
            //   [0.65, '#C75E8B'],
            //   [0.9,  '#F1DCE2' ]
            // ]
        },
        series: [{
            data: data_chomage,
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
          filename: 'taux_chomage_IdF__Observatoire-economie-parisienne__Apur',
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
                text: "Source : Insee, taux de chômage au sens du BIT et taux de chômage. Données trimestrielles CVS. Les données du dernier trimestre affiché sont provisoires. Un chômeur au sens du BIT est une personne âgée de 15 ans ou plus qui répond simultanément à trois conditions : être sans emploi durant une semaine donnée ; être disponible pour prendre un emploi dans les deux semaines ; avoir cherché activement un emploi au cours des quatre dernières semaines ou en avoir trouvé un qui commence dans moins de trois mois. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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


Highcharts.chart('graphique', {
    chart: {
        type: 'spline',
        height:500,
        style: {
         fontFamily: 'Roboto'
       }
    },
    title: {
        text: null
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_1_Taux_chomage/taux_chomage.csv',
        enablePolling: true
    },
    credits: {
      enabled:false
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
       shared: true,
   },
    xAxis: {
    labels: {
    step: 1,
    rotation: -45,
    style: {
      fontSize: '8px',
      }
    }
  },
    yAxis: {
      gridLineColor: '#efefef',
      gridLineDashStyle: 'dash',
      labels: {
          format:'{value} %',
        // align: 'left',
        //       x: 0,
        //       y: -2,
              style: {
                  color: '#CFCFCF'
              }
          },
     title: {
        enabled: false,
      }
     },
    legend: {
     enabled: true
    },
    plotOptions: {
        series: {
          showInNavigator: true,
          lineWidth: 1,
          marker: {
            enabled: false,
            // symbol: 'circle',
            enabledThreshold: 2,
            radius: 3,
            fillColor: '#FFFFFF',
            lineWidth: 2,
            lineColor: null // inherit from series,
          },
          dataLabels: {
             enabled: true,
             align: 'left',
             crop: false,
             useHTML: false,
             formatter: function() {
                 if (this.point.x == this.series.data.length - 1) {
                   return '<span style="color: '+ this.color + '">' + Highcharts.numberFormat(this.y,1) + '% </span>';
                 } else {
                     return null;
                 }
             },
         }
        }
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 560
            },
            // Labels space on mobile
            chartOptions: {
                xAxis: {
                    labels: {
                        step: 4,
                    }
                },
            }
        }]
    },

    exporting: {
      filename: 'Taux-chomage__Observatoire-economie-parisienne__Apur',
      chartOptions:{
        title: {
          text: "."
        },
        caption: {
          text: "Source : Insee, taux de chômage au sens du BIT et taux de chômage. Données trimestrielles CVS. Les données du dernier trimestre affiché sont provisoires. Un chômeur au sens du BIT est une personne âgée de 15 ans ou plus qui répond simultanément à trois conditions : être sans emploi durant une semaine donnée ; être disponible pour prendre un emploi dans les deux semaines ; avoir cherché activement un emploi au cours des quatre dernières semaines ou en avoir trouvé un qui commence dans moins de trois mois. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
               }
           }
       }
     },
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
