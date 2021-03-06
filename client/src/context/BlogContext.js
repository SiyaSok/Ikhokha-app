import React, { createContext, useEffect, useState } from 'react';
import API from "../component/util/auth";



export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {


    const [blogData, setBlogData] = useState('');
    const [logos, setLogos] = useState({});

    const [blogPost, setBlogPost] = useState('');
    const [blogPostData, setBlogPostData] = useState('');
    const [loadingData, setLoadingData] = useState(false);
    const [postData, setPostData] = useState({ blogHeading: "", authorSocialMediaHandle: "", blogText: "", image: "" });
    const user = JSON.parse(localStorage.getItem('profile'));
    useEffect(() => {
        getAllBlogs();
    }, []);


    const getAllBlogs = async () => {
        try {
            const res = await API.get('/blog-posts');
            if (!res.data) return null
            setLoadingData(true);
            // setBlogPostData(res.data.slice(0, 5))
            setBlogData(res.data);
            console.log(res.data);

        }
        catch (error) {
            console.log(error);
        }
    }


    const getBlogPost = async (id) => {
        try {
            const res = await API.get(`/blog-posts/${id}`);
            if (!res.data) return null
            setLoadingData(true);

        }
        catch (error) {
            console.log(error);
        }
    }


    const postBLog = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/blog-posts', { ...postData, name: user?.user?.name })
            setPostData({ blogHeading: "", authorSocialMediaHandle: "", blogText: "", image: "" });
            console.log(res);
            return (res);
        }
        catch (error) {
            console.log(error);
        }
    }
    const updateBlogPost = (id) => async (e) => {
        e.preventDefault();
        try {
            const res = await API.patch(`/blog-posts/${id}`, { postData })
            setPostData({ blogHeading: "", authorSocialMediaHandle: "", blogText: "", image: "" });
            console.log(res);
            return (res);
        }
        catch (error) {
            console.log(error);
        }
    }

    const deletBlogPost = (id) => async () => {
        try {

            const res = await API.delete(`/blog-posts/${id}`);
            console.log(res)
            console.log(id)
            getAllBlogs();

        } catch (error) {

            console.log(error);

        }
    }


    return (

        <BlogContext.Provider
            value={{
                setPostData,
                getBlogPost,
                postBLog,
                deletBlogPost,
                updateBlogPost,
                setBlogPost,
                blogPost,
                postData,
                blogData,
                blogPostData,
                loadingData,
                logos
            }}>
            {children}
        </BlogContext.Provider>
    )



}

export default BlogContextProvider;