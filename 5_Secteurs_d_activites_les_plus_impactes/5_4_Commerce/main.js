Highcharts.setOptions({
    colors: ['#CE8C34','#F1BB63'],
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
        type: 'column'
    },
    title: {
        text: null
    },
    credits: {
      enabled:false
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_4_Commerce/commerce.csv',
        enablePolling: true,
        endcolumn:2,
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        minPointLength: 3,
        dataLabels: {
          enabled: true,
            style: {
            textOutline: 0,
            fontWeight: 'light',
            color: 'black',
           }
        }
      },

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
        formatter: function() {
            return this.value.replace("a", "")
        },
      },
    },

    yAxis: [{
      //--- Primary yAxis
      // className: 'highcharts-color-0',
      gridLineColor: '#efefef',
      gridLineDashStyle: 'dash',
        min: 0,
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
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'light',
                  color: '#C8C8C8',
                  textOutline: 0
              }
          },

      }, { //--- Secondary yAxis
        className: 'highcharts-color-1',
        min: 0,
        title: {
        enabled: false,
        style: {
            color: '#38cae9'
          }
        },
        labels: {
          format: '{value} %',
                style: {
                    color: 'black'
                }
            },
        opposite: true
      }],


    series: [
      {
         yAxis: 0,
         name: 'locaux en travaux',
         tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>Total: {point.stackTotal}'
       },
     },{
        yAxis: 0,
        name: 'locaux vacants',
        tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>Total: {point.stackTotal}'
      },
    },
      {
        type:'spline',
        yAxis: 1,
        data: {
        },
        tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>'
      },
        dashStyle: 'dot',
        color: 'black'
    },

  ],
  exporting: {
    filename: 'Commerces-locaux-vacants__Observatoire-economie-parisienne__Apur',
    chartOptions:{
      // add logo, titles, and sources updated in in the html page
      title: {
        text: "."
      },
      caption: {
        text: "Source : Apur, BDCom. Depuis 2014, l'enquête distingue les locaux strictement vacants des locaux en travaux. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
      }
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
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_4_Commerce/commerce2.csv',
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
      // min:150000,
      // max:185000,
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
    // legend: {
    //  enabled: false
    // },
    series : [
      {
        color: '#E69818',
      },
      {
        color:'#7E1500',
        visible : false,
      }
    ],
    tooltip: {
        pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
        valueDecimals: 0,
        shared : true,
    },
    exporting: {
      filename: 'Commerce-emploi_salarie__Observatoire-economie-parisienne__Apur',
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
