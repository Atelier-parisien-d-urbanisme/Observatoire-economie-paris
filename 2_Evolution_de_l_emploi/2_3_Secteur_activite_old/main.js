Highcharts.setOptions({
    colors: ['#38cae9', '#000DC9','#009A93','#CBD742'],
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


Highcharts.stockChart('graphique', {
    chart: {
        type: 'spline',
        height: 600,
        style: {
         fontFamily: 'Roboto'
       }
    },
    title: {
        text: null
    },
    scrollbar: {
      enabled: false
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/2_Evolution_de_l_emploi/2_3_Secteur_activite/secteur_activite.csv',
        enablePolling: true
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
    opposite:false,
    gridLineColor: '#efefef',
    gridLineDashStyle: 'dash',
     title: {
        enabled: false,
      },
      labels: {
        format: '{value}',
        // align: 'left',
        //       x: 0,
        //       y: -2,
              style: {
                  color: '#CFCFCF'
              }
          },
     },
    navigator: {
      enabled : false,
    },
    plotOptions: {
      series: {
        lineWidth: 1,
          showInNavigator: true,
          marker: {
            enabled: false,
          },
          dataLabels: {
             enabled: true,
             align: 'left',
             crop: false,
             useHTML: false,
             formatter: function() {
                 if (this.point.x == this.series.data.length - 1) {
                   return '<span style="color: '+ this.color + '">' + Highcharts.numberFormat(this.y,0) + '</span>';
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
    rangeSelector:{
      enabled:false
    },
    credits: {
      enabled:false
    },
    legend: {
      enabled:true
    },

     tooltip: {
         pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
         valueDecimals: 0
     },
     exporting: {
      filename: 'Secteur-d-activite__Observatoire-economie-parisienne__Apur',
       chartOptions:{
         title: {
           text: "."
         },
         caption: {
           text: "Sources: Insee, estimations d'emploi ; estimations trimestrielles Acoss-Urssaf, Dares.Données CVS, en fin de trimestre. Les données du dernier trimestre affiché sont provisoires.Indice base 100 : 1er trimestre 2011. Champ : emploi salarié total. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
     },
});
