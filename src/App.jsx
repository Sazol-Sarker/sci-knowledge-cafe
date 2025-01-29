import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks,setBookmarks]=useState([]);

  console.log(bookmarks);
  // setfunc for setBookmarks state
  const bookmarksHandler=(bookmark)=>{
    // console.log(bookmark);
    //bookmark only if its 1st time
    const bookmarkExist=bookmarks.find(bookmarkPrev=>bookmark.id===bookmarkPrev.id);
    if(!bookmarkExist)
    {

      const newBookmark=[...bookmarks,bookmark];
      setBookmarks(newBookmark);
    }
  }
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs bookmarksHandler={bookmarksHandler}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
