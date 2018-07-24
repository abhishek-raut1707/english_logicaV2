module.exports = function(app)
{
    var api = require('../controller/api');

    app.post('/getAllExpPageID', api.getAllExpPageID);
}