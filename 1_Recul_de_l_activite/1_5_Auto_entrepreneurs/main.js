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
            return this.value / 1000000 + ' M€';
        },
      // format: '{value} €',
      // align: 'left',
      //       x: 0,
      //       y: -2,
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
         }
     },
     credits: {
       enabled:false
       },
});
