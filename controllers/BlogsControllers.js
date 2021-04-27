import BlogsModel from '../models/BlogsModel.js'
import mongoose from 'mongoose';



export const getAllBlogs = async (req, res, next) => {

    try {
        const blogs = await BlogsModel.find();
        res.status(200).json(blogs);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }

}


export const postBlog = async (req, res, next) => {

    try {
        const PageData = req.body;

        const { blogHeading, blogAuthor, authorSocialMediaHandle, blogText, image } = PageData;

        const Data = await BlogsModel.create({ ...PageData, blogAuthor: req.userId });

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

export const getBlogPostsByAuthorsName = async (req, res, next) => {


    try {

        console.log(req.params.author);
        const Data = await BlogsModel.find({ blogAuthor: req.params.author });
        if (!Data) {
            return res.status(404).json({
                success: false,
                error: 'No Author Found'
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

export const getBlogPostById = async (req, res, next) => {


    try {

        console.log(req.params.id);
        const Data = await BlogsModel.findById(req.params.id);


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


export const updateBlogPostById = async (req, res) => {


    try {
        const { id } = req.params;
        const PageData = req.body.postData;

        const { blogHeading, blogAuthor, authorSocialMediaHandle, blogText, image } = PageData;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No blog with id: ${id}`);
        const updatedPost = { blogHeading, blogAuthor, authorSocialMediaHandle, blogText, image, _id: id };
        await BlogsModel.findByIdAndUpdate(id, updatedPost, { new: true });
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

export const DeletegetBlogPostById = async (req, res, next) => {


    try {
        console.log(req.params.id);

        const Data = await BlogsModel.findById(req.params.id);

        if (!Data) {
            return res.status(404).json({
                success: false,
                error: 'No Page found'
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
