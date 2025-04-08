Highcharts.setOptions({
  colors: ['#3D71EA','#38cae9','#DAB464','#CA8F13'],
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
      csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_3_Demandeur_emploi_age/demandeur_emploi_age.csv',
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

  
        
  xAxis: {
  labels: {
  step: 1,
  rotation: -45,
  style: {
    fontSize: '8px',
    }
  }
},
series: [
  {},
  {visible: false},
  {visible: false},
],

  yAxis: {
  opposite:false,
  gridLineColor: '#efefef',
  gridLineDashStyle: 'dash',
   title: {
      enabled: false,
    },
    labels: {
      format: '{value}',
      formatter: function() {
        return Highcharts.numberFormat(this.value, 0, '.', ' ');
      },
            style: {
                color: '#CFCFCF'
            }
        },
   },
  navigator: {
    enabled:false
  },
  plotOptions: {
      series: {
        lineWidth: 1,
        showInNavigator: true,
        marker: {
          symbol:'circle',
          enabled: true,   //only enabled when there are a single spline. Here, only one is pre-selected so it is set to "true"
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
                 return '<span style="color: '+ this.color + '">' + Highcharts.numberFormat(this.y,0,'.',' ')  + '</span>';
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
    valueDecimals: 0,
    pointFormatter: function () {
      const value = Highcharts.numberFormat(this.y, 0, ',', ' ');
      return `<span style="color:${this.color}">\u25CF</span> ${this.series.name}: <b>${value}</b><br/>`;
    },
     shared: true,
 },
 
  exporting: {
    filename: 'Demandeur-d-emploi-par-age__Observatoire-economie-parisienne__Apur',
    chartOptions:{
      // add logo, titles, and sources updated in in the html page
      title: {
        text: "."
      },
      caption: {
        text: "Source : Pôle emploi-Dares, STMT ; données CVS-CJO : Ursaaf. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
