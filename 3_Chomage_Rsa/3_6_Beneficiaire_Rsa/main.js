Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#3D71EA','#DAB464','#CA8F13', '#B36B6B'],
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

Highcharts.stockChart('graphique', {
    chart: {
        type: 'spline',
         height: 400,
    },
    title: {
        text: null
    },
    scrollbar: {
      enabled: false
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_6_Beneficiaire_Rsa/beneficiaire_rsa.csv',
        enablePolling: true,
        parsed: function() {
          const categories = this.columns[0]; 
          categories.shift(); 
          this.chart.xAxis[0].setCategories(categories);
        }
    },
    navigator: {
      enabled:false,
    },
    plotOptions: {
        series: {
          lineWidth: 1,
          
            marker: {
              enabled:true,
              enabledThreshold: 2,
              symbol:'circle',
              radius: 3,
              fillColor: '#FFFFFF',
              lineWidth: 2,
              lineColor: null // inherit from series,
            }
        }
    },
    rangeSelector:{
      enabled:false
    },
    credits: {
      enabled:false
    },
    xAxis: {
          gapGridLineWidth: 0
    },
    legend: {
      enabled:true
    },
    yAxis: {
      opposite:false,
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
     tooltip: {
        shared: true,
        formatter: function() {
           let tooltip = ``; // Affiche la catégorie ou la valeur de l'axe X
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
    
     exporting: {
       filename: 'Beneficiaires-RSA__Observatoire-economie-parisienne__Apur',
       chartOptions:{
         // add logo, titles, and sources updated in in the html page
         title: {
           text: "."
         },
         caption: {
           text: "Source : Caf de Paris – données mensuelles semi-définitives. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
});
