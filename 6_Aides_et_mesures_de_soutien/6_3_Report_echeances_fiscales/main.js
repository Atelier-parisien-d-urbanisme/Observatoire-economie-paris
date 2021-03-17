Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#D3BD00','#D39500']
});

Highcharts.chart('graphique', {
    chart: {
      inverted: true
    },
    title: {
        text: "Répartition du montant total des reports d'échéances fiscales accordés par secteur d’activité (en M€) à Paris"
    },
    caption: {
        text: 'Source : https://www.economie.gouv.fr/ au 21 janvier 2021'
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/6_Aides_et_mesures_de_soutien/6_3_Report_echeances_fiscales/report_echeances_fiscales.csv',
        startColumn:0,
        endColumn:3,
    },
  xAxis: {
    reversed: false,

  },
    yAxis: [{
      reversed: false,
     title: {
        enabled:false,
    },
    labels: {
    format: '{value}M€',
  },
}]
,
series: [{
    type:'column',
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} M€</b><br/>',
    valueDecimals: 0
  },
  dataLabels: {
               enabled: true,
               format: '{y}M€',
               style: {
                fontSize: '10px',
                fontFamily: 'Roboto',
                color:'#38cae9',
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
