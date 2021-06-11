const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create
}

function create(req, res){
    Flight.create(req.body, function(err, flightDocument){
        console.log(err);
        if(err) return res.render('flights/new');
        res.redirect('/flights');
    })
}

function newFlight(req, res){
    res.render('flights/new');
}

function index(req, res){
    Flight.find({}, function(err, allFlightDocuments){
        console.log(allFlightDocuments);
        res.render('flights/index', {
            flights: allFlightDocuments
        })
    })
}