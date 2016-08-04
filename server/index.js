const fs = require('fs');
const path = require('path');
const express = require('express');
const vueServerRenderer = require('vue-server-renderer');

const filePath = path.join(__dirname, '../dist/bundle.js')
const code = fs.readFileSync(filePath, 'utf8');
const bundleRenderer = vueServerRenderer.createBundleRenderer(code);

const app = express();

app.get('/', function (req, res) {
  bundleRenderer.renderToString((err, html) => {
    if (err){
      res.status(500).send(`
        <h1>Error: ${err.message}</h1>
        <pre>${err.stack}</pre>
      `);
    } else {

      res.send(`
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Vue 2.0 SSR</title>
          </head>
          <body>
            ${html}
          </body>
        </html>`);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
