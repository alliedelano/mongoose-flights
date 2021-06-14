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
    if (req.body.departs == ''){
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDate();
        req.body.departs = new Date(year + 1, month, day);
    }

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
        res.render('flights/index', {
            flights: allFlightDocuments
        })
    })
}
