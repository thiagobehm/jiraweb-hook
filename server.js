const express = require('express');
const multer = require('multer')

//configures a variable to heroku environment
const port = process.env.PORT || 3000;

//starts express
let app = express();

var upload = multer();


app.post('/webhook', upload.none(), (req, resp, next) => {

  console.log(req.body);

});


//start the server
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});