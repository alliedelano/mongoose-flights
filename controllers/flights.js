const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
}
function show(req, res){
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', { title: 'Flight Details', flight});
    });
}

function create(req, res){
    Flight.create(req.body, function(err, flightDocument){
        console.log(err);
        if(err) return res.render('flights/new');
        res.redirect('/flights');
    })
    const flight = new Flight(req.body);
    flight.save(function(err){
    if (err) return res.redirect('/flights/new');
    res.redirect('/flights');
    });
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
