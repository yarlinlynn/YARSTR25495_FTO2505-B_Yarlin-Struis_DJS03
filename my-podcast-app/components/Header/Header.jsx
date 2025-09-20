import { IoHomeOutline, IoSearch, IoFolderOpenOutline, IoPerson, IoSunny, IoMoon } from "react-icons/io5";
import "./Header.css";

function Header() {
    return (
    <header>
        <div className="header-container">
            <h1>🎙️ Podcast App</h1>
        
            <div className="container">
                <IoHomeOutline className="icon" />
        
                <div class="search-container">
                    <IoSearch className="icon" />
                    <input className="search" type="text" placeholder="What do you want to play?" />
                    <div className="browse-btn">
                    <IoFolderOpenOutline />
                    </div>
                </div>
                
            </div>
        
            <div class="btns">
                <IoPerson className="profile" />
                <div className="theme-btn">
                    <IoSunny className="light-btn" />
                    <IoMoon className="dark-btn" />
                </div>
            </div>
        </div>
    </header>
    )
}
export default Header