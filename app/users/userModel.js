import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
	username : {
		type : String,
		required : true
	},
	mail : {
		type : String,
		required : true
	},
	password : {
		type : String,
		required : true,
		select: false
	}
})

UserSchema.pre('save', function(next) {

	const user = this

	if(!user.isModified('password')){
		return next()
	}

	bcrypt.genSalt(5, (err, salt) => {
		if(err){
			return next(err)
		}

		bcrypt.hash(user.password, salt, (err, hash) => {
			if(err){
				return next(err)
			}
			user.password = hash
			return next()
		})

	})
})

export default mongoose.model('User', UserSchema)