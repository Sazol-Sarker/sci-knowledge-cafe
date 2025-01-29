import PropTypes from "prop-types";
import './Bookmark.css'
const Bookmark = ({bookmark}) => {
    // console.log(bookmark);
    return (
        <div className="bg-slate-100 rounded-xl m-4 p-4 hover:bg-blue-300 transition-colors duration-300">
            <p className="text-xl">{bookmark.title}</p>
        </div>
    );
};

Bookmark.propTypes={
bookmark:PropTypes.object
}
export default Bookmark;