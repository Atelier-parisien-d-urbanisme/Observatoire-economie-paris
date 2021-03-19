Highcharts.setOptions({
    colors: ['#38cae9', '#9BD6E3','#D3BD00','#D39500']
});

Highcharts.chart('graphique', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Nombre et part des locaux vacants à Paris '
    },
    caption: {
      text: "Source : Apur, BDCom. Note : Depuis 2014, l'enquête distingue les locaux strictement vacants des locaux en travaux."
    },
    credits: {
      enabled:false
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/5_Secteurs_d_activites_les_plus_impactes/5_4_Commerce/commerce.csv',
        enablePolling: true,
        endcolumn:2,
    },
    yAxis: [{
      //--- Primary yAxis
      className: 'highcharts-color-0',
        min: 0,
          title: {
           enabled: false,
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
            color: '#D3BD00'
          }
        },
        labels: {
        format: '{value}%'
      },
        opposite: true
      }],

    legend: {
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
        }
    },
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
        dashStyle: 'solide',
        color: '#D3BD00'
    },

  ],
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
