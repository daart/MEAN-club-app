var
  express = require('express'),
  app = express(),
  path = require('path'),
  port = 6575;

/*
* we will use serve.static method that will return
* an absolute path within our 'public' folder (that is a root folder as a client)
* and serve static files from there
*/
app.use(express.static(
    path.resolve(__dirname + '/../public/')
));

/*
* to serve static files and libraries within our app,
* we will use serve.static method that will return an
* absolute path pointing to node_modules folder, where all of our
* static files and downloaded libraries live. We'll use '/libs'
* as an allias to node_modules absolute path
*/
app.use('/libs', express.static(
  path.resolve(__dirname + '/../node_modules')
));


/*
* on every request our server will send
* our home page app.html as a response
*/
app.get('*', function ( req, res ) {
  res.sendFile(
    path.resolve( __dirname + '/../public/app.html' )
  )
});

app.listen(port, function() {
  console.log('our app is served on port : ' + port);
});
