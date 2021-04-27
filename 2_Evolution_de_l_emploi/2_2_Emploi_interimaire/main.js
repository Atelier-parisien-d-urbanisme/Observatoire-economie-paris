Highcharts.setOptions({
    colors: ['#009A93']
});


Highcharts.chart('graphique', {
    chart: {
        type: 'spline'
    },
    title: {
        text: null
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/2_Evolution_de_l_emploi/2_2_Emploi_interimaire/emploi_interimaire.csv',
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
     enabled: false
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
