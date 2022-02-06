const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;


// use body parser middleware

app.use(bodyParser.urlencoded({
    extended: false
}));


//API KEY pk_25112bf839294f0d8f074786aaa082d9
//create call_api function
function call_api(finishedAPI, ticker) {
    request('https://cloud.iexapis.com/stable/stock/' + ticker + '/quote?token=pk_25112bf839294f0d8f074786aaa082d9', {
        json: true
    }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        if (res.statusCode === 200) {
            finishedAPI(body);
        };
    });
};


//Set handlebars

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// Set handlenbars app GET route

app.get('/', (req, res) => {
    call_api(function(returnedFromAPI) {
        res.render('home', {
            stock: returnedFromAPI
        });
    });
});


// Set handlenbars app POST route

app.post('/', (req, res) => {
    call_api(function(returnedFromAPI) {
        // posted_stuff = req.body.stock_ticker;
        res.render('home', {
            stock: returnedFromAPI,
            // posted_stuff: posted_stuff //this function is only used for test the form
        });
    }, req.body.stock_ticker);
});


// Set about page route

app.get('/about.html', (req, res) => {
    res.render('about');
});

// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT));