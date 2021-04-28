Highcharts.setOptions({
    colors: ['#009FE3']
});

Highcharts.chart('graphique', {
    chart: {
      inverted: true,
      height:600
    },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/6_Aides_et_mesures_de_soutien/6_3_Report_echeances_fiscales/report_echeances_fiscales.csv',
        startColumn:0,
        endColumn:3,
    },
  xAxis: {
    reversed: false,
    labels: {
    // useHTML: true,
    // allowOverlap: true,
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
  },
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
       chartOptions:{
         // add logo, titles, and sources updated in in the html page
         title: {
           text: "."
         },
         caption: {
           text: "Source : economie.gouv.fr. Le report d’échéances fiscales auprès services des impôts des entreprises s’adresse aux entreprises concernées par une interruption ou une restriction de leur activité liée à une mesure de fermeture ou lorsque leur situation financière le justifie. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
     },
     credits: {
       enabled:false
       },
       legend: {
         enabled:false,
       },
});
