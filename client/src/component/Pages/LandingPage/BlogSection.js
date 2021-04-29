import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { ProductContext } from '../../../context/ProductContext';

import useWindowDimensions from '../../util/srceensize';


const BlogSection = () => {
    const { productsData } = useContext(ProductContext);

    const { width } = useWindowDimensions();
    useEffect(() => {

    }, [width])


    return (<div id="blogs" className="container-xl">

        <div className="row mx-2">

            {productsData && width <= 550 ? productsData.slice(0, 2).map((Product) => (
                <div key={Product._id} className="col-sm-3 col-12 my-5">
                    <div className="post border-0" >
                        <Link to={`/products/${Product._id}`}>
                            <div className="img-wrap">
                                <img src={Product.image} className="" alt="..." />
                            </div>
                        </Link>
                        <div className="px-md-2 px-2 py-4">
                            <h5 className="title">{Product.productName}</h5>
                            <div className="description">
                                <p>{Product.productDescription}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )) : productsData && productsData.slice(0, 4).map((Product) => (
                <div key={Product._id} className="col-sm-3 col-12 my-5">
                    <div className="post border-0" >
                        <Link to={`/products/${Product._id}`}>
                            <div className="img-wrap">
                                <img src={Product.image} className="" alt="..." />
                            </div>
                        </Link>
                        <div className="px-md-2  px-2  py-4">
                            <h5 className="title">{Product.productName}</h5>
                            <div className="description">
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