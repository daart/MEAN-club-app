var
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'), //express middleware
  bodyParser = require('body-parser'),
  dbUserName = 'puzzzkarapuz', //db host username
  dbPass = '14AbkiBukH73', // db host user-password
  dbUrl = `mongodb://${dbUserName}:${dbPass}@ds013310.mlab.com:13310/dibil_db`, // url to connect to our DB

  // dbUrl = 'mongodb://<dbUserName>:<dbPass>@ds019950.mlab.com:19950/puzi-data',
  path = require('path'),
  apiRouter = express.Router(),
  Product = require('./models/product'),
  port = 6575;

/*
* we will use serve.static method that will return
* an absolute path within our 'public' folder (that is a root folder as a client)
* and serve static files from there
*/

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect(dbUrl);

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


apiRouter.route('/products')
  .get(function (req, res) {
    Product.find({}, function(err, docs) {
      if(err) throw err;

      res.json(docs);
    })
  })
  .post(function (req, res) {
    Product.create(req.body, function (err, doc) {
      if(err) {
        res.json({
          success: false,
          errors: err.errors
        });

        return;
      } else {
        res.json({
          success: true
        });
      }
    })
  })

app.use('/api', apiRouter);

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
