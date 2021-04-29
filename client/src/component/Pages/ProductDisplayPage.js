import React, { useEffect, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext'
import { AuthContext } from '../../context/AuthContext';

import { Link } from 'react-router-dom';
import Loading from '../util/Loading';
import PageHeader from '../util/PageHeader';

const ProductDisplayPage = ({ match }) => {
    const { user } = useContext(AuthContext);

    const { productsData, productPostData, loadingData, setProductPostData } = useContext(ProductContext);

    useEffect(() => {


        if (!productsData) return null;
        const filteredArr = productsData.reduce((acc, current) => {
            const x = acc.find
                (item =>
                    parseInt(item._id) === parseInt(match.params.id));
            if (!x) {
                return acc.concat([current]);
            }
            else {
                return acc;
            }
        }, [])

        setProductPostData(filteredArr[0]);


    }, [])


    return (
        <div id="productPostData main-content">
            {loadingData ?
                <div id="" className="container-fluid ">
                    <PageHeader heading={loadingData ? productPostData.productName : null} />
                    <div id="" className="container my-4 mt-5">
                        <div className="row">
                            <div className="col-sm-6 col-12 mx-a4uto">
                                <img className="product-image img-fluid" src={productPostData.image} />
                            </div>
                            <div className="col-sm-6 col-12 mx-auto">
                                <div className="brand-image"> <img className="img-fluid" src={productPostData.brand} /></div>
                                <p className="my-2">{productPostData.productDescription}</p>

                                {user ?
                                    <div className="row mx-2">
                                        <div className="col-sm-12 my-5 mx-auto">
                                            <a className="btn mx-2" target="_blank" rel="noreferrer" href={productPostData.shopURl} >Read More</a>
                                            <Link className="btn" to={`/post-product/${productPostData._id}`} >Edit Products</Link>
                                        </div></div>
                                    : null}
                            </div>
                        </div>

                    </div>
                </div>
                : <Loading />}

        </div >

    );
}

export default ProductDisplayPage;