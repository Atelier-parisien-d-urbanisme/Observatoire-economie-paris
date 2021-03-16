Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#D3BD00','#D39500']
});

Highcharts.chart('graphique', {
  chart: {
    type:'line',
  },
    title: {
        text: 'Evolution du chiffre d’affaires déclaré des auto-entrepreneurs en Ile-de-France 2019-2020 (données provisoires)'
    },
    caption: {
        text: 'Source : Urssaf, 2020'
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/1_Recul_de_l_activite/1_5_Auto_entrepreneurs/auto_entrepreneurs.csv',
        startColumn:0,
        endColumn:3,
    },

    yAxis: [{ //--- Primary yAxis
    className: 'highcharts-color-0',
     title: {
        text: '€'
    }
}, { //--- Secondary yAxis
    className: 'highcharts-color-1',
    title: {
        text: '%',
        style: {
            color: '#D3BD00'
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
    type: 'areaspline',
    dashStyle: 'Dot',
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
    valueDecimals: 2
  },
  color: '#D3BD00',
  negativeColor: '#C2B778',
  opacity: 0.3,
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
