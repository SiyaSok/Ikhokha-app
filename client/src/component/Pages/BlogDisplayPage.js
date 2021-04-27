import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../context/BlogContext';
import { AuthContext } from '../../context/AuthContext';

import { Link } from 'react-router-dom';
import Loading from '../util/Loading';
import PageHeader from '../util/PageHeader';




const BlogDisplayPage = ({ match }) => {
    const { user } = useContext(AuthContext);
    const { getBlogPost, blogPostData, loadingData } = useContext(BlogContext)
    useEffect(() => {
        getBlogPost(match.params.id);
    }, [])
    if (!loadingData) return null;
    console.log(loadingData)
    return (
        <div id="BlogDisplayPage" className="">
            {loadingData ?

                <div id="" className="container-fluid">

                    {loadingData &&
                        <PageHeader heading={blogPostData.data.blogHeading} />
                    }
                    {loadingData && <div id="" className="container">
                        <div className="row">
                            <div className="col-sm-8 col-12 mx-auto">
                                <img className="img-fluid" src={blogPostData.data.image} alt={blogPostData.data.blogHeading} />
                                <h4 className="blogHeader my-2">{blogPostData.data.blogAuthor}</h4>
                                <div><p className="my-2">{blogPostData.data.blogText}</p></div>
                            </div>

                            {user ?
                                <div className="row mx-2">
                                    <div className="col-sm-2 col-6 my-5 mx-auto">

                                        <Link className="btn" to={`/post-blog/${blogPostData.data._id}`} >Edit blog</Link>
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