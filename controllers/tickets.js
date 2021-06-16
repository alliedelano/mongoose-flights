const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
const flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};

function newTicket(req, res){
    console.log("new ticket function working")
    Ticket.find({}, function(err, tickets){
        res.render(`/flights/${flight._id}/tickets/new`, {
            title: 'Add Ticket',
            tickets
        });
    })
}

function create(req, res){
    Ticket.create(req.body, function(err, ticket){
        res.redirect(`/flights/${req.params.id}`);
    });
}



