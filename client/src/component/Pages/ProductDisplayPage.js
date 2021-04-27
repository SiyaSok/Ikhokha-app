import React, { useEffect, useContext } from 'react';
import { ProductContext } from '../../context/ProductContext'
import { AuthContext } from '../../context/AuthContext';

import { Link } from 'react-router-dom';
import Loading from '../util/Loading';
import PageHeader from '../util/PageHeader';

const ProductDisplayPage = ({ match }) => {
    const { user } = useContext(AuthContext);

    const { getProductPost, productPostData, loadingData } = useContext(ProductContext);

    useEffect(() => {
        getProductPost(match.params.id);
    }, [])


    return (<div id="productPostData">
        {loadingData ?
            <div id="" className="container-fluid">
                <PageHeader heading={loadingData ? productPostData.data.productName : null} />
                <div id="" className="container my-4">
                    <div className="row">
                        <div className="col-sm-6 col-12 mx-auto">
                            <img className="product-image img-fluid" src={productPostData.data.image} />
                        </div>
                        <div className="col-sm-6 col-12 mx-auto">
                            <div className="brand-image"> <img className="img-fluid" src={productPostData.data.brand} /></div>
                            <p className="my-2">{productPostData.data.productDescription}</p>

                            {user ?
                                <div className="row mx-2">
                                    <div className="col-sm-12 my-5 mx-auto">
                                        <a className="btn mx-2" target="_blank" rel="noreferrer" href={productPostData.data.shopURl} >Read More</a>
                                        <Link className="btn" to={`/post-product/${productPostData.data._id}`} >Edit Products</Link>
                                    </div></div>
                                : null}
                        </div>
                    </div>

                </div>
            </div>
            : <Loading />}

    </div >);
}

export default ProductDisplayPage;