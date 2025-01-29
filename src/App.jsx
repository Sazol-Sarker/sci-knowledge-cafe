import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [spendTime, setSpendTime] = useState(0);

  // console.log(bookmarks);

  // setfunc for setBookmarks state
  const bookmarksHandler = (bookmark) => {
    // console.log(bookmark);
    //bookmark can be added multiple times
    const newBookmark = [...bookmarks, bookmark];
    setBookmarks(newBookmark);
  };
  const handleMarkAsRead = (id, time) => {
    console.log("Mark as Read: => ", time);
    const newSpendTime = spendTime + time;
    setSpendTime(newSpendTime);
    // Remove bookmark when clicked mark as read
    const newBookmarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(newBookmarks);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <div className="md:flex">
        <Blogs
          bookmarksHandler={bookmarksHandler}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} spendTime={spendTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
