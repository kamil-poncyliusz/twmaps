const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.query('SELECT NOW()', []).then(r => {
        console.log(r.rows);
        res.render('index', {});
    });
    
});

router.get('/new', (req, res) => {
    res.render('new', {});
});

router.get('/maps', (req, res) => {
    res.render('maps', {});
});

router.get('/map/:id', (req, res) => {
    res.render('map', {});
});

router.get('/user/:id', (req, res) => {
    res.render('user', {
    	'user': req.params.id
    });
});

module.exports = router;