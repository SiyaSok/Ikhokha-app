import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom'
import { BlogContext } from '../../../context/BlogContext';
import { ProductContext } from '../../../context/ProductContext';

import useWindowDimensions from '../../util/srceensize';


const BlogSection = () => {
    const { blogData, loadingData, logos } = useContext(BlogContext);
    const { productsData } = useContext(ProductContext);

    const { width } = useWindowDimensions();



    const [blogItems, setBlogItems] = useState([])
    useEffect(() => {

    }, [width])


    if (!logos === undefined) return null


    return (<div id="blogs" className="container-xl">

        <div className="row mx-2">

            {productsData && width <= 550 ? productsData.slice(0, 2).map((Product) => (
                <div key={Product._id} className="col-sm-3 col-12 my-5">
                    <div className="post border-0" >
                        <Link to={`/blogs/${Product._id}`}>
                            <div className="img-wrap">
                                <img src={Product.image} className="" alt="..." />
                            </div>
                        </Link>
                        <div class="px-md-2 py-4">
                            <h5 className="title">{Product.productName}</h5>
                            <div class="description">
                                <p>{Product.productDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )) : productsData && productsData.slice(0, 4).map((Product) => (
                <div key={Product._id} className="col-sm-3 col-12 my-5">
                    <div className="post border-0" >
                        <Link to={`/blogs/${Product._id}`}>
                            <div className="img-wrap">
                                <img src={Product.image} className="" alt="..." />
                            </div>
                        </Link>
                        <div class="px-md-2 py-4">
                            <h5 className="title">{Product.productName}</h5>
                            <div class="description">
                                <p>{Product.productDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))

            }
        </div>
        <div className="row mx-2">
            <div className="col-sm-2 col-6 my-5 mx-auto">

                <Link to="/products" className="btn"  >Read more</Link>
            </div>
        </div>
    </div>);
}

export default BlogSection;