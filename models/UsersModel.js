import mongoose from 'mongoose';


const postSchema = mongoose.Schema({

    name:
    {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,

    },
    password: {
        type: String,

    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})


const UsersModel = mongoose.model('UsersModel', postSchema);


export default UsersModel;