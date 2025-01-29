import "./Blog.css";
import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types"; // ES6
const Blog = ({ blog,bookmarksHandler }) => {
  const { author, cover, title, authorImg, hashtags, readingTime } = blog;
  // console.log(blog);
  return (
    <div className="blog-container mb-8">
      <img className=" w-full h-[500px] rounded-xl p-2" src={cover} alt="" />
      <div className="auth-line flex justify-between">
        <div className="auth-container flex justify-between mx-6 my-2">
          <div>
            <img className="auth-img-container" src={authorImg} alt="" />
          </div>
          <div className="ml-2">
            <h4>{author}</h4>
            <p>Date: 15/5/2025 (4 days ago)</p>
          </div>
        </div>

        <div className="flex place-items-center">
          <span>
            <a href="">{readingTime} min read</a>
          </span>
          <button onClick={()=>bookmarksHandler(blog)} className="m-2">
            <FaBookmark className="text-gray-500"/>
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>

      {hashtags.map((tag, idx) => (
        <span key={idx}>{tag} </span>
      ))}
      <br />
      <button className="p-2 text-gray-600">Mark as read</button>
      
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  bookmarksHandler:PropTypes.func.isRequired
};
export default Blog;
