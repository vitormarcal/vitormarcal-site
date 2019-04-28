
const compression = require('compression');
const morgan = require('morgan');
const express = require('express');
const http2 = require('http2');

const fs = require('fs')
const path = require('path')

const app = express();
const PORT = process.env.PORT = 3000;

app.use(compression());
app.use(morgan('tiny'));
app.use(express.static('dist'));


const options = {
  cert: fs.readFileSync(path.join(__dirname, '/config/cert.pem')),
  key: fs.readFileSync(path.join(__dirname, '/config/key.pem'))
}

console.log(options)

http2
  .createServer(options)
  .listen(PORT, (err) => {
    if (err) {
      throw new Error(err);
    }

    /!* eslint-disable no-console *!/
    console.info(`Listening on: http://localhost:${PORT}/`);
    /!* eslint-enable no-console *!/
  });
