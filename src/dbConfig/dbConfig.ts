import mongoose from 'mongoose';

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        const connection = mongoose.connection;

        connection.on('connected' , () => {
            console.log('MONGODB connected sucessfully');
        })
        connection.on('error' , (err) => {
            console.log('MONGODB connectino error. please make sure mongoDB is running ' + err);
            process.exit();
        })
    } catch (error) {
        console.log('something went wrong');
        console.log(error);
    }
}