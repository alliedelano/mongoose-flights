const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
const flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};

function newTicket(req, res){
    const flight = Flight.findById(req.params.id, function(err, flightDoc){
        Ticket.find({}, function(err, tickets){
            res.render("tickets/new", {
                title: 'Add Ticket',
                tickets,
                flight: flightDoc
            });
        });
    });
}


function create(req, res){
    Ticket.create(req.body, function(err, ticket){
        ticket.flight = flightDoc.id;
        res.redirect(`/flights/${req.params.id}`)
    })
};




