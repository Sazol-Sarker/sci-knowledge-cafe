import './Blog.css'
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog}) => {
    const {author,cover,title,authorImg,hashtags,readingTime}=blog;
    // console.log(blog);
    return (
        <div className="blog-container">
           
           <div className='auth-container'>

            <img className="auth-img-container" src={authorImg} alt="" />
            &nbsp;
            <h4>{author}</h4>
           </div>
           <button><FaBookmark />
           </button>
           {hashtags.map(tag=><p>{tag}</p>

           )}
           <p>Reading Time: {readingTime}</p>

            <h3>Blog:{title}</h3>

            
        </div>
    );
};

export default Blog;