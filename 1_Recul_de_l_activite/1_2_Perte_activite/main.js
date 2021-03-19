// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['T1', 0],
    ['T2', 1]
];

// Create the chart
var chart = Highcharts.mapChart('container', {
    chart: {
        map: 'countries/mx/mx-all'
    },

    title: {
        text: 'Highmaps basic demo'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/mx/mx-all.js">Mexico</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Random data',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function() {
                if (this.point['hc-key'] === 'T2') {
                    return 'CDMX';
                }

                return this.point.name;
            }
        }
    }],

    tooltip: {
        pointFormatter: function() {
            if (this['hc-key'] === 'T2') {
                return 'CDMX: ' + this.value;
            }

            return this.name + ' ' + this.value;
        }
    }
});
