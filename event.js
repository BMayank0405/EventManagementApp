let mongoose  = require('mongoose');
const mongodb = 'mongodb://localhost:27017/event';
mongoose.connect(mongodb);
let db = mongoose.connection;
db.on('error', console.error.bind(console,'conn error'))


//will be changed for event
let UserSchema = mongoose.Schema({
	username:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type:String,
		required:true
	},
	name:{
		type:String,
		required:true
	},
	flag:{
		type:Number,
		required:true
	}
});

let User  = mongoose.model('User',UserSchema);
