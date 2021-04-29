import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../context/BlogContext';
import { AuthContext } from '../../context/AuthContext';

import { Link } from 'react-router-dom';
import Loading from '../util/Loading';
import PageHeader from '../util/PageHeader';




const BlogDisplayPage = ({ match }) => {
    const { user } = useContext(AuthContext);
    const { loadingData, blogData, setBlogPost, blogPost } = useContext(BlogContext)
    useEffect(() => {
        if (!blogData) return null;

        const filteredArr = blogData.reduce((acc, current) => {
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
        setBlogPost(filteredArr[0])
    }, [])
    return (
        <div id="BlogDisplayPage" className="">
            {loadingData ?

                <div id="" className="container-fluid">

                    {loadingData &&
                        <PageHeader heading={blogPost.blogHeading} />
                    }
                    {loadingData && <div id="" className="container">
                        <div className="row">
                            <div className="col-sm-8 col-12 mx-auto">
                                <img className="img-fluid" src={blogPost.image} alt={blogPost.blogHeading} />
                                <h4 className="blogHeader my-2">{blogPost.blogAuthor}</h4>
                                <div><p className="my-2">{blogPost.blogText}</p></div>
                            </div>

                            {user ?
                                <div className="row mx-2">
                                    <div className="col-sm-2 col-6 my-5 mx-auto">

                                        <Link className="btn" to={`/post-blog/${blogPost._id}`} >Edit blog</Link>
                                    </div>
                                </div> : null}
                        </div>
                    </div>}
                </div>

                // null
                : <Loading />}
        </div>
    );
}

export default BlogDisplayPage;