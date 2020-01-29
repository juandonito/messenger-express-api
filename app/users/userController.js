import User from './userModel'

export const postUser = (req, res) => {

	const {
		username,
		mail,
		password
	} = req.body

	const user = new User({
		username,
		mail,
		password
	})

	user.save((err) => {
		if(err){
			res.send(err)
		}else{
			res.send({
				message: 'User successfuly created'
			})
		}
	})
}

export const getUsers = (req, res) => {

	User.find({}, ['username', 'mail'], (err, users) => {
		if(err){
			res.send(err)
		}else{
			res.send({
				data: users
			})
		}
	})

}