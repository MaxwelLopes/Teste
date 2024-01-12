const express = require('express');
const app = express();
const routes = require('./routes/route')

app.set('view engine', 'ejs');
app.set('views', './views/pages');

app.use('/', routes)

app.listen(3000, () => {
  console.log("Servidor ativo http://localhost:3000");
});
