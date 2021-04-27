import express from 'express';
import { getAllBlogs, postBlog, getBlogPostById, DeletegetBlogPostById, updateBlogPostById } from '../controllers/BlogsControllers.js'

// import signedIn from '../middleware/signedIn.js'

const router = express.Router();


router.get("/", getAllBlogs)
router.post("/", postBlog);
router.get("/:id", getBlogPostById)
router.patch("/:id", updateBlogPostById)
router.delete("/:id", DeletegetBlogPostById)






export default router;