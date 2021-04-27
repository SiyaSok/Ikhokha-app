import React, { createContext, useEffect, useState } from 'react';
import API from "../component/util/auth";



export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {

    const [productsData, setProductsData] = useState({});
    const [productPostData, setProductPostData] = useState({});
    const [loadingData, setLoadingData] = useState(false);
    const [postData, setPostData] = useState({ productName: "", productDescription: "", shopURl: "", image: "", brand: "" });


    useEffect(() => {
        getAllProducts();
    }, []);


    const getAllProducts = async () => {
        try {
            const res = await API.get('/products-posts');
            if (!res.data) return null
            console.log(res.data)
            setProductsData(res.data);

        }
        catch (error) {
            console.log(error);
        }
        setLoadingData(true)
    }


    const getProductPost = async (id) => {
        try {
            const res = await API.get(`/products-posts/${id}`);
            if (!res.data) return null
            console.log(res.data)
            setProductPostData(res.data);

        }
        catch (error) {
            console.log(error);
        }
        setLoadingData(true)

    }


    const postProduct = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/products-posts', { postData })
            setPostData({ productName: "", productDescription: "", shopURl: "", image: "", brand: "" });
            console.log(res);
            return (res);
        }
        catch (error) {
            console.log(error);
        }
    }
    const updateProductPost = (id) => async (e) => {
        e.preventDefault();
        try {
            const res = await API.patch(`/products-posts/${id}`, { postData })
            setPostData({ productName: "", productDescription: "", shopURl: "", image: "", brand: "" });
            console.log(res);
            return (res);
        }
        catch (error) {
            console.log(error);
        }
    }

    const deletProductPost = (id) => async () => {
        try {
            console.log(id)

            const res = await API.delete(`/products-posts/${id}`);
            console.log(res)
            getAllProducts();

        } catch (error) {

            console.log(error);

        }
    }



    return (

        <ProductContext.Provider
            value={{
                postData,
                productsData,
                loadingData,
                productPostData,
                setPostData,
                postProduct,
                updateProductPost,
                getProductPost,
                deletProductPost
            }}>
            {children}
        </ProductContext.Provider>
    )



}

export default ProductContextProvider;