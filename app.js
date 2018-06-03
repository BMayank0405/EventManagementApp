const express = require('express');
const bodyParser = require('body-parser');
var serveStatic = require('serve-static');
const cors = require('cors')

const app = express();

app.use(serveStatic(__dirname + "/dist"));

// var corsOptions = {
//   origin: 'http://localhost:8080/',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// app.use(cors())

const mongoose  = require('mongoose');
mongoose.connect('mongodb://bmayank:mj0405@ds117729.mlab.com:17729/eventtry');
let db = mongoose.connection;

db.on('error', (err) => {
	console.log(err);
})


const router = require('./routes/router');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/',router);

const port = process.env.PORT || 3000;
app.listen(port)
console.log(`server started on ${port}`)