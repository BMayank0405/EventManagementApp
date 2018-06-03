
//user model
let UserSchema = mongoose.Schema({
	username:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	flag:{
		type:Number,
		required:true
	},
	head:{
		type:String
	}
});

let User  = module.exports = mongoose.model('User',UserSchema);
