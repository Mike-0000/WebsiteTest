const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root folder
app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
