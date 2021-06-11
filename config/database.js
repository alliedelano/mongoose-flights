const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights', {
    newUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

mongoose.connection.on('connected', function(){
    console.log(`connected to MongoDB`);
})