import ProductsModel from '../models/ProductsModel.js'
import mongoose from 'mongoose';



export const getAllProducts = async (req, res, next) => {

    try {
        const products = await ProductsModel.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }

}

export const postProduct = async (req, res, next) => {


    try {
        const PageData = req.body.postData;

        const { productName, productDescription, shopURl, image, brand } = PageData;

        const Data = await ProductsModel.create(PageData);

        return res.status(201).json({
            success: true,
            data: req.body.postData
        });


    } catch (error) {

        return res.status(404).send({
            status: 404,
            error: `Page ${req.body.i} was not found.`
        })
    }


}

export const getProductById = async (req, res, next) => {


    try {
        const Data = await ProductsModel.findById(req.params.id);
        if (!Data) {
            return res.status(404).json({
                success: false,
                error: 'No Post Found'
            });
        }
        return res.status(200).json({
            success: true,
            data: Data
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }



}


export const updateProductPost = async (req, res) => {


    try {
        const { id } = req.params;
        const PageData = req.body.postData;

        const { productName, productDescription, shopURl, image, brand } = PageData;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);
        const updatedPost = { productName, productDescription, shopURl, image, brand, _id: id };
        await ProductsModel.findByIdAndUpdate(id, updatedPost, { new: true });
        return res.status(201).json({
            success: true,
            data: updatedPost
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }

}

export const deletegetProductById = async (req, res, next) => {


    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No product with id: ${id}`);

        const Data = await ProductsModel.findById(id);

        if (!Data) {
            return res.status(404).json({
                success: false,
                error: 'No Product found'
            });
        }

        await Data.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });


    } catch (error) {

        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }



}