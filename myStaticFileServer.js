var express = require('express'),
    app = express();

app.use(express.static('..Sites/marisaslozano.github.io + '/public'));

app.listen(8080);