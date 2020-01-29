import mongoose from 'mongoose'

const dbConnect = () => {
	return mongoose.connect(
		process.env.MONGO_URI,
		{ 
			useNewUrlParser: true,
			useUnifiedTopology: true
		}
	)
}

export default dbConnect