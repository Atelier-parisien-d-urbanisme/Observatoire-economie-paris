var jsonData = [];

fetch('https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/3_Chomage_Rsa/3_4_Demandeur_emploi_arrondissement/map1.csv')
  .then(response => response.text())
  .then(data => {
    var lines = data.split('\n');
    var headers = lines[0].split(',');
    for (var i = 1; i < lines.length; i++) {
      var values = lines[i].split(',');
      var obj = {};
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = values[j];
      }
      jsonData.push(obj);
    }
    console.log(jsonData);
  });