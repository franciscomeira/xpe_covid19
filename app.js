const searchButton = document.getElementById("searchButton");
const countryInput = document.getElementById("country");
const startDateInput = document.getElementById("startDate");
const endDateInput = document.getElementById("endDate");
const cartElement = document.getElementById("chart");
const loadingMessage = document.getElementById("loadingMessage");

const covidApiUrl = "https://api.covid19api.com/country/";

let chart;

function filterDatabyDate(data, startDate, endDate) {
  return data.filter((item) => {
    const itemDate = new Date(itemDate);

    return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
  });
}

searchButton.addEventListener("click", () => {
  const country = countryInput.value;
  const startDate = startDateInput.value;
  const endDate = endDateInput.value;

  if (!country) {
    alert("Informe um país");
    return;
  }
  if (!startDate || !endDate) {
    alert("Selecione um intervalo");
    return;
  }

  loadingMessage.style.display = "block";

  axios
    .get(
      `${covidApiUrl}${country}?from=${startDate}T00:00:00Z&to=${endDate}T23:59Z`
    )
    .then((Response) => {
      loadingMessage.style.display = "none";
      const rawDate = Response.data;
      const filterData = filterDatabyDate(rawDate, startDate, endDate);
      const labels = [];
      const values = [];

      filterData.array.forEach((item) => {
        labels.push(item.Date.slice(0, 10));
        values.push(item.Confirmed);
      });

      if (chart) {
        chart.destroy();
      }

      chart = new Chart(chartElement, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Casos Confirmados",
              data: values,
              backgroundcolor: "rgba(75,192,192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    })
    .catch((error) => {
      console.log("Erro ao buscar os dados", error);
      alert("Ocorreu um erro ao buscar os dados");
    });
});
