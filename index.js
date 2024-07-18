const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files
const rootApp = express();
rootApp.use(express.static(path.join(__dirname)));

const subdomain1App = express();
subdomain1App.use(express.static(path.join(__dirname, 'subfolder1')));

const subdomain2App = express();
subdomain2App.use(express.static(path.join(__dirname, 'subfolder2')));

// Use vhost to handle subdomains
app.use(vhost('subdomain1.yourdomain.com', subdomain1App));
app.use(vhost('subdomain2.yourdomain.com', subdomain2App));
app.use(vhost('yourdomain.com', rootApp));

app.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
