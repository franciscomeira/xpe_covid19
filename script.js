// lista numeros de paises
/*fetch("https://api.covid19api.com/summary")
  .then((response) => response.json())
  .then((data) => {
    const countries = data.Countries;
    const tableBody = document.getElementById("table-body");

    countries.forEach((country) => {
      const row = document.createElement("tr");

      const countryName = document.createElement("td");
      countryName.textContent = country.Country;
      row.appendChild(countryName);

      const newCases = document.createElement("td");
      newCases.textContent = country.NewConfirmed;
      row.appendChild(newCases);

      const totalCases = document.createElement("td");
      totalCases.textContent = country.TotalConfirmed;
      row.appendChild(totalCases);

      const newDeaths = document.createElement("td");
      newDeaths.textContent = country.NewDeaths;
      row.appendChild(newDeaths);

      const totalDeaths = document.createElement("td");
      totalDeaths.textContent = country.TotalDeaths;
      row.appendChild(totalDeaths);

      const totalRecovered = document.createElement("td");
      totalRecovered.textContent = country.TotalRecovered;
      row.appendChild(totalRecovered);

      tableBody.appendChild(row);
    });
  })
  .catch((error) => console.error(error));
*/

//Total de casos confirmados
fetch("https://api.covid19api.com/summary")
  .then((response) => response.json())
  .then((data) => {
    const countries = data.Countries;
    let totalCases = 0;

    countries.forEach((country) => {
      totalCases += country.TotalConfirmed;
    });

    const totalCasesElement = document.getElementById("total-cases");
    totalCasesElement.textContent = `Total de casos confirmados de COVID-19 em todos os países: ${totalCases.toLocaleString()}`;
  })
  .catch((error) => console.error(error));

//Função soma total de mortes

fetch("https://api.covid19api.com/summary")
  .then((response) => response.json())
  .then((data) => {
    const countries = data.Countries;
    let totalDeaths = 0;

    countries.forEach((country) => {
      totalDeaths += country.TotalDeaths;
    });

    const totalDeathsElement = document.getElementById("total-mortos");
    totalDeathsElement.textContent = `Total de mortes por COVID-19 em todos os países: ${totalDeaths.toLocaleString()}`;
  })
  .catch((error) => console.error(error));

//Função soma total de recuperados

fetch("https://api.covid19api.com/summary")
  .then((response) => response.json())
  .then((data) => {
    const countries = data.Countries;
    let totalRecovered = 0;

    countries.forEach((country) => {
      totalRecovered += country.TotalRecovered;
    });

    const totalRecoveredElement = document.getElementById("total-recuperados");
    totalRecoveredElement.textContent = `Total de recuperados de COVID-19 em todos os países: ${totalRecovered.toLocaleString()}`;
  })
  .catch((error) => console.error(error));
