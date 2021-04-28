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
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/6_Aides_et_mesures_de_soutien/6_2_Pret_garanti_Etat/pret_garanti_etat.csv',
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
           text: "Source : economie.gouv.fr. Le Prêt Garanti par l’État (PGE) est un prêt bancaire de trésorerie d’un an concernant les entreprises et les professionnels de toute taille, quelles que soient leurs formes juridiques et leurs activités. Le montant maximum cumulé d’emprunt pouvant bénéficier de cette garantie de l’État est de 25 % du chiffre d’affaires annuel. Pour les créateurs d’entreprise, les start-up et entreprises innovantes, avec souvent peu de chiffre d’affaires, ce montant peut cependant être porté à deux ans de masse salariale. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
