import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import useWindowDimensions from '../../util/srceensize';


const BlogSection = ({ blogData }) => {
    const { width } = useWindowDimensions();

    const [blogItems, setBlogItems] = useState({})
    useEffect(() => {
        const blogs = width <= 550 ? blogData.slice(0, 2) : blogData.slice(0, 5)
        setBlogItems(blogs);
    }, [width])


    // if (!blogItems) return null

    return (<div id="blogs" className="container-xl">

        <div className="row mx-2">

            {blogItems ? blogItems.map((Post) => (
                <div key={Post._id} className="col-sm-3 col-12 my-5">
                    <div className="post border-0" >
                        <Link to={`/blogs/${Post._id}`}>
                            <div className="img-wrap">
                                <img src={Post.image} className="" alt="..." />
                            </div>
                        </Link>
                        <div class="px-md-2 py-4">
                            <h5 className="title">{Post.blogHeading}</h5>
                            <div class="description">
                                <p>{Post.blogText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )) : null}
        </div>
        <div className="row mx-2">
            <div className="col-sm-2 col-6 my-5 mx-auto">

                <Link to="/blogs" className="btn"  >Read more</Link>
            </div>
        </div>
    </div>);
}

export default BlogSection;