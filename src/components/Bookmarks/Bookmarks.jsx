import Bookmark from "../Bookmark/Bookmark";
import "./Bookmarks.css";
import { PropTypes } from "prop-types";

const Bookmarks = ({ bookmarks, spendTime }) => {
  // console.log(bookmarks);
  return (
    <div className="md:w-1/3 pl-4 py-4 ">
      <div className=" bg-gray-300 rounded-[5px]  py-4">
        <h4 className="text-[#6047EC] text-xl font-bold pl-4">
          Spent time on read : {spendTime} min
        </h4>
      </div>

      <div className=" mt-4  bg-gray-300 my-4  rounded-[5px] py-4">
        <h4 className="text-xl font-bold pl-4 ">
          BookMarked Blogs: {bookmarks.length}
        </h4>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  handleMarkAsRead: PropTypes.func,
  spendTime: PropTypes.number,
};

export default Bookmarks;
