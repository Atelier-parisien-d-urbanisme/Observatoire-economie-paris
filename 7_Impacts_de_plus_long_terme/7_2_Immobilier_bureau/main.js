Highcharts.setOptions({
    colors: ['#38cae9', '#9BD6E3','#D3BD00','#D39500','#f4a261','#e76f51']
});

Highcharts.chart('graphique', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Evolution de la demande placée en Île-de-France'
    },
    caption: {
      text: "Source : Immostat"
    },
    credits: {
      enabled:false
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/7_Impacts_de_plus_long_terme/7_2_Immobilier_bureau/immobilier_bureau.csv',
        enablePolling: true,
        endcolumn:2,
    },
    yAxis: {
        min: 0,
          title: {
           enabled: false,
          },
          labels: {
          format: '{value} m²'
        },
      },

    legend: {
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y} m²<br/>Île-de-France: {point.stackTotal} m²'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            minPointLength: 3,
        }
    },
    series: [
      {
         yAxis: 0,
         name: 'Paris Centre Ouest',
         tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} m²</b><br/>Île-de-France: {point.stackTotal} m²'
       },
     },{
        yAxis: 0,
        name: 'Reste Paris',
        tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} m²</b><br/>Île-de-France: {point.stackTotal} m²'
      },
    },{
       yAxis: 0,
       name: 'Croissant Ouest et La Défense',
       tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} m²</b><br/>Île-de-France: {point.stackTotal} m²'
     },
   },{
      yAxis: 0,
      name: '1ère Couronne Hors Croissant Ouest',
      tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} m²</b><br/>Île-de-France: {point.stackTotal} m²'
    },
  },{
     yAxis: 0,
     name: '2ème Couronne',
     tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} m²</b><br/>Île-de-France: {point.stackTotal} m²'
   },
 },  {
    type:'spline',
    yAxis: 0,
    name:'Île-de-France',
    data: {
    },
    tooltip: {pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} m²</b><br/>'
  },
  dataLabels: {
      enabled: true,
      style: {
        textOutline: 0,
        fontWeight: 'light',
        color: 'black',
 }
},
    dashStyle: 'dot',
    color: 'black'
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
