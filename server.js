const express = require('express');
const path = require('path');
const config = require('./config');
const httpProxy = require('http-proxy');


const app = express();

app.disable('x-powered-by');

app.set('port', (process.env.PORT || 3001));

const proxy = httpProxy.createProxyServer({
  target: config.apiHost,
  headers: {
    authorization: config.authorization
  },
  changeOrigin: true,
});

// Proxy to API server
app.use('/api', (req, res) => {
  proxy.web(req, res);
});


app.use(express.static('dist'));

// Always return the main index.html, so react-router renders the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(app.get('port'), () => {
    console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
