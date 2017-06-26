/**
 * Created by quang on 25/06/2017.
 */
const express = require('express');
const app = express();
const nunjucks = require('nunjucks')
const bodyParser = require("body-parser")
const path = require('path');

nunjucks.configure('views', {
    autoescape: true,
    express: app
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
app.get('/', (req,res) => {
    res.render('index')
});

app.listen(3000,() => {
    console.log('Listen on localhost:3000')
})