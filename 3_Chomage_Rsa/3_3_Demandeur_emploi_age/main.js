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
      ],
      thousandsSep:' ',
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
        parsed: function () {
          const rows = this.columns;
          
          const categories = rows[0].slice(1); // Sauter l'en-tête, garder les dates
          this.chart.xAxis[0].setCategories(categories);
        
          // Redéfinir les séries avec les bons x/y manuellement
          const series = [];
        
          for (let i = 1; i < rows.length; i++) {
            const name = rows[i][0]; // Nom de la série
            const data = [];
        
            for (let j = 1; j < rows[i].length; j++) {
              const value = parseFloat(rows[i][j]);
              data.push(isNaN(value) ? null : value);
            }
        
            series.push({ name, data });
          }
        
          // Met à jour les séries du graphique
          while (this.chart.series.length) {
            this.chart.series[0].remove(false);
          }
        
          series.forEach(serie => this.chart.addSeries(serie, false));
          this.chart.redraw();
      },



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
         pointFormat: `<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>`,
         valueDecimals: 0
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
