const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
	name:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:true
	},
	venueId:{
		type:String,
		required:true
	},
	date:{
		startDate:{
			type:Date,
			required:true,
		    index:true
		},
		endDate:{
			type:Date,
			required:true,
		    index:true
		}
	},
	status:{
		type:Number,
	    default:0
	},
	societyId:{
		type:String,
		required:true
	},
	headId:{
		type:String,
		required:true
	},
	facultyId:{
		type:String,
		required:true
	},
	coordinator:{
		name:{
			type:String,
			required:true
		},
		phone:{
			type:Number,
			required:true
		}
	},
	activeId :{
	    type:Number,
	    min:0,
	    max:1,
	    default:1
 	},
	formUrl:{
		type:String
	},
	edit:{
		type:String
	}
});

const Event = mongoose.model('Event',eventSchema);
module.exports = Event;
