 const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username:{
		type:String,
		required:true,
    lowercase:true,
    unique:true,
    index:true
	},
	password:{
		type:String,
		required:true
	},
	flag:{
		type:Number,
		required:true,
    min:0,
    max:5
	},
  name:{
    type:String,
    required:true,
    lowercase:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    trim: true,
    lowercase:true
  },
  headId:{
    cultural:{
      type:String
    },
    technical:{
      type:String
    }
  },
  facultyId:{
    type:String
  },
  active :{
    type:Number,
    min:0,
    max:1,
    default:1
  }

});


userSchema.pre('save', function(next){
  var user = this;

  if (!user.isModified('password') || !this.isNew) return next();

  bcrypt.genSalt(10, function(err, salt) {
      if (err) return next(err);

      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
          
          user.password = hash;
          next();
      });
  });
});

userSchema.methods.isValidPassword =async function(newPassword) {
  try {
   return await bcrypt.compare(newPassword, this.password);
  } catch(error) {
    throw new Error(error);
  }
}


const User = mongoose.model('User',userSchema);
module.exports = User;
