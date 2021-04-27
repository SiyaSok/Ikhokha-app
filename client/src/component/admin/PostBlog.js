import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../../context/BlogContext';
import FileBase from 'react-file-base64';
import PageHeader from '../util/PageHeader';


const PostBlog = ({ match }) => {

    const { postData, setPostData, postBLog, blogPostData, getBlogPost, updateBlogPost } = useContext(BlogContext);


    useEffect(() => {

        if (match.params.id) {


            getBlogPost(match.params.id);
            if (blogPostData.data) {
                setPostData(blogPostData.data);

            }

        }
    }, [])



    return (
        <div className="mx-auto container-fluid text-center">


            <PageHeader heading={match.params.id ? <h1 className="display-5 fst-italic ">Edit Blog</h1> :
                <h1 className="display-5 fst-italic ">Post New Blog</h1>
            } />



            <form className="mx-auto col-sm-6 my-4">
                <div className="mb-3">
                    <input type="text"
                        className="form-control  mx-auto p-1 "
                        id="Heading"
                        placeholder="Blog heading"
                        value={postData.blogHeading} onChange={(e) => setPostData({ ...postData, blogHeading: e.target.value })}
                    />
                </div>
                {/* <div className="mb-3">
                    <input type="text"
                        className="form-control  mx-auto p-1 "
                        id="Author"
                        placeholder="Author"
                        value={postData.blogAuthor} onChange={(e) => setPostData({ ...postData, blogAuthor: e.target.value })}
                    />
                </div> */}
                <div className="mb-3">
                    <input type="text"
                        className="form-control  mx-auto p-1 "
                        id="SocialMediaHandle"
                        placeholder="Social Media Handle"
                        value={postData.authorSocialMediaHandle} onChange={(e) => setPostData({ ...postData, authorSocialMediaHandle: e.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <textarea className="form-control  mx-auto p-1" placeholder="Blog"
                        id="blogText" cols="20" rows="10"
                        value={postData.blogText} onChange={(e) => setPostData({ ...postData, blogText: e.target.value })}
                    ></textarea>
                </div>
                <div className="mb-3 ">
                    <label htmlFor="image" className="form-label mx-2">Blog Images</label>

                    <FileBase className="form-control  mx-auto p-1 " type="file" id="image" value={postData.image} placeholder="dfdfd"
                        multiple={false} onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} />

                </div>
                <button type="submit"
                    className="btn btn-primary" onClick={match.params.id ? updateBlogPost(match.params.id) : postBLog}>Submit</button>
            </form>
        </div>
    );
}

export default PostBlog;