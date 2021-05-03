Highcharts.setOptions({
  colors: ['#FCECD2', '#CE8C34','#E69818'],
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

Highcharts.chart('graphique1', {
  chart: {
    type:'line',
  },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_3_Culture/culture.csv',
        startColumn:0,
        endColumn:3,
    },
    tooltip: {
       shared: true,
   },
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
            }
        }
    },

    yAxis: [{
      gridLineColor: '#efefef',
      gridLineDashStyle: 'dash',

      labels: {
        formatter: function () {
              return Highcharts.numberFormat(this.value / 1000000, 0, '.', ' ') + ' M€';
          },
              style: {
                  color: '#CFCFCF'
              }
          },
     title: {
        enabled: false,
      }
      }]
,
series: [{
    type:'column',
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} €</b><br/>',
    valueDecimals: 0
   }
},{
  type:'spline',
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} €</b><br/>',
    valueDecimals: 0
   }
},
{
  type:'spline',
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} €</b><br/>',
    valueDecimals: 0
   }
},
],
     exporting: {
       chartOptions:{
         // add logo, titles, and sources updated in in the html page
         title: {
           text: "."
         },
         caption: {
           text: "Source : DRFIP, Données des déclarations mensuelles et trimestrielles de TVA (régime réel normal) des sociétés dont le siège social est situé à Paris. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
