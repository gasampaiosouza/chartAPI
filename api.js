const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors()
);

app.get('/api', (req, res) => {

  res.json({
    labels: ['cityA', 'cityB', 'cityC', 'cityD', 'cityE'],
    title: 'Some important title',

    data: [
      [40, 34, 02, 28, 49],
      [30, 46, 43, 01, 46],
      [60, 34, 09, 32, 51],
    ],
    label: [
      'São Paulo',
      'Rio de Janeiro',
      'Rio Grande do Sul',
    ]
  });

  // a more advanced example to work with chartJS
  // res.json({
  //   labels: ['01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '07/06', '08/06', '09/06', '10/06', '11/06', '12/06'],
  //   // title: 'Não precisa nesse caso',

  //   data: [
  //     [40, 34, 02, 28, 49, 40, 34, 02, 28, 49, 23, 24],
  //     [30, 46, 43, 01, 46, 30, 86, 43, 01, 46, 83, 14],
  //     [60, 34, 09, 32, 51, 60, 34, 09, 32, 51, 23, 44],
  //     [60, 34, 29, 12, 61, 60, 74, 04, 22, 11, 53, 74],
  //   ],
  //   label: [
  //     'Carne',
  //     'Maçã',
  //     'Espinafre',
  //     'Chocolate',
  //   ]
  // });

})

app.listen(3232, () => {
  // empty...
})