const express = require('express');
const app = express();
app.use(express.static('public'));

const main = require('./routers/main');

app.use('/', main);




app.listen(3001, () => {
    console.log('Servidor funcionando');
});
