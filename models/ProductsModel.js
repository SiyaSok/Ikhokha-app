import mongoose from 'mongoose';


const postSchema = mongoose.Schema({

    productName:
    {
        type: String,
        trim: true,
    },
    productDescription: {
        type: String,
        trim: true,
    },
    shopURl: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        trim: true,

    },
    brand: {
        type: String,
        trim: true,

    },
    createdAt: {
        type: Date,
        default: Date.now
    },


})


const ProductsModel = mongoose.model('ProductsModel', postSchema);


export default ProductsModel;