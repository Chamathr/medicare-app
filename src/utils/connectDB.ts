import mongoose, { Connection } from 'mongoose';

let conn: Connection | undefined;

const connectToMongo = async (): Promise<Connection> => {
    if (conn) {
        return conn;
    }

    try {
        const uri = process.env.MONGODB_URI as string;
        conn = await mongoose.connect(uri) as unknown as Connection;
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }

    return conn;
};

export default connectToMongo;
