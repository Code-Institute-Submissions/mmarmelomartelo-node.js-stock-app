const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const path = require('path');
const request = require('request');
const PORT = process.env.PORT || 5000;

//API KEY pk_25112bf839294f0d8f074786aaa082d9
//create call_api function
function call_api(finishedAPI) {
    request('https://cloud.iexapis.com/stable/stock/FB/quote?token=pk_25112bf839294f0d8f074786aaa082d9', {
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

const otherstuff = "Hej there, this is some stuff";
// Set handlenbars routes

app.get('/', (req, res) => {
    call_api(function(returnedFromAPI) {
        res.render('home', {
            stock: returnedFromAPI
        });
    });
});


// Set a static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('Server Listening on port ' + PORT));