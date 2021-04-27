import mongoose from 'mongoose';


const connectDB = async () => {

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log(`MDB Connected:${conn.connection.host}`);
    } catch (error) {
        console.log(`MDB error Connection:${error.message}`);
        process.exit(1);
    }
}


export default connectDB;