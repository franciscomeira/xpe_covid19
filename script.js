//  Grafico pizza
const url = "https://api.covid19api.com/summary";
const ctx3 = document.getElementById("myChart5").getContext("2d");

// Faz a requisição à API
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const newConfirmed = data.Global.NewConfirmed;
    const newDeaths = data.Global.NewDeaths;
    const newRecovered = data.Global.NewRecovered;

    // Cria o gráfico de pizza
    const myChart5 = new Chart(ctx3, {
      type: "pie",
      data: {
        labels: ["Novos Confirmados", "Novas Mortes", "Novos Recuperados"],
        datasets: [
          {
            label: "COVID-19",
            data: [newConfirmed, newDeaths, newRecovered],
            backgroundColor: [
              "#FF6384",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Novos Casos de COVID-19 no Mundo",
        },
      },
    });
  })
  .catch((error) => console.error(error));

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
    totalCasesElement.textContent = `${totalCases.toLocaleString()}`;
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
    totalDeathsElement.textContent = `${totalDeaths.toLocaleString()}`;
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
    totalRecoveredElement.textContent = `${totalRecovered.toLocaleString()}`;
  })
  .catch((error) => console.error(error));
