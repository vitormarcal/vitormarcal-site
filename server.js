const compression = require('compression');
const express = require('express');

const app = express();
const PORT = process.env.PORT = 3000;

app.use(compression());
app.use(express.static('dist'));



app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});
