const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const mail = require('./mail.js');

//configures a variable to heroku environment
const port = process.env.PORT || 3000;

//starts express
let app = express();

//parses the body parameters
let urlencodedParser = bodyParser.urlencoded({
  extended: false
});


app.post('/webhook', urlencodedParser (req, resp) => {
	mail.transporter.verify().then(function(con) {
      

      if (result.isEmpty()) {
        mail.enviarEmail(req.body);
        session.success = true;
        session.data = '';
        session.erros = '';
      } else {
        session.success = false;
        session.erros = result.array();
        session.data = req.body;
      }
    }).catch(function(con) {
    	console.log("Error while submiting the email");
    });

});


//start the server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});