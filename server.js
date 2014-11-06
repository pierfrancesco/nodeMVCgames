    var express = require("express");
    var app = express();
    var bodyParser = require('body-parser');
    var cookieParser = require('cookie-parser');
    var swig = require('swig');
    var path = require('path')
    var _= require('underscore');

    // Add headers
	app.use(function (req, res, next) {

	    // Website you wish to allow to connect
	    res.setHeader('Access-Control-Allow-Origin', '*');

	    // Request methods you wish to allow
	    res.setHeader('Access-Control-Allow-Methods', 'GET');

	    // Request headers you wish to allow
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    // Pass to next layer of middleware
	    next();
	});


	app.use(cookieParser());
    app.use(bodyParser());
	app.use(express.static(path.join(__dirname, 'public')));
	// This is where all the magic happens!
	app.engine('html', swig.renderFile);
	app.set('views', __dirname + '/views');
     
    app.get("/", function(req, res) {
       res.render('index.html', { /* template locals context*/  });
    });

    app.get("/game",function(req,res){
    	res.render('game.html',{  title: req.query.t , w:req.query.w, h:req.query.h, url:req.query.u });
    });

    app.listen(process.env.PORT || 1337);






   




   