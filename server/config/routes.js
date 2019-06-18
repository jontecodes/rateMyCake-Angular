// controllers
var cakes = require('../controllers/cakes');

module.exports = function(app){
    app.get('/cakes', (req, res) => {
        cakes.index(req, res);
    })
    app.get('/cakes/:id', (req, res) => {
        cakes.cake(req, res);
    })
    app.post('/create', (req, res) => {
        cakes.create(req, res);
    })
    app.post('/create-comment/:id', (req, res) => {
        console.log('Huh?', req.params.id);
        console.log(req.body)
        cakes.commentCreate(req, res);
    })
    app.put('/cakes/edit/:id', (req, res) => {
        cakes.edit(req, res);
    })
}