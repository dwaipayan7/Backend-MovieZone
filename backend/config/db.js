import mongoose from "mongoose";


export const connectDB = async () => {
	try {
		const conn = await mongoose.connect('mongodb+srv://dwaipayan7:Tataybiswas@cluster0.td3xm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
		console.log("MongoDB connected: " + conn.connection.host);
	} catch (error) {
		console.error("Error connecting to MONGODB: " + error.message);
		process.exit(1);
	}
};
