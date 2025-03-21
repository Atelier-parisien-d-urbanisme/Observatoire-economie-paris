Highcharts.setOptions({
  colors: ['#9494FA','#3333cc','#F1BB63','#CE8C34',],
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
        type: 'spline',
        height:400,
        style: {
         fontFamily: 'Roboto'
       }
    },
    title: {
        text: null
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_2_Demandeur_emploi/demandeur_emploi.csv',
        enablePolling: true
    },

    credits: {
      enabled:false
    },
    tooltip: {
       shared: true,
       formatter: function() {
          let tooltip = `<span style="font-size:10px;font-family: 'Roboto', sans-serif;">${this.name}</span><br/>`; // Affiche la catégorie ou la valeur de l'axe X
          let index = 0; // Compteur pour suivre la position des valeurs

          this.points.forEach(point => {
              let value = point.y;
              let formattedValue;

              // Vérifie si la valeur est un nombre
              if (typeof value === 'number') {
                  // Formate la valeur numérique et remplace le séparateur décimal
                  formattedValue = Highcharts.numberFormat(value, 0, '.', ' ').replace('.', ' ');
              } else {
                  // Si ce n'est pas un nombre, conserve la valeur brute
                  formattedValue = value;
              }
              // Ajoute le point au tooltip
              tooltip += `<span style="color:${point.color}">\u25CF</span> ${point.series.name}: <b>${formattedValue}</b><br/>`;

              index++; // Incrémente le compteur
          });

          return tooltip;
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
  series: [{
    },{dashStyle: 'dash',
  },{visible:false,
    },{dashStyle: 'dash',visible:false,
  }
    ],

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
     enabled: true
    },
    plotOptions: {
        series: {
          lineWidth: 1,
          marker: {
            enabled: false,
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
      filename: 'Demandeur-d-emploi__Observatoire-economie-parisienne__Apur',
      chartOptions:{
        title: {
          text: "."
        },
        caption: {
          text: "Source : Pôle emploi-Dares, STMT ; données CVS-CJO. Un demandeur d’emploi est une personne inscrite sur les listes de Pôle emploi. L’inscription sur les listes de Pôle emploi est soumise à certaines conditions, mais les demandeurs d’emploi peuvent être ou non indemnisés, certains peuvent occuper un emploi. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
