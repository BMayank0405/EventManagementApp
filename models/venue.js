const mongoose = require('mongoose')
const Schema = mongoose.Schema

const venueSchema = new Schema ({
	name:{
		type:String,
		required:true,
		unique:true,
		trim: true,
		uppercase:true
	},
	activeId :{
	    type:Number,
	    min:0,
	    max:1,
	    default:1
 	},
})


const Venue = mongoose.model('Venue',venueSchema);
module.exports = Venue;
