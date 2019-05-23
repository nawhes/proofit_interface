var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PROOFIT_interface' });
});

router.get('/sk', function(req, res) {
  res.render('sk', {
    title: 'SK',
    javascript: '/javascripts/sk_ajax.js' 
  });
});

router.get('/smu', function(req, res) {
  res.render('issuer', {
    title: 'SMU',
    javascript: '/javascripts/smu_ajax.js'
    });
});

router.get('/qnet', function(req, res) {
  res.render('issuer', {
    title: 'QNET',
    javascript: '/javascripts/qnet_ajax.js'
  });
});

router.get('/toeic', function(req, res) {
  res.render('issuer', { 
    title: 'TOEIC', 
    javascript: '/javascripts/qnet_ajax.js'
  });
});


module.exports = router;
