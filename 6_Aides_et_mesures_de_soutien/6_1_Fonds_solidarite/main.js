Highcharts.setOptions({
    colors: ['#b0a8d3'],
    style: {
     fontFamily: 'Roboto'
   },
   height:500
});

Highcharts.chart('graphique', {
    chart: {
      inverted: true
    },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/6_Aides_et_mesures_de_soutien/6_1_Fonds_solidarite/fonds_solidarite.csv',
        startColumn:0,
        endColumn:3,
    },
    legend: {
      enabled:false,
    },
    xAxis: {
      reversed: false,
      labels: {
      useHTML: true,
      allowOverlap: true,
      style: {
        wordBreak: 'break-all',
        textOverflow: 'allow'
      }
    }
    },
    yAxis: [{
      gridLineColor: '#efefef',
      gridLineDashStyle: 'dash',
      reversed: false,
      title: {
        enabled:false,
    },
    labels: {
    format: '{value}',
  }
}]
,
series: [{
    type:'column',
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} </b><br/>',
    valueDecimals: 0
  },
  dataLabels: {
               enabled: true,
               format: '{y}',
               style: {
                fontSize: '10px',
                fontFamily: 'Roboto',
                textOutline: 0,
                color:'#b0a8d3',
            }
           },
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
