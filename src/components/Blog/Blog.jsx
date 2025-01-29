import "./Blog.css";
import { FaBookmark } from "react-icons/fa";
import PropTypes from "prop-types"; // ES6
const Blog = ({ blog,bookmarksHandler,handleMarkAsRead }) => {
  const { id,author, cover, title, authorImg, hashtags, readingTime,writingDate } = blog;
  // console.log(blog);
  

   // Function to calculate the difference in days (handling YMD format)
   const getDaysAgo = (writingDate) => {
    const today = new Date(); // Current date
    const writingDateParsed = new Date(writingDate); // Parse the YMD format date
    const timeDiff = today - writingDateParsed; // Difference in milliseconds
    const daysAgo = Math.floor(timeDiff / (1000 * 3600 * 24)); // Convert ms to days
    return daysAgo;
  };

  // Calculate the number of days ago the blog was written
  const daysAgo = getDaysAgo(writingDate);



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
            <p>Date: {writingDate} (Posted {daysAgo} Days ago) </p>
          </div>
        </div>

        <div className="flex place-items-center">
          <span>
            <a href="">{readingTime} min read</a>
          </span>
          <button onClick={()=>bookmarksHandler(blog)} className="m-2  cursor-pointer">
            <FaBookmark className="text-gray-500 hover:text-blue-400"/>
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>

      {hashtags.map((tag, idx) => (
        <span key={idx}>{tag} </span>
      ))}
      <br />
      <button onClick={()=>handleMarkAsRead(id,readingTime)} className=" text-[#6047EC] underline 
       hover:bg-blue-300 transition-colors duration-300 rounded-2xl cursor-pointer p-2">
        Mark as read</button>
      
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  bookmarksHandler:PropTypes.func.isRequired,
  handleMarkAsRead:PropTypes.func.isRequired
};
export default Blog;
