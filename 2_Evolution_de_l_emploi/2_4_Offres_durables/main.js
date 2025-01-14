Highcharts.setOptions({
  colors: ['#009A93','#CA8F13',],
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

Highcharts.chart('graphique', {
    chart: {
        type: 'spline'
    },
    title: {
        text: null
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/2_Evolution_de_l_emploi/2_4_Offres_durables/offres_durables.csv',
        enablePolling: true
    },
    credits: {
      enabled:false
    },
    series : [
      {

      },
      {
        visible:false,
      }
    ],
    plotOptions: {
        series: {
          lineWidth: 1,
          marker: {
            symbol:'circle',
            enabledThreshold: 2,
            radius: 3,
            fillColor: '#FFFFFF',
            lineWidth: 2,
            lineColor: null // inherit from series,
          },
            dataLabels: {
               enabled: true,
               align: 'right',
               crop: false,
               useHTML: false,
               formatter: function() {
                   if (this.point.x == this.series.data.length - 1) {
                     return '<span style="color: '+ this.color + '">' + Highcharts.numberFormat(this.y,0,'.',' ') + '</span>';
                   } else {
                       return null;
                   }
               },
           }
        }
    },
    tooltip: {
      shared: true,
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
                        step: 2,
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
    exporting: {
        filename: 'Offres-durables__Observatoire-economie-parisienne__Apur',
      chartOptions:{
        title: {
          text: "."
        },
        caption: {
          text: "Source : Pôle emploi, Fichier des offres d'emploi, Données brutes. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
