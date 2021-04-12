Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#D3BD00','#D39500']
});

Highcharts.chart('graphique', {
  chart: {
    type:'line',
  },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/1_Recul_de_l_activite/1_5_Auto_entrepreneurs/auto_entrepreneurs.csv',
        startColumn:0,
        endColumn:3,
    },

    yAxis: [{ //--- Primary yAxis
    className: 'highcharts-color-0',
     title: {
        text: 'M€'
    },
    labels: {
      // format: '{value} M€',
      align: 'left',
            x: 0,
            y: -2,
            style: {
                color: '#00c3ff'
            }
        },
}, { //--- Secondary yAxis
    className: 'highcharts-color-1',
    title: {
        text: null
    },
    labels: {
      format: '{value} %',
            style: {
                color: '#990041'
            }
        },
    opposite: true
}]
,
series: [{
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} €</b><br/>',
    valueDecimals: 2
   }
},{
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} €</b><br/>',
    valueDecimals: 2
   }
},{
    yAxis: 1,
    type: 'spline',
    dashStyle: 'Dot',
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
    valueDecimals: 2
  },
  color: '#990041',
  negativeColor: '#D5ADBE',
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
