import './Header.css'
const Header = () => {
    return (
        <div className='flex justify-between place-items-center font-extrabold mx-1 py-4 border-teal-400 border-b-2'>
             <h2 className="text-4xl">Knowledge Cafe</h2>
             <img className="image-container" src="https://i.ibb.co.com/M72pjzf/image.png" alt="" />
          
        </div>
    );
};

export default Header;