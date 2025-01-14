Highcharts.setOptions({
    colors: ['#009FE3'],
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
     ],
     thousandsSep:' ',
 }
});

Highcharts.chart('graphique', {
    chart: {
      inverted: true,
      height:600
    },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/6_Aides_et_mesures_de_soutien/6_1_Fonds_solidarite/fonds_solidarite.csv',
        startColumn:0,
        endColumn:3,
    },
    // legend: {
    //   enabled:false,
    // },
    xAxis: {
      reversed: false,
      labels: {
      // useHTML: true,
      // allowOverlap: true,MGP
      style: {
        wordBreak: 'break-all',
        textOverflow: 'allow'
      }
    }
    },
    yAxis: [{
      gridLineColor: '#efefef',
      gridLineDashStyle: 'dash',
      reversed: false,
      title: {
        enabled:false,
    },
    labels: {
    format: '{value}',
  }
}]
,

tooltip: {
  shared:true,
  pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
    valueDecimals: 0
}
,
series: [{
    type:'column',
    yAxis: 0,
  dataLabels: {
               enabled: true,
               format: '{y}',
               style: {
                fontSize: '10px',
                fontFamily: 'Roboto',
                textOutline: 0,
                color:'#009FE3',
            }
           },
},
{
  type:'column',
  color:'#00587E',
  yAxis: 0,
dataLabels: {
             enabled: true,
             format: '{y}',
             style: {
              fontSize: '10px',
              fontFamily: 'Roboto',
              textOutline: 0,
              color:'#00587E',
          }
         },
}],
     exporting: {
       filename: 'Fonds-solidarite__Observatoire-economie-parisienne__Apur',
       chartOptions:{
         // add logo, titles, and sources updated in in the html page
         title: {
           text: "."
         },
         caption: {
           text: "Source : aides-entreprises.data.gouv.fr. Depuis le début de la crise sanitaire du Coronavirus COVID-19, l'État et les Régions ont mis en place un fonds de solidarité pour prévenir la cessation d’activité des petites entreprises, micro-entrepreneurs, indépendants et professions libérales, particulièrement touchés par les conséquences économiques du Covid-19. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
