var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs =require('fs');

// Crée l'application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static('public'));
app.use(urlencodedParser);

app.post('/process_post',function (req, res) {
   // Préparer une sortie au format JSON
   console.log(req.body);
   response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name,
      company:req.body.company,
      role:req.body.role,
      phone:req.body.phone,
      email:req.body.email,
      description:req.body.description,

   };
console.log(response);



   fs.readFile(__dirname +'/public/crm.json', 'utf8',function(err,data){
      //transformer en objet
      var content = JSON.parse(data);
      //mettre dans le fichier crm.json
      content.customers.push(response);
      //transformer en string
      var fileStr = JSON.stringify(content);
      if(err) throw err;

      fs.writeFile(__dirname +'/public/crm.json',fileStr, 'utf8',function(err){
         if(err) throw err;
         
      });
   });
fs.writeFile(__dirname+'/public/'+req.body.first_name,req.body.last_name,req.body.company,req.body.role,req.body.phone,req.body.email,req.body.description,'utf8',function(err){
   if(err) throw err;
   res.send('ok');
});
});


var server = app.listen(2000, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

});



