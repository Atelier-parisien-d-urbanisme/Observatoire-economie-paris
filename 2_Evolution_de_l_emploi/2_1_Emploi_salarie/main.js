Highcharts.setOptions({
    colors: ['#009A93'],
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
      ],
      years: [
          '2020','2021'
      ]
  }
});

Highcharts.chart('graphique', {
    chart: {
        type: 'spline',
        style: {
         fontFamily: 'Roboto'
       },
    },
    title: {
        text: null
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/2_Evolution_de_l_emploi/2_1_Emploi_salarie/emploi_salarie.csv',
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
              lineColor: null, // inherit from series,
            },
            dataLabels: {
               enabled: true,
               align: 'left',
               crop: false,
               style : {
                 fontFamily: 'Roboto'
               },
               formatter: function() {
                   if (this.point.x == this.series.data.length - 1) {
                     return Highcharts.numberFormat(this.y,0);
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
              style: {
                  color: '#CFCFCF'
              },
              formatter: function() {
                  return Highcharts.numberFormat(this.value, 0, '.', ' ');
              }
          },
     title: {
        enabled: false,
      },
     },
    legend: {
     enabled: false
    },
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
        valueDecimals: 0
    },
    exporting: {
      chartOptions:{
        title: {
          text: "."
        },
        caption: {
          text: "Sources: Insee, estimations d emploi d estimations trimestrielles Acoss-Urssaf, Dares. Données CVS, en fin de trimestre. Champ : emploi salarié total. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
