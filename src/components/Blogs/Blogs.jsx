import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
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
        <div>
            {
                blogs.map(blog=><Blog
                key={blog.id}
                blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;