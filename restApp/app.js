'use strict';
var express = require('express'),
    http = require('http'),
    logger = require('bunyan-request-logger'),
    errorHandler = require('express-error-handler'),
    app = express(),
    log = logger(),
    server,
    port = 3000;
var albums = [];
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.methodOverride());

app.use(log.requestLogger());
// Respond to get requests on /albums
app.get('/albums', function (req, res) {
    res.send({
        chmzq50np0002gfixtr1qp64o: {
            "id": "chmzq50np0002gfixtr1qp64o",
            "name": "Settle",
            "artist": "Disclosure",
            "artistId": "chmzq4l480001gfixe8a3nzhm",
            "coverImage": "/covers/medium/zrms5gxr.jpg",
            "year": "2013",
            "genres": [
                "electronic", "house", "garage", "UK garage",
                "future garage"
            ]
        }
    });
});
app.post('/albums', function (req, res) {
    var album = {};
    album = Object.assign(album, req.body, { id: id });
    var id = cuid();
    //var album = mixIn({}, req.body, {id: id});
    album = Object.assign(album, req.body, { id: id });
    albums[id] = album;
    res.send(201, {
        href: '/albums/' + id
    });
});
app.options('/albums', function (req, res) {
    res.send(['GET', 'POST', 'OPTIONS']);
});


// GET /albums/:id -> show
app.get('/albums/:id', function (req, res, next) {
    var id = req.params.id,
        body = albums[id],
        err;
    if (!body) {
        err = new Error('Album not found');
        err.status = 404;
        return next(err);
    }
    res.send(200, body);
});


// PUT /albums /: id -> create or update
app.put('/albums/:id', function (req, res) {
    var album = {};
    album = Object.assign(album, req.body);
    var id = req.params.id;
    var exists = albums[id];
    album.id = id;
    albums[id] = album;
    if (exists) {
        return res.send(204);
    }
    res.send(201, {
        href: '/albums/' + album.id
    });
});

// DELETE /albums/:id -> destroy
app.delete('/albums/:id',
    function (req, res, next) {
        var id = req.params.id,
            body = albums[id],
            err;
        if (!body) {
            err = new Error('Album not found');
            err.status = 404;
            return next(err);
        }
        delete albums[id];
        res.send(204);
    });

// Deliver 405 errors if the request method isn't
// defined.
app.all('/albums', errorHandler.httpError(405));
// Deliver 404 errors for any unhandled routes.
// Express has a 404 handler built-in, but it
// won't deliver errors consistent with your API.
app.all('*', errorHandler.httpError(404));
// Log errors.
app.use(log.errorLogger());
// Create the server
server = http.createServer(app);
// Handle errors. Remember to pass the server
// object into the error handler, so it can be
// shut down gracefully in the event of an
// unhandled error.
app.use(errorHandler({
    server: server
}));
server.listen(port, function () {
    console.log('Listening on port ' + port);
});