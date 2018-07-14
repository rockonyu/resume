import Page from './client/build';

 var fs = require('fs');

 console.log(Page);

 fs.writeFile("./index.html", Page, function(err) {
  if(err) {
      return console.log(err);
  }

  console.log("The file was saved!");
});