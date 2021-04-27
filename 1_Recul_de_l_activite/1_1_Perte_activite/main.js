/**
 * Highcharts plugin to defer initial series animation until the element has
 * appeared.
 *
 * Updated 2019-04-10
 *
 * @todo
 * - If the element is greater than the viewport (or a certain fraction of it),
 *   show the series when it is partially visible.
 */
(function (H) {

    var pendingRenders = [];

    // https://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
    function isElementInViewport(el) {

        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (
                window.innerHeight ||
                document.documentElement.clientHeight
            ) &&
            rect.right <= (
                window.innerWidth ||
                document.documentElement.clientWidth
            )
        );
    }

    H.wrap(H.Series.prototype, 'render', function deferRender(proceed) {
        var series = this,
            renderTo = this.chart.container.parentNode;

        // It is appeared, render it
        if (isElementInViewport(renderTo) || !series.options.animation) {
            proceed.call(series);

        // It is not appeared, halt renering until appear
        } else  {
            pendingRenders.push({
                element: renderTo,
                appear: function () {
                    proceed.call(series);
                }
            });
        }
    });

    function recalculate() {
        pendingRenders.forEach(function (item) {
            if (isElementInViewport(item.element)) {
                item.appear();
                H.erase(pendingRenders, item);
            }
        });
    }

    if (window.addEventListener) {
        ['DOMContentLoaded', 'load', 'scroll', 'resize']
            .forEach(function (eventType) {
                addEventListener(eventType, recalculate, false);
            });
    }

}(Highcharts));




Highcharts.getJSON('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/1_Recul_de_l_activite/1_1_Perte_activite/mgp.geojson', function (geojson) {
    Highcharts.mapChart('graphique1', {
        chart: {
            map: geojson,
            height:600
        },
        title: {
            text: null
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        colorAxis: {
            tickPixelInterval: 50,
            reversed: true,
            minColor: '#990041',
           maxColor: '#E7C7D4',
        //    stops: [
        //     [0, '#3060cf'],
        //     [0.8, '#fffbbc'],
        //     [0.95, '#c4463a']
        // ]
        },
        plotOptions: {
           series: {
             dataLabels: {
               allowOverlap: true,
               useHTML: true,
               style: {
                 width: 70,
                 fontSize:'12px',
                 textAlign: 'center',
                  color:'white'
               }
             }
           }
         },

        series: [{
            data: data_T4_2020,
            keys: ['EPT_NUM', 'value','className'],
            joinBy: 'EPT_NUM',
            name: "Perte d'activité",
            borderColor: 'white',
            borderWidth: 0.5,
            tooltip: {pointFormat: '<span style="color:#38cae9">{point.properties.L_EPT}</span>: <b>{point.value} %</b><br/>'
          },
            states: {
                hover: {
                    color: '#38cae9'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.properties.L_EPT}',
                style: {
                 // fontSize: '9px',
                 fontFamily: 'Roboto',
                 fontWeight: 'light',
                 color: 'black',
                 textOutline: 0
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

    Highcharts.mapChart('graphique2', {
        chart: {
            map: geojson,
            height:600
        },
        title: {
            text: null
        },
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        colorAxis: {
            tickPixelInterval: 50,
            reversed: true,
            minColor: '#990041',
           maxColor: '#E7C7D4',
        //    stops: [
        //     [0, '#3060cf'],
        //     [0.8, '#fffbbc'],
        //     [0.95, '#c4463a']
        // ]
        },
        plotOptions: {
           series: {
             dataLabels: {
               allowOverlap: true,
               useHTML: true,
               style: {
                 width: 70,
                 fontSize:'12px',
                 textAlign: 'center',

               }
             }
           }
         },
        series: [{
            data: data_T1_2021,
            keys: ['EPT_NUM', 'value','className'],
            joinBy: 'EPT_NUM',
            name: "Perte d'activité",
            borderColor: 'white',
            borderWidth: 0.5,
            tooltip: {pointFormat: '<span style="color:#38cae9">{point.properties.L_EPT}</span>: <b>{point.value} %</b><br/>'
          },
            states: {
                hover: {
                    color: '#38cae9'
                }
            },
            dataLabels: {
              overflowValue: "justify",
                enabled: true,
                format: '{point.properties.L_EPT}',
                style: {
                 // fontSize: '9px',
                 fontFamily: 'Roboto',
                 fontWeight: 'light',
                 color: 'black',
                 textOutline: 0
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
});
