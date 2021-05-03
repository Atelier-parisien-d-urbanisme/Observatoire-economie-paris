Highcharts.setOptions({
    colors: ['#3D71EA'],
    lang: {
      downloadPNG: "Télécharger  en image PNG",
      downloadJPEG: "Télécharger en image JPEG",
      downloadPDF: "Télécharger  en document PDF",
      downloadSVG: "Télécharger  en document Vectoriel SVG",
      printChart: "Imprimer le graphique",
		months: ['Janvier', 'F├®vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao├╗t', 'Septembre', 'Octobre', 'Novembre', 'D├®cembre'],
		weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    shortMonths: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
	}
});

Highcharts.chart('graphique', {
    chart: {
        type: 'spline'
    },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_5_Chomage_partiel/chomage_partiel.csv',
        enablePolling: true
    },
    credits: {
      enabled:false
    },
    plotOptions: {
        series: {
          lineWidth: 1,
            marker: {
              enabledThreshold: 2,
              radius: 3,
              fillColor: '#FFFFFF',
              lineWidth: 2,
              lineColor: null // inherit from series,
            }
        }
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
        format: '{value}',
        formatter: function() {
          return Highcharts.numberFormat(this.value, 0, '.', ' ');
        },
              style: {
                  color: '#CFCFCF'
              }
          },
     title: {
        enabled: false,
      }
     },
    legend: {
     enabled: false,
    },
    exporting: {
      chartOptions:{
        // add logo, titles, and sources updated in in the html page
        title: {
          text: "."
        },
        caption: {
          text: "Source : ASP-DGEFP-Dares – Extraction du SI APART. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
        }
});

Highcharts.getJSON('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/3_Chomage_Rsa/3_5_Chomage_partiel/20_arr.geojson', function (geojson) {
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
            name: "Salariés concernés par une demande d'indemnisation",
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
                allowOverlap: true,
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
    },
        exporting: {
          chartOptions:{
            // add logo, titles, and sources updated in in the html page
            title: {
              text: "."
            },
            caption: {
              text: "Salariés concernés par une demande d'indemnisation (part dans le total des salariés). Sources: ASP-DGEFP-DARES - extraction du SI APAR, URSAFF - 4ème trimestre 2019. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
            tickPixelInterval: 60,
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
            name: "Salariés concernés par une demande d'indemnisation",
            tooltip: {pointFormat: '<span style="color:#38cae9">{point.properties.l_cab}</span>: <b>{point.value} %</b><br/>'
          },
            states: {
                hover: {
                    color: '#38cae9'
                }
            },
            dataLabels: {
                enabled: true,
                allowOverlap: true,
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
       }},
        exporting: {
          chartOptions:{
            // add logo, titles, and sources updated in in the html page
            title: {
              text: "."
            },
            caption: {
              text: "Salariés concernés par une demande d'indemnisation (part dans le total des salariés). Sources: ASP-DGEFP-DARES - extraction du SI APAR, URSAFF - 4ème trimestre 2019. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
            },
              chart:{
               events:{
                   load:function(){
                       this.renderer.image('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/logo_apur.png', 0, 0, 50, 30).add();

                       title = document.getElementById('title3').innerHTML;
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
