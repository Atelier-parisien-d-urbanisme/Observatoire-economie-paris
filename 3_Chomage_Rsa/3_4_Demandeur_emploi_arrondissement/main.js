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


Highcharts.getJSON('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/3_Chomage_Rsa/3_4_Demandeur_emploi_arrondissement/1234_arr.geojson', function (geojson) {

    fetchMap1().then(map1Data => {
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
            tooltip: {
                shared: true,
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
                data: map1Data,
                keys: ['c_cainsee', 'value','className'],
                joinBy: 'c_cainsee',
                borderColor: 'white',
                borderWidth: 0.5,
                name: "Indice de chômage",
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
                    width: 50,
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
        }},
            exporting: {
            filename: 'Demandeur-d-emploi-par-arrondissement__Observatoire-economie-parisienne__Apur',
            chartOptions:{
                // add logo, titles, and sources updated in in the html page
                title: {
                text: "."
                },
                caption: {
                text: "Source : Recensement de la population (Insee) - 2017, Pôle Emploi. L’indice de chômage est le rapport entre le nombre de demandeurs d’emploi (catégorie A) inscrits à Pôle emploi et la population active âgée de 15 à 64 ans du recensement de la population. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
                },
                chart:{
                events:{
                    load:function(){
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
            },
            credits: {
            enabled:false
            },
        });

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
            minColor: '#EBC684',
            maxColor: '#3660C0',
           stops: [
            [0, '#CCA661'],
            [0.5, '#D3D3EA'],
            [0.95, '#3660C0']
        ]
        },
        series: [{
            data: map2_data,
            keys: ['c_cainsee', 'value','className'],
            joinBy: 'c_cainsee',
            borderColor: 'white',
            borderWidth: 0.5,
            name: "Évolution du nombre de demandeurs d'emploi de catégorie A",
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
                width: 50,
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
       }},
        exporting: {
          filename: 'Demandeur-d-emploi-par-arrondissement__Observatoire-economie-parisienne__Apur',
          chartOptions:{
            // add logo, titles, and sources updated in in the html page
            title: {
              text: "."
            },
            caption: {
              text: "Source : Pôle Emploi. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
            },
              chart:{
               events:{
                   load:function(){
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
        },
        credits: {
          enabled:false
          },
    });

});
