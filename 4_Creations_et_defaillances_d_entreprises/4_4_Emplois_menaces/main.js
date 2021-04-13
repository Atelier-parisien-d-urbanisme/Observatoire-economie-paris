Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#D3BD00','#D39500']
});

Highcharts.chart('graphique1', {
    chart: {
    },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/4_Creations_et_defaillances_d_entreprises/4_4_Emplois_menaces/liquidations_judiciaires.csv',
        enablePolling: true
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
    series: [{
        type:'column',
        name: '2019',
        data: {
        },
        tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
        valueDecimals: 0
       }
    },{
        type:'column',
        name: '2020',
        data: {
        },
        tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
        valueDecimals: 0
       }
    }],
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


Highcharts.chart('graphique2', {
  chart: {
  },
    title: {
        text: 'Procédures d’observation et de traitement des difficultés'
    },
    caption: {
        text: 'Source : Greffe du tribunal de commerce'
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/4_Creations_et_defaillances_d_entreprises/4_4_Emplois_menaces/procedures_observations.csv',
        startColumn:0,
        endColumn:3,
    },

    yAxis: [{ //--- Primary yAxis
    className: 'highcharts-color-0',
    title: {
       enabled: false,
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
}]
,
series: [{
    type:'column',
    yAxis: 1,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
    valueDecimals: 0
  },
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
}],
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
     },
     credits: {
       enabled:false
       },
});
