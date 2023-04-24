Highcharts.setOptions({
    colors: ['#3D71EA','#CE8C34'],
    // colors: ['#9494FA','#3333cc','#F1BB63','#CE8C34',],
    lang: {
      downloadPNG: "Télécharger  en image PNG",
      downloadJPEG: "Télécharger en image JPEG",
      downloadPDF: "Télécharger  en document PDF",
      downloadSVG: "Télécharger  en document Vectoriel SVG",
      printChart: "Imprimer le graphique",
		months: ['Janvier', 'F├®vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao├╗t', 'Septembre', 'Octobre', 'Novembre', 'D├®cembre'],
		weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    shortMonths: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
	}
});

Highcharts.chart('graphique', {
    chart: {
        type: 'spline'
    },
    title: {
        text: null
    },
    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/3_Chomage_Rsa/3_5_Chomage_partiel/chomage_partiel.csv',
        enablePolling: true
    },
    credits: {
      enabled:false
    },
    series : [
      {

      },
      {
        visible:false,
      },
      {
        visible:false,
      }
    ],
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
            },
            dataLabels: {
               enabled: true,
               align: 'left',
               crop: false,
               useHTML: false,
               formatter: function() {
                   if (this.point.x == this.series.data.length - 1) {
                     return '<span style="color: '+ this.color + '">' + Highcharts.numberFormat(this.y,0) + '</span>';
                   } else {
                       return null;
                   }
               },
           }
        }
    },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 560
            },
            // Labels space on mobile
            chartOptions: {
                xAxis: {
                    labels: {
                        step: 2,
                    }
                },
            }
        }]
    },
    xAxis: {
    labels: {
    step: 1,
    rotation: -45,
    style: {
      fontSize: '8px',
      }
    }
  },
    yAxis: {
      gridLineColor: '#efefef',
      gridLineDashStyle: 'dash',
      labels: {
        format: '{value}',
        formatter: function() {
          return Highcharts.numberFormat(this.value, 0, '.', ' ');
        },
              style: {
                  color: '#CFCFCF'
              }
          },
     title: {
        enabled: false,
      }
     },
    // legend: {
    //  enabled: false,
    // },
    exporting: {
      filename: 'Chomage-partiel__Observatoire-economie-parisienne__Apur',
      chartOptions:{
        // add logo, titles, and sources updated in in the html page
        title: {
          text: "."
        },
        caption: {
          text: "Source : ASP-DGEFP-Dares – Extraction du SI APART. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
        }
});
