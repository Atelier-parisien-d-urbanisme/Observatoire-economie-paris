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
    tooltip: {
       shared: true,
   },
    plotOptions: {
        series: {
          lineWidth: 1,
            marker: {
              symbol:'circle',
              enabledThreshold: 2,
              radius: 3,
              fillColor: '#FFFFFF',
              lineWidth: 2,
              lineColor: null // inherit from series,
            }
        }
    },

    yAxis: [{ //--- Primary yAxis
    className: 'highcharts-color-0',
     title: {
        text: null
    },
    gridLineColor: '#efefef',
    gridLineDashStyle: 'dash',
    labels: {
      formatter: function () {
            return Highcharts.numberFormat(this.value / 1000000, 0, '.', ' ') + ' M€';
        },
            style: {
                color: '#CFCFCF'
            }
        },
}, { //--- Secondary yAxis
    className: 'highcharts-color-1',
    gridLineColor: '#efefef',
    gridLineDashStyle: 'dash',
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
    valueDecimals: 0
   }
},{
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} €</b><br/>',
    valueDecimals: 0
   }
},{
    yAxis: 1,
    type: 'spline',
    dashStyle: 'Dot',
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
    valueDecimals: 1
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
         },
         chartOptions:{
           // add logo, titles, and sources updated in in the html page
           title: {
             text: "."
           },
           caption: {
             text: "Source : Ursaaf. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
        }


     },
     credits: {
       enabled:false
      },
});
