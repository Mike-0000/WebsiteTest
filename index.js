const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files
const rootApp = express();
rootApp.use(express.static(path.join(__dirname)));

const subdomain1App = express();
subdomain1App.use(express.static(path.join(__dirname, 'nl')));

const subdomain2App = express();
subdomain2App.use(express.static(path.join(__dirname, 'de')));

// Use vhost to handle subdomains
app.use(vhost('nl.vanguardenterprisesllc.com', subdomain1App));
app.use(vhost('de.vanguardenterprisesllc.com', subdomain2App));
app.use(vhost('vanguardenterprisesllc.com', rootApp));

app.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
