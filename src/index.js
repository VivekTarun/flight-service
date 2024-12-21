const express = require('express');

const {serverConfig} = require('./config');
const apiRoutes = require('./routes');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.text());

app.use('/api', apiRoutes);

app.listen(serverConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${serverConfig.PORT}`);
    //bad code alert
    const { City, Airport } = require('./models');
    const city = await City.findByPk(1);
    console.log(city);
    const airport = await Airport.create({name: 'Kempegowda Airport', code: 'BLR'}); 
     
});

