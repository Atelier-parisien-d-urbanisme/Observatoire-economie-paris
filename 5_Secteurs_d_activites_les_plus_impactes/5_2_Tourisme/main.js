Highcharts.setOptions({
    colors: ['#FCECD2','#E69818', '#5A3800','#3D71EA','#38cae9'],
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


let urlParis = 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_2_Tourisme/tourisme.csv'

let urlMGP ='https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_2_Tourisme/tourisme_MGP.csv'

let url = urlParis;




function getGraphique() {
  graphChart = new Highcharts.chart('graphique1', {
    chart: {
      type:"spline"
    },
      title: {
          text: null
      },
      data: {
          csvURL: url,
          startColumn:0,
          // endColumn:4,
      },
      plotOptions: {
          series: {
            lineWidth: 1,
              marker: {
                symbol: 'circle',
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
       title: {
          enabled:false,
      },
      labels: {
      format: '{value}%',
      // align: 'left',
      //       x: 0,
      //       y: -2,
            style: {
                color: '#CFCFCF'
            }
    }
  }]
  ,
  series: [{
      type:'column',
      yAxis: 0,
      data: {
      },
      tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
      valueDecimals: 0
    },
    dataLabels: {
                 enabled: true,
                 format: '{y}%',
                 style: {
                  fontSize: '10px',
                  fontFamily: 'Roboto',
                  // color:'#38cae9',
              }
             },
  },{
    type:'spline',
      yAxis: 0,
      data: {
      },
      tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
      valueDecimals: 0
     }
  }],
       exporting: {
         filename: 'Occupation-Hotel__Observatoire-economie-parisienne__Apur',
         chartOptions:{
           // add logo, titles, and sources updated in in the html page
           title: {
             text: "."
           },
           caption: {
             text: "Source : OTCP. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
  
}
getGraphique();

mgpBtn = document.getElementById('btn-mgp');

mgpBtn.addEventListener('click', function () {
  url = urlMGP;
  graphChart.destroy();
  getGraphique();
  this.classList.add('active');
  parisBtn.classList.remove('active');
});


parisBtn = document.getElementById('btn-paris');

parisBtn.addEventListener('click', function () {
  url = urlParis;
  graphChart.destroy();
  getGraphique();
  this.classList.add('active');
  mgpBtn.classList.remove('active');
});


Highcharts.chart('graphique2', {
    chart: {
        type: 'spline',
        style: {
         fontFamily: 'Roboto'
       }
    },
    title: {
        text: null
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_2_Tourisme/tourisme2.csv',
        enablePolling: true
    },

    credits: {
      enabled:false
    },
    plotOptions: {
        series: {
          lineWidth: 1,
            marker: {
              symlbol : 'circle',
              enabled:false,
              enabledThreshold: 2,
              radius: 3,
              fillColor: '#FFFFFF',
              lineWidth: 2,
              lineColor: null // inherit from series,
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
    series : [
      {
        color: '#E69818',
      },
      {
        color:'#7E1500',
        visible:false,
      }
    ],
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
      // min:100000,
      // max:180000,
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
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
        valueDecimals: 0,
        shared :true,
    },
    exporting: {
      filename: 'Hotel-emploi-salarie__Observatoire-economie-parisienne__Apur',
      chartOptions:{
        // add logo, titles, and sources updated in in the html page
        title: {
          text: "."
        },
        caption: {
          text: "Source : Urssaf – Données CVS. Champ : secteur privé, régime général, hors agriculture. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
        },
          chart:{
           events:{
               load:function(){
                   this.renderer.image('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/logo_apur.png', 0, 0, 50, 30).add();

                   title = document.getElementById('title2').innerHTML;
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
