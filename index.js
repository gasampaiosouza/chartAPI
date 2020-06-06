// const myChart = document.getElementById('myChart').getContext('2d');
const URL = 'http://localhost:3232/api';

const getData = async URL => {

  const data = await fetch(URL).then(data => data.json())

  createChart(data);
}

getData(URL);

function createChart({
  labels,
  title,
  data,
  label
}) {

  const datasets = [];

  const colors = ['#84dcc6', '#a5ffd6', '#ffe66d', '#ff686b'];
  const opacityColors = [
    'rgba(132, 220, 198, .25)',
    'rgba(165, 255, 214, .25)',
    'rgba(255, 230, 109, .25)',
    'rgba(255, 104, 107, .25)'
  ];

  // colors[Math.round(Math.random() * (colors.length - 1))]

  data.map((data, i) => {
    datasets.push({
      label: label[i],
      backgroundColor: opacityColors[i],
      borderColor: colors[i],
      borderWidth: 1,
      data
    });
  })

  Chart.defaults.global.defaultFontFamily = 'Fira Sans';

  return new Chart(myChart, {
    type: 'bar',
    data: {
      labels,
      datasets
    },
    options: {
      legend: {
        position: 'right',
        align: 'center',
      },
    }
  });
}

// createChart();