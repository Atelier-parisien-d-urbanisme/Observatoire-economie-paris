Highcharts.chart('graphique', {
    chart: {
        type: 'spline'
    },
    title: {
        text: 'Evolution de l’emploi salarié à Paris 2011-2020'
    },

    data: {
        csvURL: 'https://raw.githubusercontent.com/Atelier-parisien-d-urbanisme/Observatoire-economie-paris/main/2_Evolution_de_l_emploi/2_2_Emploi_interimaire/emploi_interimaire.csv',
        enablePolling: true
    },

    caption: {
        text: 'Données CVS, en fin de trimestre, mises à jour le 11/02/2021. Sources: Insee, estimations d emploi d estimations trimestrielles Acoss-Urssaf, Dares, Insee.'
    },

    credits: {
      enabled:false
    },

    yAxis: {
     title: {
        enabled: false,
      }
     },
    legend: {
     enabled: false
    },
});
