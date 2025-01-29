import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; // ES6

const Blogs = ({bookmarksHandler}) => {
    //declare state
    const [blogs,setBlogs]=useState([]);
    console.log(blogs);
    
    // declare useEffects
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {/* <h4>Total Blogs: {blogs.length}</h4> */}
            {/* <p>Spent time on read : 177 min</p> */}
            {
                blogs.map(blog=><Blog
                key={blog.id}
                blog={blog}
                bookmarksHandler={bookmarksHandler}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    bookmarksHandler :PropTypes.func

}

export default Blogs;