import React from 'react';
import { Link } from 'react-router-dom'


const NewPostBtns = () => {
    return (

        <div className="row mx-2">
            <div className="mx-auto text-center">
                <Link className="btn-black my-2" to={`/post-product`}>
                    add new product
                        </Link>
                <Link className="btn-black mx-2 my-2" to={`/post-blog`}>
                    add new post
                        </Link>
            </div>
        </div>
    );
}

export default NewPostBtns;