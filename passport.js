const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { JWT_SECRET } = require('./config');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromHeader('authorization');
opts.secretOrKey = JWT_SECRET ;

//strategy for society
passport.use('society',new JwtStrategy(opts, async (payload, done) => {
	let soc = [0,1,2]
	try {
		const user = await User.findById({_id:payload.user.id});

		if(!user || !soc.includes(user.flag)) return done(null,false);
		done(null,user);	
	}
	catch(error) {
		done(error,false)
	}
}
));

//strategy for faculty
passport.use('faculty',new JwtStrategy(opts, async (payload, done) => {
	let fac = [3,4]
	try {
		const user = await User.findById({_id:payload.user.id});

		if(!user || !fac.includes(user.flag)) return done(null,false);
		done(null,user);	
	}
	catch(error) {
		done(error,false)
	}
}
));

//strategy for admin
passport.use('admin',new JwtStrategy(opts, async (payload, done) => {
	try {
		const user = await User.findById({_id:payload.user.id});

		if(!user || user.flag != 5) return done(null,false);
		done(null,user);	
	}
	catch(error) {
		done(error,false)
	}
}
));

passport.use('changepassword',new JwtStrategy(opts, async (payload, done) => {
	try {
		const user = await User.findById({_id:payload.user.id});
		if(!user ) return done(null,false);
		done(null,user);	
	}
	catch(error) {
		done(error,false)
	}
}
));



// LOCAL STRATEGY
passport.use(new LocalStrategy(async (username, password, done) => {
  	try {
    // Find the user given the email
    	const user = await User.findOne({ username});

    	if(!user || user.active == 0) return done(null, user);

    	try{
			const isMatch = await user.isValidPassword(password);

    		if (!isMatch) {
    		  return done(null, user);
    		}
    		
    		done(null, user);
    	}
    	catch(error){
    		done(error,user)
    	}

  }
   catch(error) {
    done(error, false);
  }
}));