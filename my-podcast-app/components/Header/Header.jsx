import { IoHomeOutline, IoFolderOpenOutline, IoSunny, IoMoon } from "react-icons/io5";
import { IoHome, IoSearch, IoAdd, IoAlbums, IoPerson,  } from "react-icons/io5";
import "./Header.css";

function Header() {
    return (
        <>
            <header className="header">
                <h1>🎙️ Podcast App</h1>
            </header>
            
        </>
    )
}
export default Header

/*
<header>
                <div className="header-container">
                    <h1>🎙️</h1>
                
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
            <nav>
                <IoHome />
                <IoSearch />
                <IoAlbums />
                <IoAdd />
                <IoPerson/>
            </nav>
*/