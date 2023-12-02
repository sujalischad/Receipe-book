// const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(){
//   console.log('Connected')
// });
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/registeration").then(() => {
    console.log("mongodb connected")
}).catch((e) => {
    console.log(e);
})
// Models
require('./Category');
require('./Recipe');