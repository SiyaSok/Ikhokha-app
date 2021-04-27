import mongoose from 'mongoose';


const postSchema = mongoose.Schema({

    blogHeading:
    {
        type: String,
    },
    blogAuthor: {
        type: String,
    },
    authorSocialMediaHandle: {
        type: String,

    },
    name: {
        type: String,

    },
    blogText: {
        type: String,

    },
    image: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})


const BlogsModel = mongoose.model('BlogsModel', postSchema);


export default BlogsModel;