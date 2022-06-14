const express = require('express');
const schedule = require('node-schedule');
const router = require('./routes/router');
const dataApi = require('./routes/dataApi');
const mapsApi = require('./routes/mapsApi');
const db = require('./db');
const downloadTask = require('./src/downloadTask');

const app = express();

//variables
const PORT = '8080';

//configuration
app.set('view engine', 'pug');
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//routing
app.use('/', router);
app.use('/api/data', dataApi);
app.use('/api/maps', mapsApi);

app.listen(process.env.PORT || PORT, () => {
    console.log('Server running on port ' + PORT);
});

schedule.scheduleJob('0-59 * * * *', downloadTask);