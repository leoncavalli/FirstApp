const express = require('express');
const router = express.Router();


var teams = [
    { "name": "Fenerbahçe","point":80},
    { "name": "Galatasaray","point":79 },
    { "name": "Beşiktaş","point":77 }];

router.get('/standings', function (request, response) {
    response.send(teams);
});
module.exports=router;