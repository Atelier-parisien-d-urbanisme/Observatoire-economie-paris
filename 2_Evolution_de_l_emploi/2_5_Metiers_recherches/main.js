/**
 * Create a constructor for sparklines that takes some sensible defaults and merges in the individual
 * chart options. This function is also available from the jQuery plugin as $(element).highcharts('SparkLine').
 */
//  (function (Highcharts) {
//
//     var SplineSeries = Highcharts.seriesTypes.spline;
//
//     // override the drawLine method
//     var splineDrawGraph = SplineSeries.prototype.drawGraph;
//     SplineSeries.prototype.drawGraph = function() {
//
//         var arrowLength = 15,
//             arrowWidth = 8,
//             series = this,
//             segments = series.points,
//             lastPoint = segments[segments.length - 1],
//             nextLastPoint = segments[segments.length - 2],
//             angle = Math.atan((lastPoint.plotX - nextLastPoint.plotX) /
//             (lastPoint.plotY - nextLastPoint.plotY)),
//             path = [];
//
//         if (angle < 0) {
//             angle = Math.PI + angle;
//         }
//
//         // call the original method
//         splineDrawGraph.apply(series, arguments);
//
//     		console.log(path);
//
//         // last point
//         path.push('M', lastPoint.plotX, lastPoint.plotY);
//         path.push(
//             'L',
//             lastPoint.plotX + arrowWidth * Math.cos(angle),
//             lastPoint.plotY - arrowWidth * Math.sin(angle)
//         );
//         path.push(
//             lastPoint.plotX + arrowLength * Math.sin(angle),
//             lastPoint.plotY + arrowLength * Math.cos(angle)
//         );
//         path.push(
//             lastPoint.plotX - arrowWidth * Math.cos(angle),
//             lastPoint.plotY + arrowWidth * Math.sin(angle),
//             'Z'
//         );
//
//         series.chart.renderer.path(path)
//             .attr({
//                 fill: series.color
//             })
//             .add(series.group);
//
//     };
//
// }(Highcharts));

// var chart = new Highcharts.Chart({
//
//     chart: {
//         renderTo: 'container',
//         type: 'spline'
//     },
//     xAxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     },
//     series: [{
//         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 154.4],
//         marker: {
//             enabled: false
//         }
//     }]
// });

Highcharts.setOptions({
    colors: ['#9fce9c']
});

Highcharts.SparkLine = function (a, b, c) {
  var hasRenderToArg = typeof a === 'string' || a.nodeName,
    options = arguments[hasRenderToArg ? 1 : 0],
    defaultOptions = {
      chart: {
        renderTo: (options.chart && options.chart.renderTo) || this,
        backgroundColor: null,
        borderWidth: 0,
        type: 'area',
        margin: [2, 0, 2, 0],
        width: 25,
        height: 30,
        style: {
          overflow: 'visible'
        },

        // small optimalization, saves 1-2 ms each sparkline
        skipClone: true
      },
      title: {
        text: ''
      },
      credits: {
        enabled: false
      },
      xAxis: {
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickPositions: []
      },
      yAxis: {
        endOnTick: false,
        startOnTick: false,
        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        tickPositions: [0]
      },
      legend: {
        enabled: false
      },
      tooltip: {
        hideDelay: 0,
        outside: true,
        shared: true
      },
      plotOptions: {
        series: {
          animation: false,
          lineWidth: 1,
          shadow: false,
          states: {
            hover: {
              lineWidth: 1
            }
          },
          marker: {
            radius: 1,
            states: {
              hover: {
                radius: 2
              }
            }
          },
          fillOpacity: 0.25
        },
        column: {
          negativeColor: '#910000',
          borderColor: 'silver'
        }
      }
    };
  options = Highcharts.merge(defaultOptions, options);
  return hasRenderToArg ?
    new Highcharts.Chart(a, options, c) :
    new Highcharts.Chart(options, b);
};

var start = +new Date(),
  $tds = $('td[data-sparkline]'),
  fullLen = $tds.length,
  n = 0;

// Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
// can take some seconds, so we split the input into chunks and apply them in timeouts
// in order avoid locking up the browser process and allow interaction.
function doChunk() {
  var time = +new Date(),
    i,
    len = $tds.length,
    $td,
    stringdata,
    arr,
    data,
    chart;

  for (i = 0; i < len; i += 1) {
    $td = $($tds[i]);
    stringdata = $td.data('sparkline');
    arr = stringdata.split('; ');
    data = $.map(arr[0].split(', '), parseFloat);
    chart = {};

    if (arr[1]) {
      chart.type = arr[1];
    }
    $td.highcharts('SparkLine', {
      series: [{
        data: data,
        pointStart: 1
      }],
      tooltip: {
        headerFormat: '<span style="font-size: 10px, font-weight:bold">' + "Offres d'emploi : ",
        pointFormat: '<b>{point.y}</b>'
      },
      chart: chart
    });

    n += 1;

    // If the process takes too much time, run a timeout to allow interaction with the browser
    if (new Date() - time > 500) {
      $tds.splice(0, i + 1);
      setTimeout(doChunk, 0);
      break;
    }

    // Print a feedback on the performance
    if (n === fullLen) {
      $('#result').html('Generated ' + fullLen + ' sparklines in ' + (new Date() - start) + ' ms');
    }
  }
}
doChunk();
