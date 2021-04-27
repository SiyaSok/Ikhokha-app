import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext';
import FileBase from 'react-file-base64';
import PageHeader from '../util/PageHeader';

const PostProduct = ({ match }) => {

    const { postData, setPostData, postProduct, getProductPost, productPostData, updateProductPost } = useContext(ProductContext);




    useEffect(() => {

        if (match.params.id) {
            console.log(match.params.id);
            getProductPost(match.params.id);
            if (productPostData.data) {
                setPostData(productPostData.data);

            }

        }
    }, [])


    return (
        <div className="mx-auto container-fluid  text-center">

            <PageHeader heading={match.params.id ? <h1 className="display-5 fst-italic ">Edit Product Post</h1> :
                <h1 className="display-5 fst-italic ">Post New Product Blog</h1>
            } />
            <form className="mx-auto col-sm-6 my-4">
                <div className="mb-3">
                    <input type="text"
                        className="form-control  mx-auto p-1 "
                        id="productName"
                        placeholder="Product Name"
                        value={postData.productName} onChange={(e) => setPostData({ ...postData, productName: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <textarea className="form-control  mx-auto p-1" placeholder="Product Description"
                        id="blogText" cols="20" rows="10"
                        value={postData.productDescription} onChange={(e) => setPostData({ ...postData, productDescription: e.target.value })}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <input type="text"
                        className="form-control  mx-auto p-1 "
                        id="shopURl"
                        placeholder="Shop URl"
                        value={postData.shopURl} onChange={(e) => setPostData({ ...postData, shopURl: e.target.value })}
                    />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="image" className="form-label mx-2">Product Image</label>
                    <FileBase className="form-control  mx-auto p-1 " type="file" id="image" value={postData.image}
                        multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} />

                </div>
                <div className="mb-3 ">
                    <label htmlFor="brand" className="form-label mx-2 ">Brand Image</label>
                    <FileBase className="form-control  mx-auto p-1 " type="file" id="brand" value={postData.brand}
                        multiple={false} onDone={({ base64 }) => setPostData({ ...postData, brand: base64 })} />

                </div>
                <button type="submit"
                    className="btn btn-primary" onClick={match.params.id ? updateProductPost(match.params.id) : postProduct}>Submit</button>
            </form>
        </div>
    );
}

export default PostProduct;