const csvUrl = 'https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/3_Chomage_Rsa/3_4_Demandeur_emploi_arrondissement/map1.csv';

fetch(csvUrl)
  .then(response => response.text())
  .then(csv => {
    const lines = csv.split('\n');
    const headers = lines[0].split(';');
    const data = lines[1].split(';');

    const arrondissements = headers.map((code, index) => [code, parseFloat(data[index].replace(',', '.'))]);
    console.log(arrondissements);
  });