const compression = require('compression');
const morgan = require('morgan');
const express = require('express');

const app = express();
const PORT = process.env.PORT = 3000;

app.use(compression());
app.use(morgan('tiny'))
app.use(express.static('dist'));

app.get('*', (req, res, next) => {
  if (req.headers['x-forwarded-proto'] !== 'https') {
    console.info("redirect to https")
    res.redirect("https://" + req.headers.host + req.url);
  } else {
    next();
  }
});



app.listen(PORT, () => {
  console.info(`Listening on: http://localhost:${PORT}/`);
});
