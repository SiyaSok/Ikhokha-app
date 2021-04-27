import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ProductContext } from '../../context/ProductContext';
import { AuthContext } from '../../context/AuthContext';

import Loading from '../util/Loading';
import PageHeader from '../util/PageHeader';
import NewPostBtns from '../util/NewPostBtns';


const Products = () => {
    const { user } = useContext(AuthContext);

    const { productsData, loadingData, deletProductPost } = useContext(ProductContext)



    return (<div >

        {  loadingData ?

            <div id="Products" className="container-fluid main-content">
                {
                    loadingData &&
                    <PageHeader heading={`Cool products: 2021 pick.`}
                        subText={`Welcome to our regularly updated curation of the coolest, smartest kit money can buy.`} />
                }
                <div className="container-xl">
                    {user ? <NewPostBtns /> : null}
                    <div className="row mx-2">
                        {productsData && productsData.map((Product) => (
                            <div key={Product._id} className="col-sm-3 col-12 my-5">
                                <div className="product border-0" >
                                    <Link to={`/products/${Product._id}`}>
                                        <div className="img-wrap">
                                            <img src={Product.image} className="" alt={Product.productName} />
                                        </div>
                                    </Link>
                                    <div className="px-md-2 py-4 "  >
                                        <h5 className="title" onDoubleClick={deletProductPost(Product._id)}>{Product.productName}</h5>
                                        <div className="description"><p> {Product.productDescription}</p></div>
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>
                </div> </div> : <Loading />}

    </div>);
}

export default Products;