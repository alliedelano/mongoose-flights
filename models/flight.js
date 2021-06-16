const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const destinationSchema = new mongoose.Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    },
    arrival: {
        type: Date
    }

})

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: getDateYear() //worked with Michael and couldn't figure out 
        // why this wouldn't work so this is fixed in controller function
    },
    destinations: [destinationSchema],
});

function getDateYear(){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate()
    return new Date(year + 1, month, day);
}

const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
