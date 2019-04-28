const compression = require('compression');
const morgan = require('morgan');
const express = require('express');

const app = express();
const PORT = process.env.PORT = 3000;

app.use(compression());
app.use(morgan('tiny'))
app.use(express.static('dist'));



app.listen(PORT, () => {
  console.info(`Listening on: http://localhost:${PORT}/`);
});
