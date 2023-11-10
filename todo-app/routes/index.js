var express = require('express');
var router = express.Router();

var dbget = require('../db/get.js');
var dball = require('../db/all.js');
var dbdo = require('../db/exec.js');

// User Home
router.get('/', async function(req, res, next){
  if(req.session.login == undefined){
    res.redirect('/users/login');
  }

  let sql = "select *,datetime(finished, '+9 hours') from todo where user_id="
          + req.session.login.id + 'and checked = 0 and finished > CURREND_TIMESTAMP order by finished asc limit 10';

  let records = await dball.getAllRows(sql);

  

})

module.exports = router;
