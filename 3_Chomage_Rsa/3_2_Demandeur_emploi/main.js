Highcharts.setOptions({
    colors: ['#38cae9','#3333cc']
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
        }
    },
    exporting: {
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
