// const csvUrl = 'https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/3_Chomage_Rsa/3_4_Demandeur_emploi_arrondissement/map1.csv';

// fetch(csvUrl)
//   .then(response => response.text())
//   .then(csv => {
//     const lines = csv.split('\n');
//     const headers = lines[0].split(';');
//     const data = lines[1].split(';');

//     const arrondissements = headers.map((code, index) => [code, parseFloat(data[index].replace(',', '.'))]);
//     console.log(arrondissements);
//   });



// const csvUrl = 'https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/3_Chomage_Rsa/3_4_Demandeur_emploi_arrondissement/map1B.csv';

// fetch(csvUrl)
//   .then(response => response.text())
//   .then(csv => {
//     const lines = csv.split('\n');
//     const headers = lines[0].split(';');
//     const data = lines[1].split(';');

//     const arrondissements = headers.map((code, index) => [code, parseFloat(data[index].replace(',', '.'))]);
//     console.log(arrondissements);
//   });



  function fetchMap1() {
    const csvUrl1 = 'https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/3_Chomage_Rsa/3_4_Demandeur_emploi_arrondissement/map1Data.csv';
  
    return fetch(csvUrl1)
      .then(response => response.text())
      .then(csv1 => {
        const lines = csv1.split('\n');
        const headers = lines[0].split(';');
        const data = lines[1].split(';');
        console.log(csvUrl1);
        const map1Data = headers.map((code, index) => [code, parseFloat(data[index].replace(',', '.'))]);
        return map1Data;
      });
  }


  function fetchMap2() {
    const csvUrl2 = 'https://atelier-parisien-d-urbanisme.github.io/Observatoire-economie-paris/3_Chomage_Rsa/3_4_Demandeur_emploi_arrondissement/map2Data.csv';
  
    return fetch(csvUrl2)
      .then(response2 => response2.text())
      .then(csv2 => {
        const lines2 = csv2.split('\n');
        const headers = lines2[0].split(';');
        const data2 = lines2[1].split(';');
        console.log(csvUrl2);
        const map2Data = headers.map((code, index) => [code, parseFloat(data2[index].replace(',', '.'))]);
        console.log(map2Data);
        return map2Data;
      });
  }