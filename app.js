const _ = require('underscore');
const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const { response } = require('express');

var cities = [{name: 'Istanbul', country: 'Turkey'}, {name: 'New York', country: 'USA'}, {name: 'London', country:'England'}];
var numbers=[1,23,3,4,1,3,4,5];
var app = express();
 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
 
app.listen(3000,function(){
   console.log("Listening port...");
});

app.get('/api/cities', function(request, response){
    response.send(cities);
});

app.post('/api/cities', function(request, response){
   var city = request.body;
   console.log(city);
   for(var index = 0; index < cities.length; index++){
      if(cities[index].name === city.name){
         response.status(500).send({error: "Bu şehir zaten kayıtlı"});
         return;
      }
   }
 
   cities.push(city);
   response.send(cities);
});

app.get('/api/minNumber',(request,response)=>{
    response.send(_.min(numbers).toString());
});
