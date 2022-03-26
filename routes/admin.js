const express = require('express');
const router = express.Router();


var teams = [{ "name": "Fenerbahçe" }, { "name": "Galatasaray" }, { "name": "Beşiktaş" }]

router.get('/teams', function (request, response) {
    response.send(teams);
});

router.post('/addTeam', function (request, response) {
    var team = request.body;
    if (teams.filter(e => e.name == team.name).length>0) {
        response.status(500).send({ error: "Already recorded." });
        return;
    }
    teams.push(team);
    response.send(teams);
});

module.exports=router;