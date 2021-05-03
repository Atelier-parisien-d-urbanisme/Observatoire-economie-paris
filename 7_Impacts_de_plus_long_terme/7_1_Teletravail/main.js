Highcharts.setOptions({
    colors: ['#38cae9', '#000DC9','#990041','#DAB464'],
    lang: {
      months: [
          'Janvier', 'Février', 'Mars', 'Avril',
          'Mai', 'Juin', 'Juillet', 'Août',
          'Septembre', 'Octobre', 'Novembre', 'Décembre'
      ],
      shortMonths:['Janvier', 'Février', 'Mars', 'Avril',
      'Mai', 'Juin', 'Juillet', 'Août',
      'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      weekdays: [
          'Dimanche', 'Lundi', 'Mardi', 'Mercredi',
          'Jeudi', 'Vendredi', 'Samedi'
      ],
      years: [
          '2020','2021'
      ]
  }
});

Highcharts.stockChart('graphique', {
    chart: {
        type: 'spline',
         height: 600,
    },
    title: {
        text: null
    },
    scrollbar: {
      enabled: false
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/1_Recul_de_l_activite/1_6_Frequentation_commerces_loisirs/commerce_loisirs.csv',
        enablePolling: true,
    },
    navigator: {
      outlineWidth: 0,
      maskFill: 'rgba(0, 0, 0, 0.1)',
      handles: {
        symbols: ['o', 'o'],
        backgroundColor: 'grey',
        borderColor: 'grey',
      },
      xAxis: {
        gridLineWidth: 1,
        labels: {
          step:1,
          formatter: function() {
            return Highcharts.dateFormat('%b %Y', this.value);
          }
        }
      },
      series: {
        // type: 'areaspline',
        color: '#bbb'
      }
    },
    plotOptions: {
      series: {
        lineWidth: 1,
          showInNavigator: true,
          marker: {
            enabled: false,
            symbol:'circle',
            enabledThreshold: 2,
            radius: 3,
            fillColor: '#FFFFFF',
            lineWidth: 2,
            lineColor: null // inherit from series,
          },
        }
    },
    rangeSelector:{
      enabled:false
    },
    credits: {
      enabled:false
    },
    xAxis: {
      gapGridLineWidth: 0,
      labels: {
        style: {
          fontSize: '8px',
          color:  '#CFCFCF'
        },
        formatter: function() {
          return Highcharts.dateFormat('%b %Y', this.value);
        }
      }
    },
    legend: {
      enabled:true
    },
    yAxis: {
    // tickInterval: 25,
    // min: -100,
    opposite: false,
    gridLineColor: '#efefef',
    gridLineDashStyle: 'dash',
     title: {
        enabled: false,
      },
      labels: {
        format: '{value} %',
        style:{
          color: '#CFCFCF'
        }
      }
     },
     tooltip: {
         pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y} %</b><br/>',
         valueDecimals: 1
     },
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
           title: {
             text: "."
           },
           caption: {
             text: "Source : Données lissées sur 7 jours. Source : https://www.google.com/covid19/mobility. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
           },
             chart:{
              events:{
                  load:function(){
                     // add logo, titles, and sources update in in the html page
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
});
