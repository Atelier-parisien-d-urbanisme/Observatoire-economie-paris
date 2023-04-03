Highcharts.setOptions({
    style: {
     fontFamily: 'Roboto'
   },
    lang: {
      downloadPNG: "Télécharger  en image PNG",
      downloadJPEG: "Télécharger en image JPEG",
      downloadPDF: "Télécharger  en document PDF",
      downloadSVG: "Télécharger  en document Vectoriel SVG",
      printChart: "Imprimer le graphique",
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
      ]
  }
});

// https://carto2.apur.org/apur/rest/services/OPENDATA/COMMUNE/MapServer/0/query?f=json&where=(N_SQ_EPCI%20%3E%3D%20129%20AND%20N_SQ_EPCI%20%3C%3D%20145)&outFields=*&geometryType=esriGeometryPolygon&geometry=%7B%22spatialReference%22%3A%7B%22latestWkid%22%3A3857%2C%22wkid%22%3A102100%7D%2C%22rings%22%3A%5B%5B%5B286813.12069880945%2C6266419.852970589%5D%2C%5B286999.62704782514%2C6259705.624406024%5D%2C%5B284388.5381616054%2C6258120.320439391%5D%2C%5B283922.27228906617%2C6254017.180761046%5D%2C%5B286346.8548262702%2C6251033.079176794%5D%2C%5B285694.08260471525%2C6246836.686323941%5D%2C%5B287465.8929203644%2C6235646.305383%5D%2C%5B285041.31038316037%2C6223430.139522471%5D%2C%5B278420.33499310317%2C6231916.178402686%5D%2C%5B269188.27071682626%2C6228186.0514223715%5D%2C%5B263406.5738973397%2C6225108.6966636125%5D%2C%5B264245.8524679103%2C6218953.987146094%5D%2C%5B259489.9405680101%2C6224455.9244420575%5D%2C%5B264898.6246894653%2C6230890.3934830995%5D%2C%5B257997.8897758845%2C6234247.507765382%5D%2C%5B251470.1675603352%2C6235459.799033984%5D%2C%5B247460.28105649774%2C6242080.774424041%5D%2C%5B244476.17947224661%2C6242920.052994612%5D%2C%5B240466.29296840917%2C6246183.914102386%5D%2C%5B240000.02709586994%2C6248328.737116067%5D%2C%5B243357.14137815245%2C6248235.483941559%5D%2C%5B242611.11598208966%2C6252338.623619904%5D%2C%5B246527.74931141926%2C6259052.852184469%5D%2C%5B249791.61041919392%2C6261757.194245197%5D%2C%5B250724.14216427243%2C6266886.118843128%5D%2C%5B257997.8897758845%2C6267165.878366652%5D%2C%5B259676.44691702578%2C6266513.106145097%5D%2C%5B264059.34611889464%2C6267818.650588207%5D%2C%5B273664.42309320293%2C6264741.295829448%5D%2C%5B283362.7532420191%2C6272481.309313599%5D%2C%5B286813.12069880945%2C6266419.852970589%5D%5D%5D%2C%22type%22%3A%22esriGeometryPolygon%22%7D

// https://carto2.apur.org/apur/rest/services/OPENDATA/COMMUNE/MapServer/0/query?where=1%3D1&outFields=N_SQ_CO,C_COINSEE,L_CO,C_POSTAL,C_AGGLO,C_METROP,N_SQ_EPCI,SHAPE_Length,SHAPE_Area&outSR=4326&f=json

Highcharts.getJSON('https://carto2.apur.org/apur/rest/services/OPENDATA/COMMUNE/MapServer/0/query?where=1%3D1&outFields=N_SQ_CO,C_COINSEE,L_CO,C_POSTAL,C_AGGLO,C_METROP,N_SQ_EPCI,SHAPE_Length,SHAPE_Area&outSR=4326&f=json', function (geojson) {

    fetchMapMGP().then(mapMGP => {
        Highcharts.mapChart('map1', {
            chart: {
                map: geojson,
                height:300
            },
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
            title: {
                text: undefined
            },
            tooltip: {
                shared: true,
            },
            colorAxis: {
                tickPixelInterval: 80,
                reversed: false,
                minColor: '#D3D3EA',
            maxColor: '#3660C0',
            //    stops: [
            //     [0, '#3060cf'],
            //     [0.8, '#fffbbc'],
            //     [0.95, '#c4463a']
            // ]
            },
            series: [{
                data: mapMGP,
                keys: ['C_COINSEE', 'value','className'],
                joinBy: 'C_COINSEE',
                borderColor: 'white',
                borderWidth: 0.5,
                name: "TEST",
                tooltip: {pointFormat: '<span style="color:#38cae9">{point.properties.l_cab}</span>: <b>{point.value} %</b><br/>'
            },
                states: {
                    hover: {
                        color: '#38cae9'
                    }
                },

                dataLabels: {
                    enabled: true,
                    format: '{point.properties.L_CO}',
                    style: {
                    width: 50,
                    // fontSize: '9px',
                    fontFamily: 'Roboto',
                    fontWeight: 'light',
                    color: 'white',
                    textOutline: 0
                }
                },
            }],
            legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            title: {
            text: '%',
            style: {
                fontStyle: 'italic'
            }
        }},
            exporting: {
            filename: 'Demandeur-d-emploi-par-arrondissement__Observatoire-economie-parisienne__Apur',
            chartOptions:{
                // add logo, titles, and sources updated in in the html page
                title: {
                text: "."
                },
                caption: {
                text: "Source : Recensement de la population (Insee) - 2017, Pôle Emploi. L’indice de chômage est le rapport entre le nombre de demandeurs d’emploi (catégorie A) inscrits à Pôle emploi et la population active âgée de 15 à 64 ans du recensement de la population. https://www.apur.org/fr/geo-data/observatoire-economie-parisienne-donnees-conjoncturelles"
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
        });

    });

   

});
