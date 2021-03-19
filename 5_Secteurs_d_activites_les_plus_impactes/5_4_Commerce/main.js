Highcharts.setOptions({
    colors: ['#38cae9']
});


Highcharts.chart('graphique', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Evolution de l’emploi salarié à Paris 2011-2020'
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_4_Commerce/commerce.csv',
        enablePolling: true,
        endcolumn:2
    },

    caption: {
        text: 'Données CVS, en fin de trimestre, mises à jour le 11/02/2021. Sources: Insee, estimations d emploi d estimations trimestrielles Acoss-Urssaf, Dares, Insee.'
    },

    credits: {
      enabled:false
    },
    plotOptions: {
        series: {
            marker: {
                lineColor: '#00c3ff'
            }
        }
    },
    yAxis: {
     title: {
        enabled: false,
      }
     },
    legend: {
     enabled: false
    },
    exporting: {
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

Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Stacked column chart'
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_4_Commerce/commerce.csv',
        enablePolling: true,
        endcolumn:2,
    },
    yAxis: [{
      //--- Primary yAxis
        min: 0,
          title: {
           enabled: false,
          },
          stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: ( // theme
                      Highcharts.defaultOptions.title.style &&
                      Highcharts.defaultOptions.title.style.color
                  ) || 'gray'
              }
          }
      }, { //--- Secondary yAxis
          className: 'highcharts-color-1',
          title: {
            enabled: false,
              style: {
                  color: '#D3BD00'
              }
          },
          opposite: true
      }],

    legend: {
        align: 'right',
        x: -30,
        verticalAlign: 'top',
        y: 25,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 1,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        yAxis: 1,
        name: 'locaux vacants',
        data: [5, 3, 4, 7, 2]
    }, {
        yAxis: 1,
        name: 'locaux en travaux',
        data: [2, 2, 3, 2, 1]
    },
      {
        type:'spline',
        yAxis: 0,
        data: {
        },
        tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
        valueDecimals: 0
      },
        dashStyle: 'Dot',
        color: '#D3BD00'
    }


  ]
});
