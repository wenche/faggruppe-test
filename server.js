var application_root = __dirname,
    express = require("express"),
    path = require("path");

var app = express();


app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(application_root, "public")));
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});


app.post('/tickle/update/:hours', function(req, res) {
    var json = {
        "hours": req.params.hours
    };
    res.send(json);
});

app.listen(3000);
