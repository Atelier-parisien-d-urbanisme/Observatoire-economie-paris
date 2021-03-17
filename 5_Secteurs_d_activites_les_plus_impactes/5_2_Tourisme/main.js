Highcharts.setOptions({
    colors: ['#38cae9', '#2A8BA0','#D3BD00','#D39500']
});

Highcharts.chart('graphique', {
  chart: {
    type:'line',
  },
    title: {
        text: 'Evolution du nombre d’ouvertures de procédures collectives à Paris 2019-2020'
    },
    caption: {
        text: 'Source : Greffe du tribunal de commerce'
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/4_Creations_et_defaillances_d_entreprises/4_3_Ouvertures_procedures_collectives/ouverture_procedures_collectives.csv',
        startColumn:0,
        endColumn:3,
    },

    yAxis: [{
     title: {
        text: '%'
    }
}]
,
series: [{
    type:'line',
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} €</b><br/>',
    valueDecimals: 2
   }
},{
  type:'column',
    yAxis: 0,
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} €</b><br/>',
    valueDecimals: 2
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
     },
     credits: {
       enabled:false
       },
});
