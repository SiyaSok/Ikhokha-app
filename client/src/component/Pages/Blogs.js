import React, { useContext } from 'react';
import Loading from '../util/Loading';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { BlogContext } from '../../context/BlogContext';
import PageHeader from '../util/PageHeader';
import NewPostBtns from '../util/NewPostBtns';


const Blogs = () => {
    const { user } = useContext(AuthContext);

    const { blogData, deletBlogPost, loadingData } = useContext(BlogContext)
    if (!blogData) return (null);



    return (

        <div >

            {loadingData ?


                <div id="blogs" className="container-fluid main-content">
                    <PageHeader heading={`Our Latest Blogs`} subText={`Welcome to our regularly updated curation of the
                         coolest, smartest kit money can buy.`} />

                    <div className="container-xl">
                        {user ? <NewPostBtns /> : null}
                        <div className="row mx-2">

                            {blogData.map((Post) => (
                                <div key={Post._id} className="col-sm-3 col-12 my-sm-5">
                                    <div className="post border-0" onDoubleClick={deletBlogPost(Post._id)}>
                                        <Link to={`/blogs/${Post._id}`}>
                                            <div className="img-wrap">
                                                <img src={Post.image} className="" alt="..." />
                                            </div>
                                        </Link>
                                        <div class="px-md-2 py-4">
                                            <h5 className="title">{Post.blogHeading}</h5>
                                            <div className="description">
                                                <p>{Post.blogText}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>
                : <Loading />
            }



        </div>);
}

export default Blogs;