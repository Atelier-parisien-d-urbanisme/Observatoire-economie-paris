Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#3333cc']
});

Highcharts.chart('graphique', {
    chart: {
        type: 'spline',
        height:500,
        style: {
         fontFamily: 'Roboto'
       }
    },
    title: {
        text: null
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_1_Taux_chomage/taux_chomage.csv',
        enablePolling: true
    },
    credits: {
      enabled:false
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
       shared: true,
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
          format:'{value} %',
        // align: 'left',
        //       x: 0,
        //       y: -2,
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
          showInNavigator: true,
          lineWidth: 1,
          marker: {
            enabled: false,
            // symbol: 'circle',
            enabledThreshold: 2,
            radius: 3,
            fillColor: '#FFFFFF',
            lineWidth: 2,
            lineColor: null // inherit from series,
          },
        }
    },
    exporting: {
      chartOptions:{
        title: {
          text: "."
        },
        caption: {
          text: "Source : Insee, taux de chômage au sens du BIT et taux de chômage. Données trimestrielles CVS. Les données du dernier trimestre affiché sont provisoires. Un chômeur au sens du BIT est une personne âgée de 15 ans ou plus qui répond simultanément à trois conditions : être sans emploi durant une semaine donnée ; être disponible pour prendre un emploi dans les deux semaines ; avoir cherché activement un emploi au cours des quatre dernières semaines ou en avoir trouvé un qui commence dans moins de trois mois. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
