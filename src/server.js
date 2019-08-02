const app = require('./app');

try {
    app.listen(8080, function() {
        console.log('%s listening at %s', app.name, app.url);
    });

}
catch(error) {
    console.error(error);
}